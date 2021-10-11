<template>
    <li class="list-group-item">
        <div class="row">
            <div class="col-10">
                {{ category.url }}
            </div>
            <button type="button"
                    v-bind:class="'col-1 btn ' + styleDetect(category.articles_count)"
                    v-on:click="routeToArticles(category.uuid, source.uuid, source.text)"
                    >
                &rdsh;
            </button>
            <button type="button" 
                    class="col-1 btn btn-danger"
                    v-on:click="$emit('remove-category', category.uuid)"
                >
                &times;
            </button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            required: true
        },
        source: {
            type: Object,
            required: true
        }
    },
    methods: {
        routeToArticles(categoryUuid, sourceUuid, sourceText) {
            this.$router.push({
                name: 'Articles', 
                query: {
                    categoryUuid: categoryUuid, 
                    sourceUuid: sourceUuid, 
                    sourceText: sourceText
                }
            })
        },
        styleDetect(articles) {
            if (articles == 0) return 'btn-secondary';
            else return 'btn-success';
        }
    }
}
</script>