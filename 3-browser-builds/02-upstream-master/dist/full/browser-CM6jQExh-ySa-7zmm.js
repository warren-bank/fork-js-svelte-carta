import { g as getDefaultExportFromCjs } from './_commonjsHelpers-CSOnQ4_A.js';
import { w as webNamespaces, s, h, v as visit, r, S as SKIP } from './utils-BcjXZ87z-DWutOXkH.js';

/**
 * @typedef {import('hast').Comment} HastComment
 * @typedef {import('hast').Doctype} HastDoctype
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').Nodes} HastNodes
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('hast').RootContent} HastRootContent
 * @typedef {import('hast').Text} HastText
 */


/**
 * Transform a DOM tree to a hast tree.
 *
 * @param {Node} tree
 *   DOM tree to transform.
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {HastNodes}
 *   Equivalent hast node.
 */
function fromDom(tree, options) {
  return transform(tree, {}) || {type: 'root', children: []}
}

/**
 * @param {Node} node
 *   DOM node to transform.
 * @param {Options} options
 *   Configuration.
 * @returns {HastNodes | undefined}
 *   Equivalent hast node.
 *
 *   Note that certain legacy DOM nodes (i.e., Attr nodes (2),  CDATA, processing instructions)
 */
function transform(node, options) {
  const transformed = one(node, options);
  if (transformed && options.afterTransform)
    options.afterTransform(node, transformed);
  return transformed
}

/**
 * @param {Node} node
 *   DOM node to transform.
 * @param {Options} options
 *   Configuration.
 * @returns {HastNodes | undefined}
 *   Equivalent hast node.
 */
function one(node, options) {
  switch (node.nodeType) {
    case 1 /* Element */: {
      const domNode = /** @type {Element} */ (node);
      return element(domNode, options)
    }

    // Ignore: Attr (2).

    case 3 /* Text */: {
      const domNode = /** @type {Text} */ (node);
      return text(domNode)
    }

    // Ignore: CDATA (4).
    // Removed: Entity reference (5)
    // Removed: Entity (6)
    // Ignore: Processing instruction (7).

    case 8 /* Comment */: {
      const domNode = /** @type {Comment} */ (node);
      return comment(domNode)
    }

    case 9 /* Document */: {
      const domNode = /** @type {Document} */ (node);
      return root(domNode, options)
    }

    case 10 /* Document type */: {
      return doctype()
    }

    case 11 /* Document fragment */: {
      const domNode = /** @type {DocumentFragment} */ (node);
      return root(domNode, options)
    }

    default: {
      return undefined
    }
  }
}

/**
 * Transform a document.
 *
 * @param {Document | DocumentFragment} node
 *   DOM node to transform.
 * @param {Options} options
 *   Configuration.
 * @returns {HastRoot}
 *   Equivalent hast node.
 */
function root(node, options) {
  return {type: 'root', children: all(node, options)}
}

/**
 * Transform a doctype.
 *
 * @returns {HastDoctype}
 *   Equivalent hast node.
 */
function doctype() {
  return {type: 'doctype'}
}

/**
 * Transform a text.
 *
 * @param {Text} node
 *   DOM node to transform.
 * @returns {HastText}
 *   Equivalent hast node.
 */
function text(node) {
  return {type: 'text', value: node.nodeValue || ''}
}

/**
 * Transform a comment.
 *
 * @param {Comment} node
 *   DOM node to transform.
 * @returns {HastComment}
 *   Equivalent hast node.
 */
function comment(node) {
  return {type: 'comment', value: node.nodeValue || ''}
}

/**
 * Transform an element.
 *
 * @param {Element} node
 *   DOM node to transform.
 * @param {Options} options
 *   Configuration.
 * @returns {HastElement}
 *   Equivalent hast node.
 */
function element(node, options) {
  const space = node.namespaceURI;
  const fn = space === webNamespaces.svg ? s : h;
  const tagName =
    space === webNamespaces.html ? node.tagName.toLowerCase() : node.tagName;
  /** @type {DocumentFragment | Element} */
  const content =
    // @ts-expect-error: DOM types are wrong, content can exist.
    space === webNamespaces.html && tagName === 'template' ? node.content : node;
  const attributes = node.getAttributeNames();
  /** @type {Record<string, string>} */
  const props = {};
  let index = -1;

  while (++index < attributes.length) {
    props[attributes[index]] = node.getAttribute(attributes[index]) || '';
  }

  return fn(tagName, props, all(content, options))
}

/**
 * Transform child nodes in a parent.
 *
 * @param {Document | DocumentFragment | Element} node
 *   DOM node to transform.
 * @param {Options} options
 *   Configuration.
 * @returns {Array<HastRootContent>}
 *   Equivalent hast nodes.
 */
function all(node, options) {
  const nodes = node.childNodes;
  /** @type {Array<HastRootContent>} */
  const children = [];
  let index = -1;

  while (++index < nodes.length) {
    const child = transform(nodes[index], options);

    if (child !== undefined) {
      // @ts-expect-error Assume no document inside document.
      children.push(child);
    }
  }

  return children
}

var md5 = {exports: {}};

var crypt = {exports: {}};

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt$1 = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt$1.rotl(n, 8) & 0x00FF00FF | crypt$1.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt$1.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  crypt.exports = crypt$1;
})();

var cryptExports = crypt.exports;

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

var charenc_1 = charenc;

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
var isBuffer_1 = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
};

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

(function(){
  var crypt = cryptExports,
      utf8 = charenc_1.utf8,
      isBuffer = isBuffer_1,
      bin = charenc_1.bin,

  // The core
  md5$1 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message) && message.constructor !== Uint8Array)
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5$1._ff,
        GG = md5$1._gg,
        HH = md5$1._hh,
        II = md5$1._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5$1._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5$1._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5$1._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5$1._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5$1._blocksize = 16;
  md5$1._digestsize = 16;

  md5.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5$1(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();

var md5Exports = md5.exports;
var v = /*@__PURE__*/getDefaultExportFromCjs(md5Exports);

let o = 0;
const S = (t, r$1, e) => visit(t, (a, i, c) => {
  if (a.type !== "element" || a.tagName !== "pre") return;
  const s = a.children.at(0);
  if (!s || s.tagName !== "code" || !s.properties.className || !s.properties.className.includes("language-tikz")) return;
  const f = r(s.children[0].value), n = document.createElement("div"), d = document.createElement("div"), u = document.createTextNode(f);
  n.classList.add("tikz-generated"), n.setAttribute("tikz-generation", o.toString()), ((e == null ? void 0 : e.center) ?? !0) && n.setAttribute("align", "center"), e != null && e.class && n.classList.add(...e.class.split(" ")), d.setAttribute("type", "tikzjax"), e != null && e.debug && d.setAttribute("data-show-console", "true"), d.appendChild(u);
  const g = v(JSON.stringify(d.dataset) + u.nodeValue);
  let l = globalThis.localStorage.getItem(g);
  l ? (e != null && e.postProcessing && (l = e.postProcessing(l)), n.innerHTML = l) : n.appendChild(d), r$1.sanitizer && (n.innerHTML = r$1.sanitizer(n.innerHTML));
  const z = fromDom(n);
  return c == null || c.children.splice(i, 1, z), [SKIP, i];
});
function A(t, r) {
  var i;
  const a = (i = t.detail.carta.renderer) == null ? void 0 : i.container;
  if (!a) {
    console.error("Failed to process tikz code: cannot find renderer container element.");
    return;
  }
  o++, y(a), b(r);
}
function y(t) {
  Array.from(t.querySelectorAll(".tikz-generated[tikz-generation]")).filter((r) => Number(r.getAttribute("tikz-generation") ?? -1) < o).forEach((r) => r.remove());
}
async function b(t) {
  if (globalThis.tikzjax != null) return;
  globalThis.tikzjax = !0;
  const e = (
    /* html */
    `<script type="text/javascript" id="tikzjax">${(await import('./tikzjax-Bvw2IMTd-Xy1d6ebr.js')).default}<\/script>`
  ), a = document.createRange();
  a.selectNode(document.getElementsByTagName("body")[0]);
  const i = a.createContextualFragment(e);
  document.body.appendChild(i), document.addEventListener("tikzjax-load-finished", (c) => {
    const m = c.target;
    t != null && t.postProcessing && (m.outerHTML = t.postProcessing(m.outerHTML));
  });
}

export { S as browserTikzTransform, A as processTikzScripts };
