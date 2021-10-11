<template>
    <form>
        <input v-model="sourceText" placeholder="text"/>
        <input v-model="sourceUrl" placeholder="url"/>
        <button v-on:click="$emit('create-source', sourceText, sourceUrl)">Create</button>
    </form>
</template>

<script>
export default {
    data () {
        return {
            sourceText: '',
            sourceUrl: ''
        }
    }
}
</script>