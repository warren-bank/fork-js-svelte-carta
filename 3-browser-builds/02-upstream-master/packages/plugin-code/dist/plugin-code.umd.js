(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.CartaMd = factory());
})(this, (function () {
  /**
   * @typedef {import('hast').Nodes} Nodes
   * @typedef {import('hast').Parents} Parents
   */

  /**
   * Get the plain-text value of a hast node.
   *
   * @param {Nodes} node
   *   Node to serialize.
   * @returns {string}
   *   Serialized node.
   */
  function toString(node) {
    // “The concatenation of data of all the Text node descendants of the context
    // object, in tree order.”
    if ('children' in node) {
      return all(node)
    }

    // “Context object’s data.”
    return 'value' in node ? node.value : ''
  }

  /**
   * @param {Nodes} node
   *   Node.
   * @returns {string}
   *   Serialized node.
   */
  function one(node) {
    if (node.type === 'text') {
      return node.value
    }

    return 'children' in node ? all(node) : ''
  }

  /**
   * @param {Parents} node
   *   Node.
   * @returns {string}
   *   Serialized node.
   */
  function all(node) {
    let index = -1;
    /** @type {Array<string>} */
    const result = [];

    while (++index < node.children.length) {
      result[index] = one(node.children[index]);
    }

    return result.join('')
  }

  /**
   * @typedef {import('unist').Node} Node
   * @typedef {import('unist').Parent} Parent
   */


  /**
   * Generate an assertion from a test.
   *
   * Useful if you’re going to test many nodes, for example when creating a
   * utility where something else passes a compatible test.
   *
   * The created function is a bit faster because it expects valid input only:
   * a `node`, `index`, and `parent`.
   *
   * @param {Test} test
   *   *   when nullish, checks if `node` is a `Node`.
   *   *   when `string`, works like passing `(node) => node.type === test`.
   *   *   when `function` checks if function passed the node is true.
   *   *   when `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
   *   *   when `array`, checks if any one of the subtests pass.
   * @returns {Check}
   *   An assertion.
   */
  const convert =
    // Note: overloads in JSDoc can’t yet use different `@template`s.
    /**
     * @type {(
     *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
     *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
     *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
     *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
     *   ((test?: Test) => Check)
     * )}
     */
    (
      /**
       * @param {Test} [test]
       * @returns {Check}
       */
      function (test) {
        if (test === null || test === undefined) {
          return ok
        }

        if (typeof test === 'function') {
          return castFactory(test)
        }

        if (typeof test === 'object') {
          return Array.isArray(test) ? anyFactory(test) : propsFactory(test)
        }

        if (typeof test === 'string') {
          return typeFactory(test)
        }

        throw new Error('Expected function, string, or object as test')
      }
    );

  /**
   * @param {Array<Props | TestFunction | string>} tests
   * @returns {Check}
   */
  function anyFactory(tests) {
    /** @type {Array<Check>} */
    const checks = [];
    let index = -1;

    while (++index < tests.length) {
      checks[index] = convert(tests[index]);
    }

    return castFactory(any)

    /**
     * @this {unknown}
     * @type {TestFunction}
     */
    function any(...parameters) {
      let index = -1;

      while (++index < checks.length) {
        if (checks[index].apply(this, parameters)) return true
      }

      return false
    }
  }

  /**
   * Turn an object into a test for a node with a certain fields.
   *
   * @param {Props} check
   * @returns {Check}
   */
  function propsFactory(check) {
    const checkAsRecord = /** @type {Record<string, unknown>} */ (check);

    return castFactory(all)

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    function all(node) {
      const nodeAsRecord = /** @type {Record<string, unknown>} */ (
        /** @type {unknown} */ (node)
      );

      /** @type {string} */
      let key;

      for (key in check) {
        if (nodeAsRecord[key] !== checkAsRecord[key]) return false
      }

      return true
    }
  }

  /**
   * Turn a string into a test for a node with a certain type.
   *
   * @param {string} check
   * @returns {Check}
   */
  function typeFactory(check) {
    return castFactory(type)

    /**
     * @param {Node} node
     */
    function type(node) {
      return node && node.type === check
    }
  }

  /**
   * Turn a custom test into a test for a node that passes that test.
   *
   * @param {TestFunction} testFunction
   * @returns {Check}
   */
  function castFactory(testFunction) {
    return check

    /**
     * @this {unknown}
     * @type {Check}
     */
    function check(value, index, parent) {
      return Boolean(
        looksLikeANode(value) &&
          testFunction.call(
            this,
            value,
            typeof index === 'number' ? index : undefined,
            parent || undefined
          )
      )
    }
  }

  function ok() {
    return true
  }

  /**
   * @param {unknown} value
   * @returns {value is Node}
   */
  function looksLikeANode(value) {
    return value !== null && typeof value === 'object' && 'type' in value
  }

  /**
   * @param {string} d
   * @returns {string}
   */
  function color(d) {
    return d
  }

  /**
   * @typedef {import('unist').Node} UnistNode
   * @typedef {import('unist').Parent} UnistParent
   */


  /** @type {Readonly<ActionTuple>} */
  const empty = [];

  /**
   * Continue traversing as normal.
   */
  const CONTINUE = true;

  /**
   * Stop traversing immediately.
   */
  const EXIT = false;

  /**
   * Do not traverse this node’s children.
   */
  const SKIP = 'skip';

  /**
   * Visit nodes, with ancestral information.
   *
   * This algorithm performs *depth-first* *tree traversal* in *preorder*
   * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
   *
   * You can choose for which nodes `visitor` is called by passing a `test`.
   * For complex tests, you should test yourself in `visitor`, as it will be
   * faster and will have improved type information.
   *
   * Walking the tree is an intensive task.
   * Make use of the return values of the visitor when possible.
   * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
   * to check if a node matches, and then perform different operations.
   *
   * You can change the tree.
   * See `Visitor` for more info.
   *
   * @overload
   * @param {Tree} tree
   * @param {Check} check
   * @param {BuildVisitor<Tree, Check>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {undefined}
   *
   * @overload
   * @param {Tree} tree
   * @param {BuildVisitor<Tree>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {undefined}
   *
   * @param {UnistNode} tree
   *   Tree to traverse.
   * @param {Visitor | Test} test
   *   `unist-util-is`-compatible test
   * @param {Visitor | boolean | null | undefined} [visitor]
   *   Handle each node.
   * @param {boolean | null | undefined} [reverse]
   *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
   * @returns {undefined}
   *   Nothing.
   *
   * @template {UnistNode} Tree
   *   Node type.
   * @template {Test} Check
   *   `unist-util-is`-compatible test.
   */
  function visitParents(tree, test, visitor, reverse) {
    /** @type {Test} */
    let check;

    if (typeof test === 'function' && typeof visitor !== 'function') {
      reverse = visitor;
      // @ts-expect-error no visitor given, so `visitor` is test.
      visitor = test;
    } else {
      // @ts-expect-error visitor given, so `test` isn’t a visitor.
      check = test;
    }

    const is = convert(check);
    const step = reverse ? -1 : 1;

    factory(tree, undefined, [])();

    /**
     * @param {UnistNode} node
     * @param {number | undefined} index
     * @param {Array<UnistParent>} parents
     */
    function factory(node, index, parents) {
      const value = /** @type {Record<string, unknown>} */ (
        node && typeof node === 'object' ? node : {}
      );

      if (typeof value.type === 'string') {
        const name =
          // `hast`
          typeof value.tagName === 'string'
            ? value.tagName
            : // `xast`
            typeof value.name === 'string'
            ? value.name
            : undefined;

        Object.defineProperty(visit, 'name', {
          value:
            'node (' + color(node.type + (name ? '<' + name + '>' : '')) + ')'
        });
      }

      return visit

      function visit() {
        /** @type {Readonly<ActionTuple>} */
        let result = empty;
        /** @type {Readonly<ActionTuple>} */
        let subresult;
        /** @type {number} */
        let offset;
        /** @type {Array<UnistParent>} */
        let grandparents;

        if (!test || is(node, index, parents[parents.length - 1] || undefined)) {
          // @ts-expect-error: `visitor` is now a visitor.
          result = toResult(visitor(node, parents));

          if (result[0] === EXIT) {
            return result
          }
        }

        if ('children' in node && node.children) {
          const nodeAsParent = /** @type {UnistParent} */ (node);

          if (nodeAsParent.children && result[0] !== SKIP) {
            offset = (reverse ? nodeAsParent.children.length : -1) + step;
            grandparents = parents.concat(nodeAsParent);

            while (offset > -1 && offset < nodeAsParent.children.length) {
              const child = nodeAsParent.children[offset];

              subresult = factory(child, offset, grandparents)();

              if (subresult[0] === EXIT) {
                return subresult
              }

              offset =
                typeof subresult[1] === 'number' ? subresult[1] : offset + step;
            }
          }
        }

        return result
      }
    }
  }

  /**
   * Turn a return value into a clean result.
   *
   * @param {VisitorResult} value
   *   Valid return values from visitors.
   * @returns {Readonly<ActionTuple>}
   *   Clean result.
   */
  function toResult(value) {
    if (Array.isArray(value)) {
      return value
    }

    if (typeof value === 'number') {
      return [CONTINUE, value]
    }

    return value === null || value === undefined ? empty : [value]
  }

  /**
   * @typedef {import('unist').Node} UnistNode
   * @typedef {import('unist').Parent} UnistParent
   * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult
   */


  /**
   * Visit nodes.
   *
   * This algorithm performs *depth-first* *tree traversal* in *preorder*
   * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).
   *
   * You can choose for which nodes `visitor` is called by passing a `test`.
   * For complex tests, you should test yourself in `visitor`, as it will be
   * faster and will have improved type information.
   *
   * Walking the tree is an intensive task.
   * Make use of the return values of the visitor when possible.
   * Instead of walking a tree multiple times, walk it once, use `unist-util-is`
   * to check if a node matches, and then perform different operations.
   *
   * You can change the tree.
   * See `Visitor` for more info.
   *
   * @overload
   * @param {Tree} tree
   * @param {Check} check
   * @param {BuildVisitor<Tree, Check>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {undefined}
   *
   * @overload
   * @param {Tree} tree
   * @param {BuildVisitor<Tree>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {undefined}
   *
   * @param {UnistNode} tree
   *   Tree to traverse.
   * @param {Visitor | Test} testOrVisitor
   *   `unist-util-is`-compatible test (optional, omit to pass a visitor).
   * @param {Visitor | boolean | null | undefined} [visitorOrReverse]
   *   Handle each node (when test is omitted, pass `reverse`).
   * @param {boolean | null | undefined} [maybeReverse=false]
   *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).
   * @returns {undefined}
   *   Nothing.
   *
   * @template {UnistNode} Tree
   *   Node type.
   * @template {Test} Check
   *   `unist-util-is`-compatible test.
   */
  function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
    /** @type {boolean | null | undefined} */
    let reverse;
    /** @type {Test} */
    let test;
    /** @type {Visitor} */
    let visitor;

    {
      // @ts-expect-error: assume the overload with test was given.
      test = testOrVisitor;
      // @ts-expect-error: assume the overload with test was given.
      visitor = visitorOrReverse;
      reverse = maybeReverse;
    }

    visitParents(tree, test, overload, reverse);

    /**
     * @param {UnistNode} node
     * @param {Array<UnistParent>} parents
     */
    function overload(node, parents) {
      const parent = parents[parents.length - 1];
      const index = parent ? parent.children.indexOf(node) : undefined;
      return visitor(node, index, parent)
    }
  }

  const languagePrefix = "language-";
  function rehypeShikiFromHighlighter(highlighter, options) {
    const langs = highlighter.getLoadedLanguages();
    const {
      addLanguageClass = false,
      parseMetaString,
      cache,
      defaultLanguage,
      fallbackLanguage,
      onError,
      ...rest
    } = options;
    return function(tree) {
      visit(tree, "element", (node, index, parent) => {
        if (!parent || index == null || node.tagName !== "pre")
          return;
        const head = node.children[0];
        if (!head || head.type !== "element" || head.tagName !== "code" || !head.properties) {
          return;
        }
        const classes = head.properties.className;
        const languageClass = Array.isArray(classes) ? classes.find(
          (d) => typeof d === "string" && d.startsWith(languagePrefix)
        ) : void 0;
        let lang = typeof languageClass === "string" ? languageClass.slice(languagePrefix.length) : defaultLanguage;
        if (!lang)
          return;
        if (fallbackLanguage && !langs.includes(lang))
          lang = fallbackLanguage;
        const code = toString(head);
        const cachedValue = cache?.get(code);
        if (cachedValue) {
          parent.children.splice(index, 1, ...cachedValue);
          return;
        }
        const metaString = head.data?.meta ?? head.properties.metastring?.toString() ?? "";
        const meta = parseMetaString?.(metaString, node, tree) || {};
        const codeOptions = {
          ...rest,
          lang,
          meta: {
            ...rest.meta,
            ...meta,
            __raw: metaString
          }
        };
        if (addLanguageClass) {
          codeOptions.transformers || (codeOptions.transformers = []);
          codeOptions.transformers.push({
            name: "rehype-shiki:code-language-class",
            code(node2) {
              this.addClassToHast(node2, `${languagePrefix}${lang}`);
              return node2;
            }
          });
        }
        try {
          const fragment = highlighter.codeToHast(code, codeOptions);
          cache?.set(code, fragment.children);
          parent.children.splice(index, 1, ...fragment.children);
        } catch (error) {
          if (onError)
            onError(error);
          else
            throw error;
        }
      });
    };
  }

  // FIXME: find a better solution then copy-pasting these functions in next version.
  // However, when importing from carta-md, this causes a MODULE_NOT_FOUND error
  // for some reason.
  /**
   * Checks if a theme is a dual theme.
   * @param theme The theme to check.
   * @returns Whether the theme is a dual theme.
   */
  const isDualTheme = (theme) => typeof theme == 'object' && 'light' in theme && 'dark' in theme;
  /**
   * Checks if a theme is a single theme.
   * @param theme The theme to check.
   * @returns Whether the theme is a single theme.
   */
  const isSingleTheme = (theme) => !isDualTheme(theme);
  /**
   * Carta code highlighting plugin. Themes available on [GitHub](https://github.com/speed-highlight/core/tree/main/dist/themes).
   */
  const code = (options) => {
      return {
          transformers: [
              {
                  execution: 'async',
                  type: 'rehype',
                  async transform({ processor, carta }) {
                      let theme = options?.theme;
                      const highlighter = await carta.highlighter();
                      if (!theme) {
                          theme = highlighter.theme; // Use the theme specified in the highlighter
                      }
                      if (isSingleTheme(theme)) {
                          processor.use(rehypeShikiFromHighlighter, highlighter, { ...options, theme });
                      }
                      else {
                          processor.use(rehypeShikiFromHighlighter, highlighter, { ...options, themes: theme });
                      }
                  }
              }
          ]
      };
  };

  return code;

}));
