<template>
    <div id="app">
        <navbar/>
        <div class="entire_app__body_container">
            <div class="sidebar_container">
                <div class="open_apps">

                </div>
            </div>
            <div class="body_container">
                <router-view/>
            </div>
        </div>
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
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #app {
        overflow: hidden;

        .entire_app__body_container {
            height: 93vh;
            width: 100%;
            display: flex;
            flex-wrap: nowrap;

            & .sidebar_container {
                width: 8%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                .open_apps {
                    background-color: $darkMinor;
                    width: 3.6em;
                    height: 90%;
                    border-radius: 0.5em;
                    position: fixed;
                }
            }

            & .body_container {
                width: 92%;
                height: 100%;
            } 

        }
    }
</style>
