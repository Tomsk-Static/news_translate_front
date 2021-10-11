<template>
    <h2>
        Articles from {{ source.text }}
    </h2>
    <router-view></router-view>
    <ArticlesDownload 
        v-on:download-articles="downloadArticles"
    />
    <router-link :to="{name: 'Categories', query: {
        sourceUuid: source.uuid, 
        sourceText: source.text}
    }">
        Categories
    </router-link>
    <ArticlesList 
        v-bind:articles="articles"
        v-on:remove-article="removeArticle"
    />
</template>

<script>
import ArticlesList from '@/components/articles/ArticlesList.vue'
import ArticlesDownload from '@/components/articles/ArticlesDownload.vue'
import axios from 'axios'

export default {
    data() {
        return {
            source: {
                uuid: this.$route.query.sourceUuid,
                text: this.$route.query.sourceText
            },
            categoryUuid: this.$route.query.categoryUuid,
            articles: []
        }
    },
    created() {
        this.getArticles(this.categoryUuid);
    },
    methods: {
        getArticles(categoryUuid) {
            if (categoryUuid) {
                axios
                    .get('http://127.0.0.1:8000/category/articles/' + categoryUuid)
                    .then(response => {this.articles = response.data})
            } else {
                axios
                    .get('http://127.0.0.1:8000/articles')
                    .then(response => {this.articles = response.data})
            }
        },
        removeArticle(articleUuid) {
            axios
                .delete('http://127.0.0.1:8000/article/' + articleUuid)
                .then(response => {console.log(response.data)})
        },
        downloadArticles(articleCount) {
            axios
                .post('http://127.0.0.1:8000/category/download/articles', {uuid: {value: this.categoryUuid}, count: articleCount})
                .then(response => {
                    response.data.forEach(element => this.articles.push(element));
                })
        }
    },
    components: {
        ArticlesList,
        ArticlesDownload
    }
}
</script>