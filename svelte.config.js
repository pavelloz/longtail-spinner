import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [
        preprocess({
            postcss: true,
        }),
    ],
    kit: {
        adapter: adapter({
            fallback: "index.html",
        }),
        inlineStyleThreshold: 102400,
        prerender: {
            default: true
        }
    },
}

export default config
