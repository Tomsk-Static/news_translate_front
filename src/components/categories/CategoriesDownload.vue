<template>
    <div>
        Download new categories
        <button v-on:click="$emit('download-categories')">&olarr;</button>
    </div>
</template>

<script>
export default {
    emits: ['download-articles']
}
</script>