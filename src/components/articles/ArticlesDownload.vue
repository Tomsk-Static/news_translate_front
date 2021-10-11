<template>
    <div>
        Download new articles
        <input v-model="articleCount" size="1" maxlength="3"/>
        <button v-on:click="$emit('download-articles', articleCount)">&olarr;</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articleCount: 0
        }
    }
}
</script>