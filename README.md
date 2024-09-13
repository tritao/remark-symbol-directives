# remark symbol directives 

Add symbol icons with remark directives
[npm package](https://www.npmjs.com/package/astro-starlight-remark-asides)

* `:api[array]`
* `:api[boolean]`
* `:api[method]`
* `:api[function]`
* `:api[constructor]`
* `:api[field]`
* `:api[variable]`
* `:api[class]`
* `:api[struct]`
* `:api[interface]`
* `:api[module]`
* `:api[property]`
* `:api[event]`
* `:api[operator]`
* `:api[unit]`
* `:api[value]`
* `:api[constant]`
* `:api[enum]`
* `:api[enummember]`
* `:api[keyword]`
* `:api[text]`
* `:api[color]`
* `:api[file]`

## Dark and light theme

uses `:root[data-theme="dark"]` by default.

![light theme example](./imgs/light.png)
![dark theme example](./imgs/dark.png)

## Requirements

Must add [remark-directive](https://github.com/remarkjs/remark-directive) plugin to your remark plugins before `remark-symbol-directives`.

## Copy files and use

1. the `.js` file here is a remark plugin, import it and add it to your remark plugins

```ts
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import remarkSymbolDirectives from "./src/path/to/index.js";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkDirective, remarkSymbolDirectives],
  },
});
```

2. Import the .css file into whatever path is rendering the md/mdx

```ts
// src/[slug].astro
---
import "src/path/to/styles.css";
---
<!--  -->
```

## Use as npm package

1. import the remark plugin and add to remark plugins

```ts
import { defineConfig } from "astro/config";
import remarkDirective from "remark-directive";
import remarkSymbolDirectives from remark-symbol-directives";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkDirective, remarkSymbolDirectives],
  },
});
```

2. Import the .css file into whatever path is rendering the md/mdx

```ts
// src/[slug].astro
---
import "remark-symbol-directives/styles.css";
---
<!--  -->
```
