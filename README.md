<h1 align="center">
    <img src="https://img.techpowerup.org/201112/d440mmj72v2vi7ad76ir-2.jpg" alt="vLinkify logo" />
    <br>
    v-linkify
    <br>
</h1>
<p align="center" style="font-size: 1.2em;">
    The source code for <a href="https://www.npmjs.com/package/v-linkify">v-linkify</a> a VueJS <a href="https://vuejs.org/v2/guide/custom-directive.html">Directive</a>.
</p>


> A simple Vue directive to turn URL's and emails into clickable links.
> NO dependencies!

## Installation
```js
npm install v-linkify
```

## Install globally
_main.js_
```js
import Vue from 'vue';
import vLinkify from 'v-linkify';

Vue.use(vLinkify)
```

## Install locally
_component.vue_
```js
import { vLinkify as linkify } from  "v-linkify";

export default {
   directives: {
      linkify
   }
}
```
## Basic Usage
```js
<template>
   <div v-linkify>
      v-linkify https://github.com/maorbarel/v-linkify
      Vue directive to parse links (urls, emails, etc.)
      in text into clickable links
   </div>
</template>
```

## Advanced Usage
```js
<template>
   <div v-linkify="{ className: 'myClassName', target: '_self' }">
      v-linkify https://github.com/maorbarel/v-linkify
      Vue directive to parse links (urls, emails, etc.) 
      in text into clickable links
   </div>
</template>
```

## Options
- `className | String`
- `target | String, _blank By default`
