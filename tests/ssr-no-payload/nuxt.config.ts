import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    dir: {
        pages: '../../pages',
        layouts: '../../layouts',
    },
    experimental: {
        payloadExtraction: false,
    },
    nitro: {
        srcDir: '../../server',
    },
    modules: ['@nuxt/devtools'],
});
