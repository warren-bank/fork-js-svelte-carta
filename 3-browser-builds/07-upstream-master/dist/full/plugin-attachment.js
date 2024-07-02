import { B as noop, R as safe_not_equal, S as SvelteComponent, i as init, n as not_equal, A as svg_element, b as attr, c as insert, d as append, j as detach, a as empty, t as transition_in, f as transition_out, h as check_outros, e as element, l as listen, N as prevent_default, g as group_outros, z as run_all, T as subscribe, r as bubble, U as is_function, J as create_component, K as mount_component, M as destroy_component, I as construct_svelte_component, E as text, F as set_data, V as get_store_value } from './index-B0FRqn-g.js';

const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * https://svelte.dev/docs/svelte-store#writable
 * @template T
 * @param {T} [value] initial value
 * @param {import('./public.js').StartStopNotifier<T>} [start]
 * @returns {import('./public.js').Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {import('./public.js').Unsubscriber} */
	let stop;
	/** @type {Set<import('./private.js').SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();
	/** @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {import('./public.js').Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(value));
	}

	/**
	 * @param {import('./public.js').Subscriber<T>} run
	 * @param {import('./private.js').Invalidator<T>} [invalidate]
	 * @returns {import('./public.js').Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {import('./private.js').SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

/* ..\..\1-builds\07-upstream-master\packages\plugin-attachment\dist\icons\UploadIcon.svelte generated by Svelte v4.2.18 */

function create_fragment$4(ctx) {
	let svg;
	let path;

	return {
		c() {
			svg = svg_element("svg");
			path = svg_element("path");
			attr(path, "fill", "currentColor");
			attr(path, "d", "M10 16h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 3.7a.996.996 0 0 0-1.41 0L6.71 8.29c-.63.63-.19 1.71.7 1.71H9v5c0 .55.45 1 1 1zm-4 2h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1z");
			attr(svg, "class", "upload-icon");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "width", "24");
			attr(svg, "height", "24");
			attr(svg, "viewBox", "0 0 24 24");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(svg);
			}
		}
	};
}

class UploadIcon extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment$4, not_equal, {});
	}
}

/* ..\..\1-builds\07-upstream-master\packages\plugin-attachment\dist\DropOverlay.svelte generated by Svelte v4.2.18 */

function create_if_block$1(ctx) {
	let div;
	let current_block_type_index;
	let if_block;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block_1$1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*dropOverlay*/ ctx[3]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div = element("div");
			if_block.c();
			attr(div, "class", "carta-drop-overlay");
			attr(div, "role", "button");
			attr(div, "tabindex", "0");
			attr(div, "aria-label", "Drop files to upload");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(div, "dragover", prevent_default(/*dragover_handler*/ ctx[7])),
					listen(div, "dragenter", /*dragenter_handler*/ ctx[8]),
					listen(div, "dragleave", /*dragleave_handler*/ ctx[9]),
					listen(div, "drop", function () {
						if (is_function(/*handleDrop*/ ctx[2])) /*handleDrop*/ ctx[2].apply(this, arguments);
					})
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(div, null);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(div);
			}

			if_blocks[current_block_type_index].d();
			mounted = false;
			run_all(dispose);
		}
	};
}

// (17:58) {:else}
function create_else_block(ctx) {
	let div1;
	let div0;
	let uploadicon;
	let current;
	uploadicon = new UploadIcon({});

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			create_component(uploadicon.$$.fragment);
			attr(div0, "class", "carta-drop-overlay-content");
			attr(div1, "class", "carta-drop-overlay-container");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			mount_component(uploadicon, div0, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(uploadicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(uploadicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(div1);
			}

			destroy_component(uploadicon);
		}
	};
}

// (17:2) {#if dropOverlay}
function create_if_block_1$1(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	var switch_value = /*dropOverlay*/ ctx[3];

	function switch_props(ctx, dirty) {
		return {};
	}

	if (switch_value) {
		switch_instance = construct_svelte_component(switch_value, switch_props());
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) mount_component(switch_instance, target, anchor);
			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*dropOverlay*/ 8 && switch_value !== (switch_value = /*dropOverlay*/ ctx[3])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = construct_svelte_component(switch_value, switch_props());
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(switch_instance_anchor);
			}

			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

function create_fragment$3(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*dropOverlay*/ ctx[3] !== false && (/*$draggingOverTextArea*/ ctx[4] || /*$draggingOverOverlay*/ ctx[5]) && create_if_block$1(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*dropOverlay*/ ctx[3] !== false && (/*$draggingOverTextArea*/ ctx[4] || /*$draggingOverOverlay*/ ctx[5])) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*dropOverlay, $draggingOverTextArea, $draggingOverOverlay*/ 56) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let $draggingOverTextArea,
		$$unsubscribe_draggingOverTextArea = noop,
		$$subscribe_draggingOverTextArea = () => ($$unsubscribe_draggingOverTextArea(), $$unsubscribe_draggingOverTextArea = subscribe(draggingOverTextArea, $$value => $$invalidate(4, $draggingOverTextArea = $$value)), draggingOverTextArea);

	let $draggingOverOverlay,
		$$unsubscribe_draggingOverOverlay = noop,
		$$subscribe_draggingOverOverlay = () => ($$unsubscribe_draggingOverOverlay(), $$unsubscribe_draggingOverOverlay = subscribe(draggingOverOverlay, $$value => $$invalidate(5, $draggingOverOverlay = $$value)), draggingOverOverlay);

	$$self.$$.on_destroy.push(() => $$unsubscribe_draggingOverTextArea());
	$$self.$$.on_destroy.push(() => $$unsubscribe_draggingOverOverlay());
	let { carta } = $$props;
	let { draggingOverTextArea } = $$props;
	$$subscribe_draggingOverTextArea();
	let { draggingOverOverlay } = $$props;
	$$subscribe_draggingOverOverlay();
	let { handleDrop } = $$props;
	let { dropOverlay } = $$props;

	function dragover_handler(event) {
		bubble.call(this, $$self, event);
	}

	const dragenter_handler = () => draggingOverOverlay.set(true);
	const dragleave_handler = () => draggingOverOverlay.set(false);

	$$self.$$set = $$props => {
		if ('carta' in $$props) $$invalidate(6, carta = $$props.carta);
		if ('draggingOverTextArea' in $$props) $$subscribe_draggingOverTextArea($$invalidate(0, draggingOverTextArea = $$props.draggingOverTextArea));
		if ('draggingOverOverlay' in $$props) $$subscribe_draggingOverOverlay($$invalidate(1, draggingOverOverlay = $$props.draggingOverOverlay));
		if ('handleDrop' in $$props) $$invalidate(2, handleDrop = $$props.handleDrop);
		if ('dropOverlay' in $$props) $$invalidate(3, dropOverlay = $$props.dropOverlay);
	};

	return [
		draggingOverTextArea,
		draggingOverOverlay,
		handleDrop,
		dropOverlay,
		$draggingOverTextArea,
		$draggingOverOverlay,
		carta,
		dragover_handler,
		dragenter_handler,
		dragleave_handler
	];
}

class DropOverlay extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance$1, create_fragment$3, not_equal, {
			carta: 6,
			draggingOverTextArea: 0,
			draggingOverOverlay: 1,
			handleDrop: 2,
			dropOverlay: 3
		});
	}
}

/* ..\..\1-builds\07-upstream-master\packages\plugin-attachment\dist\icons\AttachIcon.svelte generated by Svelte v4.2.18 */

function create_fragment$2(ctx) {
	let svg;
	let path;

	return {
		c() {
			svg = svg_element("svg");
			path = svg_element("path");
			attr(path, "fill", "none");
			attr(path, "stroke", "currentColor");
			attr(path, "stroke-width", "2");
			attr(path, "d", "m22 12l-9 9c-6 6-15-3-9-9l9-9c4-4 10 2 6 6l-9 9c-2 2-5-1-3-3l9-9");
			attr(svg, "class", "attach-icon");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "width", "16");
			attr(svg, "height", "16");
			attr(svg, "viewBox", "0 0 24 24");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(svg);
			}
		}
	};
}

class AttachIcon extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment$2, not_equal, {});
	}
}

/* ..\..\1-builds\07-upstream-master\packages\plugin-attachment\dist\icons\SpinnerIcon.svelte generated by Svelte v4.2.18 */

function create_fragment$1(ctx) {
	let svg;
	let g;
	let path0;
	let path1;

	return {
		c() {
			svg = svg_element("svg");
			g = svg_element("g");
			path0 = svg_element("path");
			path1 = svg_element("path");
			attr(path0, "fill-rule", "evenodd");
			attr(path0, "d", "M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z");
			attr(path0, "clip-rule", "evenodd");
			attr(path0, "opacity", ".2");
			attr(path1, "d", "M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7H2Z");
			attr(g, "fill", "currentColor");
			attr(svg, "class", "spinner-icon");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "width", "24");
			attr(svg, "height", "24");
			attr(svg, "viewBox", "0 0 24 24");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, g);
			append(g, path0);
			append(g, path1);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) {
				detach(svg);
			}
		}
	};
}

class SpinnerIcon extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment$1, not_equal, {});
	}
}

/* ..\..\1-builds\07-upstream-master\packages\plugin-attachment\dist\LoadingOverlay.svelte generated by Svelte v4.2.18 */

function create_if_block(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block_1, create_if_block_2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*loadingOverlay*/ ctx[1]) return 0;
		if (/*$uploadingFiles*/ ctx[2].length > 0) return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					} else {
						if_block.p(ctx, dirty);
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					if_block = null;
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(if_block_anchor);
			}

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}
		}
	};
}

// (6:171) 
function create_if_block_2(ctx) {
	let div;
	let spinnericon;
	let span;
	let t0;
	let t1_value = /*$uploadingFiles*/ ctx[2].length + "";
	let t1;
	let t2;
	let t3_value = (/*$uploadingFiles*/ ctx[2].length > 1 ? 's' : '') + "";
	let t3;
	let current;
	spinnericon = new SpinnerIcon({});

	return {
		c() {
			div = element("div");
			create_component(spinnericon.$$.fragment);
			span = element("span");
			t0 = text("Loading ");
			t1 = text(t1_value);
			t2 = text(" file");
			t3 = text(t3_value);
			attr(div, "class", "carta-loading-overlay");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(spinnericon, div, null);
			append(div, span);
			append(span, t0);
			append(span, t1);
			append(span, t2);
			append(span, t3);
			current = true;
		},
		p(ctx, dirty) {
			if ((!current || dirty & /*$uploadingFiles*/ 4) && t1_value !== (t1_value = /*$uploadingFiles*/ ctx[2].length + "")) set_data(t1, t1_value);
			if ((!current || dirty & /*$uploadingFiles*/ 4) && t3_value !== (t3_value = (/*$uploadingFiles*/ ctx[2].length > 1 ? 's' : '') + "")) set_data(t3, t3_value);
		},
		i(local) {
			if (current) return;
			transition_in(spinnericon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(spinnericon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(div);
			}

			destroy_component(spinnericon);
		}
	};
}

// (6:39) {#if loadingOverlay}
function create_if_block_1(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;
	var switch_value = /*loadingOverlay*/ ctx[1];

	function switch_props(ctx, dirty) {
		return {
			props: {
				uploadingFiles: /*$uploadingFiles*/ ctx[2]
			}
		};
	}

	if (switch_value) {
		switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) mount_component(switch_instance, target, anchor);
			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*loadingOverlay*/ 2 && switch_value !== (switch_value = /*loadingOverlay*/ ctx[1])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				const switch_instance_changes = {};
				if (dirty & /*$uploadingFiles*/ 4) switch_instance_changes.uploadingFiles = /*$uploadingFiles*/ ctx[2];
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(switch_instance_anchor);
			}

			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*loadingOverlay*/ ctx[1] !== false && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*loadingOverlay*/ ctx[1] !== false) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*loadingOverlay*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) {
				detach(if_block_anchor);
			}

			if (if_block) if_block.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $uploadingFiles,
		$$unsubscribe_uploadingFiles = noop,
		$$subscribe_uploadingFiles = () => ($$unsubscribe_uploadingFiles(), $$unsubscribe_uploadingFiles = subscribe(uploadingFiles, $$value => $$invalidate(2, $uploadingFiles = $$value)), uploadingFiles);

	$$self.$$.on_destroy.push(() => $$unsubscribe_uploadingFiles());
	let { carta } = $$props;
	let { uploadingFiles } = $$props;
	$$subscribe_uploadingFiles();
	let { loadingOverlay } = $$props;

	$$self.$$set = $$props => {
		if ('carta' in $$props) $$invalidate(3, carta = $$props.carta);
		if ('uploadingFiles' in $$props) $$subscribe_uploadingFiles($$invalidate(0, uploadingFiles = $$props.uploadingFiles));
		if ('loadingOverlay' in $$props) $$invalidate(1, loadingOverlay = $$props.loadingOverlay);
	};

	return [uploadingFiles, loadingOverlay, $uploadingFiles, carta];
}

class LoadingOverlay extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, not_equal, {
			carta: 3,
			uploadingFiles: 0,
			loadingOverlay: 1
		});
	}
}

const ImageMimeTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'];
/**
 * Carta attachment plugin.
 */
const attachment = (options) => {
    let carta;
    const allowedMimeTypes = options.supportedMimeTypes || ImageMimeTypes;
    const draggingOverTextArea = writable(false);
    const draggingOverOverlay = writable(false);
    const uploadingFiles = writable([]);
    const draggingOver = writable(false);
    draggingOverTextArea.subscribe((v) => draggingOver.set(v || get_store_value(draggingOverOverlay)));
    draggingOverOverlay.subscribe((v) => draggingOver.set(v || get_store_value(draggingOverTextArea)));
    draggingOver.subscribe((v) => {
        if (!carta)
            return;
        // Add custom class to editor
        if (!carta.element)
            return;
        if (v)
            carta.element.classList.add('dragging-attachment');
        else
            carta.element.classList.remove('dragging-attachment');
    });
    async function handleFile(file) {
        if (!allowedMimeTypes.includes(file.type))
            return;
        if (!carta?.input)
            return;
        const textarea = carta.input.textarea;
        const loadingStr = `[Uploading ${file.name}](loading)`;
        carta.input.insertAt(carta.input.textarea.selectionStart, loadingStr);
        carta.input.update();
        uploadingFiles.update((files) => [...files, file]);
        const path = await options.upload(file);
        uploadingFiles.update((files) => files.filter((f) => f !== file));
        // Remove loading string
        const value = carta.input.textarea.value;
        const loadingStrIndex = value.indexOf(loadingStr);
        if (loadingStrIndex !== -1)
            carta.input.removeAt(loadingStrIndex, loadingStr.length);
        carta.input.update();
        if (!path)
            return;
        const str = ImageMimeTypes.includes(file.type)
            ? `![${file.name}](${path})`
            : `[${file.name}](${path})`;
        carta.input.insertAt(loadingStrIndex, str);
        carta.input.update();
        carta.input.history.saveState(textarea.value, textarea.selectionStart);
    }
    function handleDrop(e) {
        e.preventDefault();
        draggingOverOverlay.set(false);
        draggingOverTextArea.set(false);
        const files = e.dataTransfer?.files;
        if (!files)
            return;
        for (const file of files)
            handleFile(file);
    }
    function handlePaste(e) {
        const items = e.clipboardData?.items;
        if (!items)
            return;
        const itemsArray = Array.from(items);
        for (const item of itemsArray) {
            if (item.kind === 'file') {
                const file = item.getAsFile();
                if (!file)
                    continue;
                e.preventDefault();
                handleFile(file);
            }
        }
    }
    return {
        onLoad: ({ carta: c }) => {
            carta = c;
        },
        listeners: [
            ['drop', handleDrop, false],
            ['dragenter', () => draggingOverTextArea.set(true)],
            ['dragleave', () => draggingOverTextArea.set(false)],
            ['dragover', (e) => e.preventDefault()],
            ['paste', handlePaste, false]
        ],
        components: [
            {
                component: DropOverlay,
                props: {
                    draggingOverTextArea,
                    draggingOverOverlay,
                    handleDrop,
                    dropOverlay: options.dropOverlay
                },
                parent: 'input'
            },
            {
                component: LoadingOverlay,
                props: {
                    uploadingFiles,
                    loadingOverlay: options.loadingOverlay
                },
                parent: 'input'
            }
        ],
        icons: options.disableIcon
            ? []
            : [
                {
                    component: AttachIcon,
                    action() {
                        // Tricky way to open file selection dialog
                        const input = document.createElement('input');
                        input.type = 'file';
                        input.multiple = true;
                        input.accept = allowedMimeTypes.join(', ');
                        input.onchange = (e) => {
                            const files = e.target?.files;
                            if (!files)
                                return;
                            for (const file of files)
                                handleFile(file);
                        };
                        input.click();
                    },
                    id: 'attach',
                    label: 'Attach file'
                }
            ]
    };
};

export { attachment as default };