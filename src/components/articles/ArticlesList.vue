<template>
    <div class="accordion" id="accordionExample">
        <ArticleItem
            v-for="article in articles"
            v-bind:key="article.uuid"
            v-bind:article="article"
            v-on:remove-article="removeArticle"
        />
    </div>
</template>

<script>
import ArticleItem from '@/components/articles/ArticleItem.vue'

export default {
    emits: ['remove-article'],
    props: ['articles'],
    methods: {
        removeArticle(articleUuid) {
            this.$emit('remove-article', articleUuid);
        }
    },
    components: {
        ArticleItem
    }
}
</script>