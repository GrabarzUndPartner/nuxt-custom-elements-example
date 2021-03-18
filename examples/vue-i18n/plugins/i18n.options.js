export default {
  locales: [
    {
      code: 'en',
      name: 'English'
    },
    {
      code: 'de',
      name: 'Deutsch'
    },
    {
      code: 'ja',
      name: '日本語'
    }
  ],
  defaultLocale: 'en',
  vueI18n: {
    messages: {
      de: {
        message: {
          hello: 'hallo welt'
        }
      },
      en: {
        message: {
          hello: 'hello world'
        }
      },
      ja: {
        message: {
          hello: 'こんにちは、世界'
        }
      }
    }
  }
};
