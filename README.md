# Nuxt Custom-Elements Example

This is an example project for using [Nuxt Custom-Elements](https://github.com/GrabarzUndPartner/nuxt-custom-elements) with [Nuxt.js](https://nuxtjs.org) and plugins ([VueI18n](https://kazupon.github.io/vue-i18n/), [Vuetify](https://vuetifyjs.com/), ...).

For more information, see the [Usage section](https://nuxt-custom-elements.grabarzundpartner.dev/usage/) in the documentation.

- [👁 &nbsp;&nbsp;**Preview**](https://grabarzundpartner.github.io/nuxt-custom-elements-example/)
- [📖 &nbsp;&nbsp;**Documentation**](http://nuxt-custom-elements.grabarzundpartner.dev/)

## Usage

First of all, the repository must be cloned and install dependencies with

```bash
npm install
```

Each example can be started in `dev`, `server` and  `ssr`.  
For this the path to the example must be given as workspace (e.g. `npm run dev --workspace=@nuxt-custom-elements-example/default`).

The path specification must be specified in `dev`, `build`, `generate` and `start`.

**Available examples:**

| Path          |                                                                                                                                                                                                       |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pinia`       | [Preview](https://grabarzundpartner.github.io/nuxt-custom-elements-example/pinia/) - [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/packages/pinia)             |
| `tailwindcss` | [Preview](https://grabarzundpartner.github.io/nuxt-custom-elements-example/tailwindcss/) - [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/packages/tailwindcss) |
| `vuetify`     | [Preview](https://grabarzundpartner.github.io/nuxt-custom-elements-example/vuetify/) - [Source](https://github.com/GrabarzUndPartner/nuxt-custom-elements-example/tree/main/packages/vuetify)         |

### Development

```
npm run dev --workspace=@nuxt-custom-elements-example/default
```

### Server

```
npm run build --workspace=@nuxt-custom-elements-example/default && npm run start --workspace=@nuxt-custom-elements-example/default
```

### Static

```
npm run generate --workspace=@nuxt-custom-elements-example/default --target static && npm run start --workspace=@nuxt-custom-elements-example/default --target static
```

Finally, the example can be opened in the browser via [http://localhost:3000/]( http://localhost:3000/).

---

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org) and [Nuxt Custom-Elements docs](https://github.com/GrabarzUndPartner/nuxt-custom-elements).
