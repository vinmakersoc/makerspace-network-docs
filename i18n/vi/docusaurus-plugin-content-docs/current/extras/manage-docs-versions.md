---
sidebar_position: 2
---

# Quản lý các phiên bản Tài liệu

Docusaurus có thể quản lý nhiều phiên bản tài liệu của bạn.

## Tạo phiên bản tài liệu

Phát hành phiên bản 1.0 cho dự án của bạn:

```bash
npm run docusaurus docs:version 1.0
```

Thư mục `docs` được sao chép vào `versioned_docs/version-1.0` và `versions.json` được tạo.

Tài liệu của bạn hiện có 2 phiên bản:

- `1.0` tại `http://localhost:3000/docs/` cho tài liệu phiên bản 1.0
- `current` tại `http://localhost:3000/docs/next/` cho **tài liệu sắp ra mắt, chưa phát hành**

## Thêm phiên bản thả xuống

Để điều hướng liền mạch giữa các phiên bản, hãy thêm trình đơn phiên bản thả xuống.

Sửa đổi tệp `docusaurus.config.js`:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

Trình đơn thả xuống phiên bản tài liệu xuất hiện trong thanh điều hướng của bạn:

![Docs Version Dropdown](/img/tutorial/docsVersionDropdown.png)

## Cập nhật phiên bản hiện có

Có thể chỉnh sửa các tài liệu đã được tạo phiên bản trong thư mục tương ứng của chúng:

- `versioned_docs/version-1.0/hello.md` cập nhật `http://localhost:3000/docs/hello`
- `docs/hello.md` cập nhật `http://localhost:3000/docs/next/hello`
