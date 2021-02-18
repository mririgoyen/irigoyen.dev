---
title: Stop Using Icon Fonts
description: Icon fonts became popular over a decade ago. But their convenience comes at a high cost to your visitors.
date: 2021-02-17
image: stop-icon-fonts.png
category: Development
---

Just one year before the first web page went live in 1991, Microsoft began shipping perhaps the most well-known icon font, _Wingdings_. However, it would be nearly 22 years later before icon fonts would become a design trend on the internet.

The introduction of the `@font-face` CSS at-rule allowed web designers to specify custom fonts with which to display text. By 2011, all major browsers supported it. This gave birth to the idea that fonts composed of pictograms, like _Wingdings_, could be used in place of raster images on the web. Considering that real SVG support across all major browsers didn't become stable until early 2020, icon fonts were the defacto way to add vector-based icons on your web site.

But icon fonts on the web were fundamentally flawed from the beginning. And now, with full SVG support at our disposal, it's time to put a stop to their use, once and for all.

## Flawed Icon Fonts

### Flash of Unstyled Content (FOUC)

When utilizing `@font-face`, you are instructing the browser to make an HTTP request for the required font file. This request isn't immediately dispatched either. When the browser begins parsing the HTML and all linked files referenced in the markup, it is building the Document Object Model (DOM) in realtime. When a linked font is found, the request is fired. How long it takes to retrieve the font can depend on the size of the font asset, network conditions, and user hardware.

While waiting for the font asset, the browser will choose to display the textual content of the HTML before actually receiving it. This results in a flash of unstyled content (FOUC). These flashes can be very jarring to your visitors. Icon fonts typically assign their glyphs to codepoints outside of the normal range that most normal fonts operate in. However, if they do not, it is possible that random characters or glyphs will appear in place of your icons before the font is fully loaded.

> **Note**: It is possible to use newer directives, such as `preload`, on font resources to avoid FOUC. However, this does not solve all the other issues defined in this article and is not recommended.

### Accessibility

Icon fonts are notoriously bad for accessibility and can lead to some frustrating experiences for those who rely on assistive technologies.

1. **Treated like text** — The browser treats fonts like text because that is what fonts are supposed to be. Screen readers have become increasingly smarter over the years, but they still have a hard time discerning what is legible text and what is a pictogram. Most screen readers will read aloud text inserted via CSS, so when they come across your icons they may say "unpronounceable," or they may be skipped entirely.

2. **Stylesheet overrides** — Those with [visual impairments](https://www.cdc.gov/visionhealth/basics/ced/fastfacts.htm) often use custom stylesheets to override default styles of the websites they visit to make them easier to use. This might include changing color schemes, increasing font size or weight, or even changing the font face completely. If your site relies on icons in a non-contextual way, someone using an assistive font (e.g. [OpenDyslexic](https://opendyslexic.org/)) will cause your icons to be replaced and disappear completely, potentially leaving your web site unusable.

3. **Cannot provide metadata** — The process of implementing an icon font on the web requires the use of the `::before` or `::after` pseudo-elements. Semantically, the `::before` and `::after` pseudo-elements are meant to add cosmetic content to an existing element. For icon fonts, this makes sense as long as the icon is being used contextually with another element. However, there are many times in which an icon is used as the primary focus. For example, an "x" for "close" or a house for returning "home". By themselves, these icons don't provide any semantical information about their contents; You cannot label them or describe them directly.

### Size and Maintainability

Icon fonts are not cheap assets. Every time a visitor downloads your icon font, they are downloading every icon you intend to use anywhere on your site, regardless if they see them all or not. That fact alone makes icon fonts difficult, and rather annoying, to maintain. If your icon font contains 200 icons and you use 10 of the, you are forcing your visitors to download 190 icons that they'll never see. This will degrade your visitor's experience by increasing load times and extending FOUC.

Maintaining an icon font means adding and removing icons as necessary to keep the size of the font, and subsequent stylesheets, to a minimal. This also means that every time you update your font, you need to invalidate your visitor's cache of the assets and force them to re-download them.

### Degraded Visual Quality

All modern browsers and operating system employ anti-aliasing on text to some degree. Textual anti-aliasing is agnostic about whether or not your font is made up of letters and numbers or pictograms. This has the potential for negative side-effects in terms of visual quality, especially if you stack glyphs to make multicolor icons. Your icons may look blurry or misaligned.

### Difficult to Style/Position

As if I haven't said it enough, icon fonts are fonts first and icons second. This mean that your icons follow text-based CSS rules, such as `font-size`, `letter-spacing`, `line-height`, etc. This can make positioning icons more difficult and less consistent. Additionally, icon font glyphs are monochromatic, meaning any stylistic changes you make affect the entire glyph.

![SVG Logo](/assets/blog/svg-logo.png)

## SVG's to the Rescue!

With the release of Chromium-powered version Microsoft's Edge browser in early 2020, Scalable Vector Graphics (SVG) became fully supported across all major browsers. Even before that, SVGs have been supported in all browsers since 2012, [albeit with some caveats in Internet Explorer and pre-Chromium Edge](https://caniuse.com/svg). And guess what? SVGs are _awesome_ for web icons!

### Icons Just Work

SVG image data is stored directly in your HTML document. As soon as the browser processes it, it renders it. You don't have to wait for other HTTP requests to complete as you would with an icon font.

### Better Accessibility

SVGs have built-in accessibility features that give them the edge over using icon fonts.

- They are semantically image elements.
- Providing metadata is super easy. Simply provide a [`<title>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title) or [`<desc>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc) element in your SVG container. Screen readers will pick these values up and read something of use to your visitor. And because SVGs are just elements in your HTML, you can use [ARIA attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), such as `aria-labelledby` with ease.

### Easier to Maintain

Compared one-to-one, a collection of 100 SVGs versus a WOFF2 of 100 icon glyphs will be larger. However, the benefits of SVGs easily outweigh an icon font implementation. With SVGs, you will only be including the icons that are required for that individual page, directly in your code. You do not need to maintain a font and its supporting CSS files outside of your site.

> **Note:** If you're creating a Single Page Application (SPA), be sure to look into proper [code-splitting](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting) techniques to keep your bundle sizes down.

### Sharp-Dressed Images

SVGs are straight up vector images. Anti-aliasing methods employed by your browser or operating system have no effect and your icons will be noticeably sharper.

### Full CSS Control

With SVGs, you have access to all the same CSS controls as with a font and more! You can directly target specific parts of a multi-part icon and apply different style to each. You may also use SVG-specific CSS controls, like the [`stroke`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke) property.

Additionally, SVGs are simply the size they are. They are not affected by text-based CSS rules.

### Other Considerations

To fully support the use of SVGs on your site, make sure you're following other common best practices:

- **Optimize your SVGs** — [Run your SVG images through an optimizer](https://jakearchibald.github.io/svgomg/) to get the size down. (Most, if not all, icon libraries that offer SVG packages do this by default.)
- **Enable GZIP** — Configure your server to send all assets with GZIP. This will include SVG data in your HTML and/or JS files.
- **Cache effectively** — Set appropriate caching headers so your visitors only download things as they change. Since your SVGs will be part of your HTML and/or JS files, you'll only want your visitors to download them again if they change.

## Get Started with SVG Icons

Most major icon libraries offer SVG packages of the library. Two popular icon libraries, [Material Design Icons](https://www.npmjs.com/package/@mdi/svg) and [Font Awesome](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core), both have packages you can install via `npm`.

If you're using a framework, many of the major icon libraries also have released packages for the more popular ones so that you can get going fairly quickly. For example, if you're using [React](https://reactjs.org/), both Material Design Icons and Font Awesome have easy solutions:

- **Material Design Icons** - [@mdi/react](https://www.npmjs.com/package/@mdi/react) & [@mdi/js](https://www.npmjs.com/package/@mdi/js)

  ```jsx
  import Icon from '@mdi/react';
  import { mdiCoffee } from '@mdi/js';

  const element = <Icon path={mdiCoffee} size={1} />;
  ```

- **Font Awesome** - [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome)

  ```jsx
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCoffee } from '@fortawesome/free-solid-svg-icons';

  const element = <FontAwesomeIcon icon={faCoffee} />;
  ```

> **Note:** Both of these solutions only bundle the icons you use because of [tree-shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking).

## Conclusion

Continued use of icon fonts is a detriment to your visitors and a time-sink for you. By replacing your existing icon font implementation with SVG icons, you're helping people utilizing assistive technologies, improving the quality, clarity, and reliability of your icons, and reducing your time to maintain legacy assets. And if you just stumbled across this article while trying to determine if you should use an icon font or not, I hope that the answer is now an obvious one.
