<template>
    <div id="entire_navbar" style="-webkit-app-region: drag">
        <div class="logo_side" style="-webkit-app-region: no-drag">
            <img src="../assets/logo.png" alt="">
            <h1>social<span>Bubble</span></h1>
        </div>
        <div class="search_side">
            <input type="text" placeholder="Search social app">
        </div>
        <div class="exit_side">
            <div class="min" @click="minimizeApp" style="-webkit-app-region: no-drag">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2">
                    <line id="Line_2" data-name="Line 2" x2="12" transform="translate(0 1)" fill="none" stroke="#fff" stroke-width="2"/>
                </svg>
            </div>
            <div class="exp" @click="fullWindow" style="-webkit-app-region: no-drag">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <g id="Rectangle_2" data-name="Rectangle 2" fill="none" stroke="#fff" stroke-width="2">
                        <rect width="10" height="10" stroke="none"/>
                        <rect x="1" y="1" width="8" height="8" fill="none"/>
                    </g>
                </svg>
            </div>
            <div class="ext" @click="closeApp" style="-webkit-app-region: no-drag">
                <svg xmlns="http://www.w3.org/2000/svg" width="9.899" height="9.899" viewBox="0 0 9.899 9.899">
                    <line id="Line_2" data-name="Line 2" x2="12" transform="translate(9.192 9.192) rotate(-135)" fill="none" stroke="#fff" stroke-width="2"/>
                    <line id="Line_3" data-name="Line 3" x2="12" transform="translate(9.192 0.707) rotate(135)" fill="none" stroke="#fff" stroke-width="2"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import { exit, min, fit, float } from '../renderer.js'

export default {
    name: 'Navbar',
    data() {
        return {
            min: true,
            max: false,
        }
    },
    methods: {
        closeApp() {
            exit()
        },
        minimizeApp() {
            min()
        },
        fullWindow() {
            if (this.min == true) {
                this.min == !this.min
                this.max == !this.max
                fit()
            } else {
                this.min == !this.min
                this.max == !this.max
                float()
            }
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
        position: relative;

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
                user-select: none;

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
                background-color: rgba(255, 253, 253, 0.082);
                color: $pureWhite;
                font-family: $poppins;
                -webkit-app-region: no-drag;


            }
            & input:focus {
                color: $pureWhite;
            }
        }

        .exit_side {
            width: 8em;
            height: 100%;
            display: flex;
            align-items: center;
            position: absolute;
            right: 0.5em;

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