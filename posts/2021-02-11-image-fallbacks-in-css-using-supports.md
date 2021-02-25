---
title: Image Fallbacks in CSS Using @supports
description: Serve next-gen image formats with traditional fallbacks using the HTML picture element and the CSS @supports at-rule.
date: 2021-02-11
image: supports.png
category: Development
---

When it comes to improving the quality of your web pages, no automated tool is more useful than Google’s [Lighthouse](https://developers.google.com/web/tools/lighthouse). Lighthouse is an open-source tool that audits performance, accessibility, progressive web apps (PWAs), search engine optimization (SEO), and more.

One of the most common recommendations Lighthouse can give is to “Serve images in next-gen formats.” The [official recommendation](https://web.dev/uses-webp-images) suggests using WebP versions of your images, however there are several newer formats still emerging. Regardless of which next-gen format you choose to use, implementing next-gen image formats can potentially cause issues for your visitors using older browser technology.

## Using the `<picture>` element

The HTML standard defines the **`<picture>` element**. Using the `<picture>` element, you can define multiple `<source>` elements to offer alternative versions of an image.

```html
<picture>
  <source srcset='https://www.example.net/sunset.webp' type='image/webp' />
  <img src='https://www.example.net/sunset.jpg' alt='A beautiful sunset' />
</picture>
```

In the above example, the browser will first try to render `sunset.webp`. If the browser doesn't support the WebP format, it will instead render the `sunset.jpg`. The `<img>` element serves two purposes in this case:

1. It provides the fallback if none of the available `<source>` elements are able to produce a usable image.
2. It defines the image size and other presentation attributes of the rendered image.

The `<picture>` element is [supported in all modern browsers](https://caniuse.com/picture).

## What about `background-image`s?

When it comes to providing image fallbacks in your Cascading Stylesheets (CSS), there has been several methods floating around the internet on how to achieve this. Some methods would make use of JavaScript to detect if the browser supports WebP, and then append a class an overriding class. Other methods would do some interesting hacks utilizing SVG images.

However, one often overlooked CSS at-rule is **`@supports`**. With `@supports`, you can test whether or not a browser supports the CSS declaration before using it. With it, we can do in CSS what we can do in HTML with the `<picture>` element.

```css
.my-class {
  background-image: url('https://www.example.net/chicago.jpg');

  @supports (background-image: url('https://www.example.net/chicago.webp')) {
    background-image: url('https://www.example.net/chicago.webp');
  }
}
```

In this class declaration, we set our default `background-image` like normal. Then, using `@supports` we test if the browser can set a `background-image` of our WebP version of the image. If so, we overwrite the original `background-image` declaration with our new one, using our more efficient WebP version of the image.

The `@supports` at-rule is also [supported in all modern browsers](https://caniuse.com/css-featurequeries).

## Conclusion

Utilizing the `<picture>` element and the `@supports` at-rule, you can provide next-gen image formats to your web visitors without degrading the experience for those on older browsers. If you have failed the "Serve images in next-gen formats" audit in Lighthouse before, your path forward should be as easy as converting your images to WebP and utilizing the two methods outlined in this article.
