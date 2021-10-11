<template>
    <ul class="list-group container">
        <SourceItem 
            v-for="source in sources"
            v-bind:key="source.uuid"
            v-bind:source="source"
            v-on:remove-source="removeSource"
        />
    </ul> 
</template>

<script>
import SourceItem from "@/components/sources/SourceItem.vue"

export default {
    props: ['sources'],
    methods: {
        removeSource(sourceUuid) {
            this.$emit('remove-source', sourceUuid)
        }
    },
    components: {
        SourceItem
    }
}
</script>