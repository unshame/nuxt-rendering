import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    dir: {
        pages: '../../pages',
        layouts: '../../layouts',
    },
    nitro: {
        srcDir: '../../server',
    },
    modules: ['@nuxt/devtools'],
});
