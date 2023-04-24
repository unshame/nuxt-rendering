<script setup lang="ts">
const { data: apiData } = await useFetch('/api/test?from=layout');
const state = useState('state');

state.value = apiData.value;
</script>

<template>
    <div>
        <header>Header</header>
        <slot />
    </div>
</template>
