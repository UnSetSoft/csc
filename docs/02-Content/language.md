---
title: Language
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@kagarisoft/csc/dist/css/common.min.css"/>


One of the most important options of this framework is the possibility of using the `lang` attribute, this attribute allows changing the style of the text depending on the language.

In this case, two languages are used by default, the global and the Japanese language, to activate the Japanese typography just include the attribute inside a tag and the style will be in charge of including the corresponding font.

## Lang attribute

<div class="example dark__bg">
    <p lang="ja">プライマリ</p>
</div>

    
```html
<p lang="ja">プライマリ</p>
```


:::tip

Also, if the site is intended to be entirely in Japanese, the `lang` attribute located in the html tag can be used.

:::

## Tags compatible with the Japanese text fonts of this framework.

* `p`
* `h1`
* `h2`
* `h3`
* `h4`
* `h5`
* `h6`
* `a`
* `span`
* `textarea`
* `button`
