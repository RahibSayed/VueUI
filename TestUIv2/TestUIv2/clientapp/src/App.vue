<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/actions">Actions</router-link> |
            <router-link to="/executions">Executions</router-link> |
            <router-link to="/filters">Filters</router-link> |
            <router-link to="/infosets">Infosets</router-link> | 
            <router-link to="/volumes">Volumes</router-link>
        </div>
        <b-container>
            <router-view />
        </b-container>
    </div>
</template>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<script>

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'app'
    }

</script>


