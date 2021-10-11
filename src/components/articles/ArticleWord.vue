<template>
    <span 
            v-bind:title="translateWord"
            v-on:click="getTranslate(word)"
    >
        {{word + " "}}
    </span>
</template>

<script>
import axios from 'axios'

export default {
    props: ['word'],
    data() {
        return {
            translateWord: ''
        }
    },
    methods: {
        getTranslate(word){
            axios
                .get('http://127.0.0.1:8000/article/translate/' + word)
                .then(response => {
                    this.translateWord = response.data;
                })
        }
    }
}
</script>
