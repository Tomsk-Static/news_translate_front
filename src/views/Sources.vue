<template>
    <h2>Sources</h2>
    <router-link to="/">Home page</router-link>
    <SourceAdd 
        v-on:create-source="createSource"
    />
    <SourcesList 
        v-bind:sources="sources"
        v-on:remove-source="removeSource"
    />
</template>

<script>
import SourcesList from "@/components/sources/SourcesList.vue"
import SourceAdd from "@/components/sources/SourceAdd.vue"

import axios from "axios"

export default {
    data() {
        return {
            sources: []
        }
    },
    created() {
        this.getSources();
    },
    methods: {
        getSources() {
            axios
                .get('http://127.0.0.1:8000/sources')
                .then(response => {this.sources = response.data})
        },
        removeSource(sourceUuid) {
            axios
                .delete('http://127.0.0.1:8000/source/' + sourceUuid)
                .then(response => {console.log(response.data)})
        },
        createSource(sourceText, sourceUrl) {
            axios
                .post('http://127.0.0.1:8000/source/', {url: sourceUrl, text: sourceText})
                .then(response => {console.log(response.data)})
        }
    },
    components: {
        SourcesList,
        SourceAdd
    }    
}
</script>