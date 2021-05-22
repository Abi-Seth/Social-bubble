<template>
    <div id="app">
        <navbar/>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
    name: 'App',
    components: { Navbar },
    
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
</style>
