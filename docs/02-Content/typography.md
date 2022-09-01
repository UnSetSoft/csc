---
title: Typography
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@kagarisoft/csc/dist/css/common.min.css"/>

## Fonts
Currently, only 1 typeface is used for the Japanese language and 2 for the global language.

### Global fonts

* Maven Pro
* Baloo

### Japanese fonts

* Kosugi Maru

:::info
To see the list of labels compatible with the source in Japanese check [this list](language#tags-compatible-with-the-japanese-text-fonts-of-this-framework).
:::

### Baloo font

<div class="example dark__bg">
    <p class="kg__text kg-Baloo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
</div>

    
```html
<p class="kg__text kg-Baloo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
```

## Styles
:::info
To see the list of labels compatible with the Style check [this list](language#tags-compatible-with-the-japanese-text-fonts-of-this-framework).
:::
### Underline
<div class="example dark__bg">
    <p><span class="kg__text kg-underline">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
</div>

```html
<p><span class="kg__text kg-underline">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
```

### Bold

<div class="example dark__bg">
    <p><span class="kg__text kg-bold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
</div>

```html
<p><span class="kg__text kg-bold">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
```

### Vertical text

<div class="example dark__bg">
    <p class="kg__text kg-vertical" lang="ja">遠い遠い昔、中近東の遠い村のこと。</p>
    <p class="kg__text kg-vertical" lang="ja">戦士は立ち上がり、自分の名誉と家族のために戦った。</p>
    <p class="kg__text kg-vertical" lang="ja">伝説とされる英雄であり、偉大な戦士である。</p>
</div>

```html
<p class="kg__text kg-vertical" lang="ja">遠い遠い昔、中近東の遠い村のこと。</p>
<p class="kg__text kg-vertical" lang="ja">戦士は立ち上がり、自分の名誉と家族のために戦った。</p>
<p class="kg__text kg-vertical" lang="ja">伝説とされる英雄であり、偉大な戦士である。</p>
```
:::info
Vertical text can also be used with the global font.
:::
### Remove marging and padding 

<div class="example dark__bg">
    <p class="kg__text kg-p__0 kg-m__0">HELLO WORLD</p>
</div>

```html
<p class="kg__text kg-p__0 kg-m__0">HELLO WORLD</p>
```

### Ampersand modification list

* `kg-underline`: set the text to underline
* `kg-bold`: set the text to bold
* `kg-vertical`: set the text to vertical
* `kg-p__0`: remove the padding
* `kg-m__0`: remove the margin

#### Suported tags

* `p`
* `span`
* `a`
* `h1`
* `h2`
* `h3`
* `h4`
* `h5`
* `h6`
