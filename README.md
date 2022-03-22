# Nuxt Custom-Elements Example

This is an example project for using [Nuxt Custom-Elements](https://github.com/GrabarzUndPartner/nuxt-custom-elements) with [Nuxt.js](https://nuxtjs.org) and plugins ([VueI18n](https://kazupon.github.io/vue-i18n/), [Vuetify](https://vuetifyjs.com/), ...). 

For more information, see the [Usage section](https://nuxt-custom-elements.grabarzundpartner.dev/usage/) in the documentation.


- [👁 &nbsp;&nbsp;**Preview**](https://grabarzundpartner.github.io/nuxt-custom-elements-example/)
- [📖 &nbsp;&nbsp;**Documentation**](http://nuxt-custom-elements.grabarzundpartner.dev/)

## Usage

Install project.
```bash
$ npm install
```

Each example can be started in `dev`, `server` and  `ssr`.  
For this the path to the example must be given as argument (e.g. `npm run dev -- examples/default`). 

The path specification must be specified in `dev`, `build`, `generate` and `start`.

**Available examples:**

| Path                    |                                                                                                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `examples/default`      | [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/examples/default)                                                |
| `examples/tailwind-css` | [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/examples/tailwind-css)                                           |
| `examples/vue-i18n`     | [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/examples/vue-i18n)                                               |
| `examples/vue-router`   | [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/examples/vue-router)                                             |
| `examples/vuetify`      | [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/examples#:~:text=last%20month-,vuetify,-fix(update)%3A%20update) |
| `examples/vuex`         | [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/examples/vuex)                                                   |
| `examples/external`     | [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/examples/external)                                               |



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
