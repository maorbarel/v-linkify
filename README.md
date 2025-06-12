<h1 align="center">
    <img src="https://img.techpowerup.org/201112/d440mmj72v2vi7ad76ir-2.jpg" alt="vLinkify logo" />
    <br>
    v-linkify
    <br>
</h1>
<p align="center" style="font-size: 1.2em;">
    The source code for <a href="https://www.npmjs.com/package/v-linkify">v-linkify</a> a VueJS <a href="https://vuejs.org/v2/guide/custom-directive.html">Directive</a>.
</p>


![NPM Version](https://img.shields.io/npm/v/v-linkify?style=flat-square)
![NPM Dependencies](https://img.shields.io/david/maorbarel/v-linkify?style=flat-square)
![NPM Downloads](https://img.shields.io/npm/dt/v-linkify?style=flat-square)
![MIT License](https://img.shields.io/github/license/maorbarel/v-linkify?style=flat-square?style=flat-square)
<br>

![Git Stars](https://img.shields.io/github/stars/maorbarel?style=social)
![Git fork](https://img.shields.io/github/forks/maorbarel/v-linkify?style=social)


> A simple Vue directive to turn URL's, emails and phone numbers into clickable links.
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
      Vue directive to parse links (urls, emails, phones, etc.)
      in text into clickable links
   </div>
</template>
```

## Advanced Usage
```js
<template>
   <div v-linkify="{ className: 'myClassName', target: '_self', rel: 'nofollow' }">
      v-linkify https://github.com/maorbarel/v-linkify
      Vue directive to parse links (urls, emails, phones, etc.)
      in text into clickable links
   </div>
</template>
```

## Options
- `className | String`
- `target | String, _blank By default`
- `rel | String, noopener noreferrer By default`

## Authors
[Maor Barel](https://www.linkedin.com/in/maorbarel "Personal website")

## License
---
MIT © [Maor Barel](https://www.linkedin.com/in/maorbarel "Personal website")
