<template>
    <div id="entire_navbar" style="-webkit-app-region: drag">
        <div class="logo_side">
            <img src="../assets/logo.png" alt="">
            <h1>social<span>Bubble</span></h1>
        </div>
        <div class="search_side">
            <input type="text" placeholder="Search social app">
        </div>
        <div class="exit_side">
            <div class="min">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2">
                    <line id="Line_2" data-name="Line 2" x2="12" transform="translate(0 1)" fill="none" stroke="#fff" stroke-width="2"/>
                </svg>
            </div>
            <div class="exp">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <g id="Rectangle_2" data-name="Rectangle 2" fill="none" stroke="#fff" stroke-width="2">
                        <rect width="10" height="10" stroke="none"/>
                        <rect x="1" y="1" width="8" height="8" fill="none"/>
                    </g>
                </svg>
            </div>
            <div class="ext" @click="closeApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="9.899" height="9.899" viewBox="0 0 9.899 9.899">
                    <line id="Line_2" data-name="Line 2" x2="12" transform="translate(9.192 9.192) rotate(-135)" fill="none" stroke="#fff" stroke-width="2"/>
                    <line id="Line_3" data-name="Line 3" x2="12" transform="translate(9.192 0.707) rotate(135)" fill="none" stroke="#fff" stroke-width="2"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>

import { reactive } from 'vue'

export default {
    name: 'Navbar',

    setup() {
        const state = reactive({

        })

        function closeApp() {
            
        }

        return {
            state,
            closeApp
        }
    }
}
</script>

<style lang="scss" scoped>
    #entire_navbar {
        background-color: $darkMinor;
        height: 2.3em;
        display: flex;
        align-items: center;

        .logo_side {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;

            & img {
                width: 1.3em;
                height: 1.3em;
                margin: 0 0.2em 0 1em;
            }

            & h1 {
                color: $pureWhite;
                font-family: $poppins;
                font-size: 0.9em;
                font-weight: 500;

                span {
                    color: $orange;
                }
            }
        }

        .search_side {
            width: 65%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            & input {
                padding: 0.35em 12em 0.35em 1em;
                border: none;
                border-radius: 0.2em;
                background-color: $searchColor;
                color: $orange;
                font-family: $poppins;
                -webkit-app-region: no-drag;


            }
            & input:focus {
                color: $darkMain;
            }
        }

        .exit_side {
            width: 15%;
            height: 100%;
            display: flex;
            align-items: center;
            // background-color: red;

            .min, .exp, .ext {
                -webkit-app-region: no-drag;
                background: transparent;
                width: 2em;
                height: 2em;
                float: right;
                margin-left: 2%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }

            .min:hover, .exp:hover {
                background-color: $darkMain;
                
            }

            .ext:hover {
                background-color: $redMain;
            }

            .min svg, .exp svg, .ext svg {
                opacity: 60%;
            }

            .min {
                margin-left: 28%;
            }
        }

    }
</style>