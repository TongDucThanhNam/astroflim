// @ts-check
// @ts-check
import {defineConfig, envField} from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: vercel(
        {
            isr: {
                expiration: 60 * 60 * 24,
                exclude: ['/api/**'],
            }
        }
    ),
    integrations: [react(), tailwind()],
    env: {

        schema: {

            PHIM_API: envField.string({context: "server", access: "public"}),
        }
    }
});