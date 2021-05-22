module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/src/renderer/styles/base.scss";`
            },
        }
    }
}