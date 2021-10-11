<template>
    <div class="accordion-item container">
    <h2 class="accordion-header row" v-bind:id="'h' + article.uuid">
        <button v-on:click="listArticle"
              class="accordion-button collapsed col" 
              type="button" 
              data-bs-toggle="collapse" 
              v-bind:data-bs-target="'#b' + article.uuid" 
              aria-expanded="true" 
              v-bind:aria-controls="'b' + article.uuid">
                 {{ article.title}}
        </button>
        <button type="button"
                class="col-lg-1 btn btn-danger" 
                v-on:click="$emit('remove-article', article.uuid)">
            &times;
        </button>
        
    </h2>
    <div v-bind:id="'b' + article.uuid" 
         class="accordion-collapse collapse" 
         v-bind:aria-labelledby="'h' + article.uuid" 
         data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <div v-if="translateWord"
             class="alert alert-success" 
             role="alert">
            {{ translateWord }}
        </div>
        <span v-for="word in localArticleText"
              v-bind:key="word"
              v-bind:word="word"
              v-on:click="getTranslate(word)">
              {{ word + " "}}
        </span>
      </div>
    </div>
  </div>

</template>


<script>
import axios from 'axios'


export default {
    data() {
        return {
            isOpenDetails: false,
            localArticleText: [],
            translateWord: null
        }
    },
    methods: {
        listArticle(){
            if (this.isOpenDetails == false && this.localArticleText.length == 0) {
                this.isOpenDetails = true;
                axios
                    .get('http://127.0.0.1:8000/article/' + this.article.uuid + '/list')
                    .then(response => {this.localArticleText = response.data.text})
            } else {
                this.isOpenDetails = false;
                console.log(this.isOpenDetails);
            }
        },
        getTranslate(word){
            axios
                .get('http://127.0.0.1:8000/article/translate/' + word)
                .then(response => {
                    this.translateWord = response.data;
                })
        }
    },
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    components: {

    }
}
</script>


