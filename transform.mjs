import {transform} from '@swc/core';
import {readFile, writeFile} from 'fs/promises';

/*
   run "npm run transform",
    why doesn't @swc/core.transform use .swcrc config file? i need to uncomment the jsc.parser in this file's transform in order for swc to understand typescript.
*/

const filename = `${process.cwd()}/src/App.tsx`;

const AppFile = await readFile(filename);
const transformedCode = await transform(AppFile.toString(), {
    filename,
    env: {
        targets: "defaults"
    },
    // jsc: {
    //     parser: {
    //         syntax: 'typescript',
    //         tsx: true
    //     }
    // }
});

await writeFile(`${process.cwd()}/App-transform.js`, transformedCode.code);