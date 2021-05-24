<template>
    <div id="entire_dashboard">
        <div :class="{'showPage': clickedSomePage}" class="display_page_url">
            <webview id="webview" src="https://discord.com"  autosize="on" minwidth="800px" minheight="1200px" nodeintegration='true'></webview>
        </div>
        <div :class="{'hideapps': !clickedSomePage}" class="app_container">
            <div @click="github" class="app">
                facebook 
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',

    data() {
        return {
            linktodisplay: "",
            clickedSomePage: true
        }
    },

    methods: {
        github() {
            this.clickedSomePage = !this.clickedSomePage
            getSite()
        }
    }
}
</script>

<style lang="scss" scoped>
    #entire_dashboard {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        
        .display_page_url {
            // background-color: yellow;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;

            #webview {
                height: 98%;
                width: 100%;
            }
        }

        .showPage {
            display: none;
        }

        .hideapps {
            display: none !important;
        }

        & .app_container {
            // background-color: green;
            height: 91%;
            width: 95%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            overflow-y: scroll;

            .app {
                width: 8em;
                height: 8em;
                margin: 0.5em;
                border-radius: 0.3em;
                transition: all .5s ease;
                cursor: pointer;
            }

            .app:hover {
                background-color: $darkMinor;
            }

            
        }

        & .app_container::-webkit-scrollbar {
            background-color: $darkMain;
        }
        
        & .app_container::-webkit-scrollbar-thumb {
            background-color: $darkMinor;
            border-radius: 0.5em;
            border: 0.25em solid $darkMain;
        }

    }
</style>