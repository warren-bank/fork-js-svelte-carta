import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import css from 'rollup-plugin-import-css'
import {rollupImportMapPlugin} from 'rollup-plugin-import-map'
import size from 'rollup-plugin-size'
import modify from 'rollup-plugin-modify'

const terserOptions = {
  ecma: 2015,
  mangle: {
    properties: {
      regex: /^(duration|easing|delay|activeItem|calculateDimensions|dirty|tick|preloadNext|opts|prev|next|close|loadImage|smallScreen|props|setResizeFunc|before_update|after_update|ctx|\$\$set|\$set|invalidate|skip_bound|callbacks|on_disconnect|on_mount|not_equal|on_destroy|fragment|\$\$)$/
    }
  },
  compress: {
    booleans_as_integers: true,
    pure_getters: true,
    drop_console: true,
    unsafe: true,
    unsafe_arrows: true,
    unsafe_comps: true,
    unsafe_Function: true,
    unsafe_math: true,
    unsafe_symbols: true,
    unsafe_methods: true,
    unsafe_proto: true,
    unsafe_regexp: true,
    unsafe_undefined: true,
    passes: 3
  }
}

/*
rm unneeded svelte stuff for vanilla scripts (hacky but saves a few bytes)
written for: svelte 3.55.1
need to re-test / modify if svelte is updated
*/
const cleanSvelteWhitespace = {
  markup: ({ content }) => {
    const code = content
      .replace(/(>)[\s]*([<{])/g, '$1$2')
      .replace(/({[/:][a-z]+})[\s]*([<{])/g, '$1$2')
      .replace(/({[#:][a-z]+ .+?})[\s]*([<{])/g, '$1$2')
      .replace(/([>}])[\s]+(<|{[/#:][a-z][^}]*})/g, '$1$2')
    return { code }
  }
}

const findReplaceOptions = [
  [/^\s*validate_store.+$|throw.+interpolate.+$/gm, ''],
  ['if (options.hydrate)', 'if (false)'],
  ['if (options.intro)', 'if (false)'],
  [`, important ? 'important' : ''`, ''],
  [/if \('props' in \$\$props.+;$/gm, ''],
  [/\$\$self\.\$\$set = \$\$props => {\s+};$/gm, ''],
  [
    /if \(type === 'object'\) {(.|\n)+if \(type === 'number'\)/gm,
    `if (type === 'number')`
  ],
  [': blank_object()', ': {}'],
  ['__svelte', '_bp'],
  [`typeof window !== 'undefined'`, 'true'],
  ['window', 'globalThis'],
  ['const doc = get_root_for_style(node)', 'const doc = document'],
  [/get_root_for_style\(node\),/g, 'document,'],
  [/^\sset .+{$\n\s+this.+[^}]+}/gm, '']
].map(([find, replace]) => modify({ find, replace }))

const packages = ['carta-md', 'plugin-anchor', 'plugin-attachment', 'plugin-code', 'plugin-emoji', 'plugin-math', 'plugin-slash', 'plugin-tikz']
const input    = packages.map(pkg => `packages/${pkg}/src/${pkg}.js`)

const genericConfigOptions = {
  input,
  plugins: [
    commonjs(),
    svelte({
      preprocess: [cleanSvelteWhitespace],
      compilerOptions: {
        immutable: true,
        css: false
      }
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    ...findReplaceOptions,
    css({
      output: 'carta.css'
    }),
    json({
      compact: true
    })
  ]
}

const genericConfigOptions_es = {
  ...genericConfigOptions,
  plugins: [
    ...genericConfigOptions.plugins,
    rollupImportMapPlugin({
      imports: {
        'shiki':        'https://esm.sh/shiki@1.9.0',
        'node-tikzjax': 'https://tikzjax.com/v1/tikzjax.js'
      }
    })
  ]
}

const genericConfigOptions_non_es = {
  ...genericConfigOptions,
  external: [
    'shiki'
  ]
}

const config = []

// unminified dist files

config.push({
  ...genericConfigOptions_es,
  output: [
    {
      format: 'es',
      dir: 'dist/full'
    }
  ]
})

// minified dist files

config.push({
  ...genericConfigOptions_es,
  plugins: [
    ...genericConfigOptions_es.plugins,
    terser(terserOptions),
    size()
  ],
  output: [
    {
      format: 'es',
      dir: 'dist/min'
    }
  ]
})

export default config
