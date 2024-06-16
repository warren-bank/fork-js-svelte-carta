import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	/*
	ssr: {
		noExternal: [
			'carta-md/**'
		]
	},
	*/
	build: {
		sourcemap: true
	}
});
