<template>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <button v-on:click="routeTo('Home')" class="btn">
                        <a class="nav-link active">Home</a>
                    </button>
                </li>
                <li class="nav-item">
                    <button v-on:click="routeTo('Sources')" class="btn">
                        <a class="nav-link active">Sources</a>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="btn" v-on:click="routeTo('Categories')">
                        <a class="nav-link active">Categories</a>
                    </button>
                </li>
                <li class="nav-item">
                    <button class="btn" v-on:click="routeTo('Articles')">
                        <a class="nav-link active">Articles</a>
                    </button>
                </li>
            </ul>
        </div>
    </div>
    </nav>
</template>
<script>
export default {
    methods: {
        routeTo(source) {
            this.$router.push({name: source})
        }
    }
}
</script>
<style scoped>
    .navbar {
        background-color: #EFD09E;
        border-radius: 10px;
    }
</style>