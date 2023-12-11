/*
    run "npm run build",
    why doesn't swc-loader use .swcrc config file? i need to uncomment the options.jsc.parser in this files webpack config in order for swc to understand typescript.
*/

module.exports = {
    entry: './src/App.tsx',
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: {
                    loader: 'swc-loader',
                    // options: {
                    //     jsc: {
                    //         parser: {
                    //             "syntax": "typescript",
                    //             "tsx": true
                    //         }
                    //     }
                    // }
                }
            },
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'swc-loader'
                }
            }
        ]
    }
};