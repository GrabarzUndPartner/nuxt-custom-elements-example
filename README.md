# Nuxt Custom-Elements Example

This is an example project for using [Nuxt Custom-Elements](https://github.com/GrabarzUndPartner/nuxt-custom-elements) with [Nuxt.js](https://nuxtjs.org) and plugins ([VueI18n](https://kazupon.github.io/vue-i18n/), [Vuetify](https://vuetifyjs.com/), ...). 

For more information, see the [Usage section](https://nuxt-custom-elements.grabarzundpartner.dev/usage/) in the documentation.


- [👁 &nbsp;&nbsp;**Preview**](https://grabarzundpartner.github.io/nuxt-custom-elements-example/)
- [📖 &nbsp;&nbsp;**Documentation**](http://nuxt-custom-elements.grabarzundpartner.dev/)

## Usage

The very first thing to do is to install.
```bash
$ npm install
```

Each example can be started both in `dev`, `server` and  `ssr`.  
For this the path to the example must be given as argument (e.g. `npm run dev -- examples/default`). 

The path specification must be specified in `dev`, `build`, `generate` and `start`.

**Available example paths:**
- `examples/default` 
- `examples/tailwind-css`
- `examples/vue-i18n`
- `examples/vue-router`
- `examples/vuetify`
- `examples/vuex`
- `examples/external`


### Development

```
$ npm run dev -- examples/default
```

### Server
```
$ npm run build -- examples/default && npm run start -- examples/default
```
### Static
```
$ npm run generate -- examples/default --target static && npm run start -- examples/default --target static
```

Finally, the example can be opened in the browser via [http://localhost:3000/]( http://localhost:3000/).

---

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org) and [Nuxt Custom-Elements docs](https://github.com/GrabarzUndPartner/nuxt-custom-elements).
