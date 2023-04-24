<script setup lang="ts">
const state = useState('state', () => ref('nothing'));

const { data: apiData } = await useFetch('/api/test?from=page1');
</script>

<template>
    <h1>Page 1</h1>
    <NuxtLink to="/" no-prefetch>Go to index page</NuxtLink><br />
    <NuxtLink to="/page2" no-prefetch>Go to page 2</NuxtLink><br />

    State is: {{ state }}<br />
    Api data is: {{ apiData }}
</template>
