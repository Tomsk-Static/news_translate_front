<template>
    <h2>Categories from {{ sourceText }}</h2>
    <router-link to="/sources">Sources</router-link>
    <CategoriesDownload 
        v-on:download-categories="downloadCategories"
    />
    <CategroiesList 
        v-bind:categories="categories"
        v-bind:source="{uuid: sourceUuid, text:sourceText}"
        v-on:remove-category="removeCategory"
    />
</template>

<script>
import CategroiesList from "@/components/categories/CategoriesList.vue"
import CategoriesDownload from "@/components/categories/CategoriesDownload.vue"
import axios from 'axios'


export default {
    data() {
        return {
            sourceUuid: this.$route.query.sourceUuid,
            sourceText: this.$route.query.sourceText,
            categories: []
        }
    },
    created() {
        this.getCategories(this.sourceUuid);
    },
    methods: {
        getCategories(sourceUuid) {
            if (sourceUuid) {
                axios
                    .get('http://127.0.0.1:8000/source/categories/' + sourceUuid)
                    .then(response => {this.categories = response.data})
            } else {
                axios
                    .get('http://127.0.0.1:8000/categories')
                    .then(response => {this.categories = response.data})
            }
            
        },
        removeCategory(categoryUuid) {
            axios
                .delete('http://127.0.0.1:8000/category/' + categoryUuid)
                .then(response => {console.log(response.data)})
        },
        downloadCategories() {
            axios
                .post('http://127.0.0.1:8000/source/' + this.sourceUuid + '/download/categories')
                .then(response => {
                    response.data.forEach(element => this.categoties.push(element))
                })
        }
    },
    components: {
        CategroiesList,
        CategoriesDownload
    }

}
</script>