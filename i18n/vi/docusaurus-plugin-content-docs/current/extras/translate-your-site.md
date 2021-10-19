---
sidebar_position: 3
---

# Dịch trang web

Hãy dịch từ `docs / intro.md` sang tiếng Việt.

## Định cấu hình i18n

Sửa đổi `docusaurus.config.js` để thêm hỗ trợ cho ngôn ngữ` vi`:

```js title="docusaurus.config.js"
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
  },
};
```

## Dịch tài liệu

Sao chép tệp `docs/intro.md` vào thư mục`i18n/vi`:

```bash
mkdir -p i18n/vi/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/vi/docusaurus-plugin-content-docs/current/intro.md
```

Dịch `i18n/vi/docusaurus-plugin-content-docs/current/intro.md` sang tiếng Việt.

## Bắt đầu trang web được bản địa hóa của bạn

Bắt đầu trang web của bạn trên ngôn ngữ Việt Nam:

```bash
npm run start -- --locale vi
```

Trang web được bản địa hóa của bạn có thể truy cập tại `http://localhost:3000/vi/` và trang `Bắt đầu` đã được dịch.

:::caution
Trong quá trình phát triển, bạn chỉ có thể sử dụng một ngôn ngữ cùng một lúc.
:::

## Thêm trình đơn thả xuống ngôn ngữ

Để điều hướng liền mạch giữa các ngôn ngữ, hãy thêm trình đơn thả xuống ngôn ngữ.

Sửa đổi tệp `docusaurus.config.js`:

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

Trình đơn thả xuống ngôn ngữ hiện xuất hiện trong thanh điều hướng của bạn:

![Locale Dropdown](/img/tutorial/localeDropdown.png)

## Xây dựng trang web được bản địa hóa của bạn

Xây dựng trang web của bạn cho một ngôn ngữ cụ thể:

```bash
npm run build -- --locale vi
```

Hoặc xây dựng trang web của bạn để bao gồm tất cả các ngôn ngữ cùng một lúc:

```bash
npm run build
```
