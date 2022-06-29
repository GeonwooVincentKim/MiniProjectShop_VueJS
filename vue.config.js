// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true
// })

const target = 'http://localhost:3000'

module.exports = {
    devServer: {
        // port: 8080,
        proxy: {
            '^/api': {
                target,
                changeOrigin: true
            },

            '^/upload': {
                target,
                changeOrign: true
            },

            '^/download': {
                target,
                changeOrigin: true
            }
        }
    }
}
