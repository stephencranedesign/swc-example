# What is this

Small repo to share with swc team to try and understand why .swcrc config file isn't being picked up / used by @swc/core transform or webpack swc-loader.

## @swc/core

take a look at transform.mjs file, src/App.tsx, & .swcrc file.
run "npm run transform"
observe that typescript isn't understood.

uncomment jsc.parser in transform.mjs and re-run command.
swc understands typescript.

## @swc/core

take a look at webpack.config.js, src/App.tsx, & .swcrc file.
run "npm run build"
observe that typescript isn't understood.

uncomment swc-loader options in webpack.config.js file and re-run command.
swc understands typescript.
