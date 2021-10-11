<template>
    <li class="list-group-item">
        <div class="row">
            <div class="col-10">{{ source.text }}</div>
            <button type="button"
                    v-bind:class="'col-1 btn ' + styleDetect(source.categories_count)"
                    v-on:click="routeToCategory(source.uuid, source.text)"
                    >
                &rdsh;
            </button>
            <button type="button" 
                    class="col-1 btn btn-danger"
                    v-on:click="$emit('remove-source', source.uuid)"
                >
                &times;
            </button>
        </div>        
    </li>
</template>

<script>
export default {
    props: {
        source: {
            type: Object,
            required: true
        }
    },
    methods: {
        routeToCategory(sourceUuid, sourceText) {
            this.$router.push({
                name: 'Categories', 
                query: {
                    sourceUuid: sourceUuid,
                    sourceText: sourceText
                }
            })            
        },
        styleDetect(categories) {
            if (categories == 0) return 'btn-secondary';
            else return 'btn-success';
        }
    }
}
</script>
<style scoped>
    .full {
        background-color:#B1FF915f
    }

    .empty {
        background-color:#FFEB3B5f
    }
</style>