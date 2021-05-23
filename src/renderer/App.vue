<template>
    <div id="app">
        <navbar/>
        <div class="entire_app__body_container">
            <dashboard/>
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Dashboard from './views/dashboard.vue'

export default {
    name: 'App',
    components: { Navbar, Dashboard },
    
}
</script>

<style lang="scss"> 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: $darkMain;
    }

    #app {

        .entire_app__body_container {
            height: 93vh;
            width: 100%;
            background-color: red;
        }
    }
</style>
