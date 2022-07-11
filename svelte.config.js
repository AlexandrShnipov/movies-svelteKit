import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: static_adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		// paths: {
		// 	base: '/movie-svelteKit',
		// 	assets: '/movie-svelteKit'
		// },
	}
};



export default config;


