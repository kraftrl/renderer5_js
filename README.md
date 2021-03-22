# renderer5_js

The JavaScript code in this folder is a translation of most of the Java code for renderer_5.
http://cs.pnw.edu/~rlkraft/cs45500/renderer_5.zip

If you double click on the main.html file, the renderer will run in a browser window. The renderer uses keyboard commands, just like the Java version. The console output appears in the browser's DevTools console window. Use Control+Shift+J to open the browser's console.
   https://developers.google.com/web/tools/chrome-devtools


What's missing from the JavaScript code are all the Javadoc (or JSDoc or TSDoc) comments, the debugging output, the clipping and rasterization algorithms, the framebuffer, and most of the models. This JavaScript code uses the browser's canvas tag as a replacement for clipping, rasterization, and a framebuffer. Since there is no framebuffer data structure, this renderer cannot be used "offline" to produce ppm files and movies.


Here is what needs to be done, in decreasing order of importance.
1. Translate to TypeScript.
2. Add the TypeScrip code for renderers 6 and 7.
3. Add the TypeScript code for clipping, rasterization, and the framebuffer.
4. Add the debugging output code.
5. Convert Javadoc comments to TSDoc comments.
6. Use Node.js to save ppm files (and create offline movies).
7. Add more models (in particular, obj models).


The TypeScript compiler will let you mix JavaScript code with TypeScript code. This is supposed to be used when converting a JavaScript project to TypeScript so you can do the translation incrementally. The relevant compiler option is "allowJS" and you put that in the tsconfig.json file.
    {
       "compilerOptions": {
          "allowJS" : true,
          "target": "es2020",
          "strict": true,
          "sourceMap": true,
          "noImplictAny" : true
       }
    }
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
https://www.typescriptlang.org/tsconfig
https://www.typescriptlang.org/docs/handbook/compiler-options.html
https://basarat.gitbook.io/typescript/project/compilation-context/tsconfig
