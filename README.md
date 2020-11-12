# v-linkify
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
import {vLinkify} from "v-linkify";

const component = {
   directives: {
      vLinkify
   }
}
```
## Basic Usage
_component.vue_
```js
<template>
   <div v-linkify>
      v-linkify https://github.com/maorbarel/v-linkify
      Vue directive to parse links (urls, emails, etc.) in text into clickable links
   </div>
</template>
```

## Advanced Usage
_component.vue_
```js
<template>
   <div v-linkify="{ className: 'myClassName', target: '_self' }">
      v-linkify https://github.com/maorbarel/v-linkify
      Vue directive to parse links (urls, emails, etc.) in text into clickable links
   </div>
</template>
```

## Options
- `className | String`
- `target | String, _blank By default`