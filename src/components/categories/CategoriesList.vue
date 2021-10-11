<template>
    <ul class="list-group container">
    <CategoryItem
        v-for="category in categories"
        v-bind:key="category.uuid"
        v-bind:category="category"
        v-bind:source="source"
        v-on:remove-category="removeCategory"
    />
    </ul>
</template>

<script>
import CategoryItem from '@/components/categories/CategoryItem.vue'

export default {
    props: ['categories', 'source'],
    methods: {
        removeCategory(categoryUuid) {
            this.$emit('remove-category', categoryUuid);
        }
    },
    components: {
        CategoryItem
    }
}

</script>