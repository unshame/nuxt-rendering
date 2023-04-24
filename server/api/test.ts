export default defineEventHandler((event) => {
    const query = getQuery(event);

    console.log(`hit /api/test from ${query?.from}`);

    return {
        timestamp: Date.now(),
        from: query?.from,
    };
});
