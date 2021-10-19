---
sidebar_position: 3
---

# Translate your site

Let's translate `docs/intro.md` to Vietnamese.

## Configure i18n

Modify `docusaurus.config.js` to add support for the `vi` locale:

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },
};
```

## Translate a doc

Copy the `docs/intro.md` file to the `i18n/vi` folder:

```bash
mkdir -p i18n/vi/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/vi/docusaurus-plugin-content-docs/current/intro.md
```

Translate `i18n/vi/docusaurus-plugin-content-docs/current/intro.md` in Vietnamese.

## Start your localized site

Start your site on the Vietnamese locale:

```bash
npm run start -- --locale vi
```

Your localized site is accessible at `http://localhost:3000/vi/` and the `Getting Started` page is translated.

:::caution

In development, you can only use one locale at a same time.

:::

## Add a Locale Dropdown

To navigate seamlessly across languages, add a locale dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

The locale dropdown now appears in your navbar:

![Locale Dropdown](/img/tutorial/localeDropdown.png)

## Build your localized site

Build your site for a specific locale:

```bash
npm run build -- --locale vi
```

Or build your site to include all the locales at once:

```bash
npm run build
```
