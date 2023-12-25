import { defineConfig } from "astro/config";
import compress from "astro-compress";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import cloudflare from "@astrojs/cloudflare";
import qwikdev from "@qwikdev/astro";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [compress(), qwikdev(), icon()],
	output: "hybrid",
	adapter: cloudflare({
		mode: "directory",
	}),
	build: {
		format: "file",
	},
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
