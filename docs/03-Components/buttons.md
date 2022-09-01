---
title: Buttons
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@kagarisoft/csc/dist/css/common.min.css"/>


<div class="example">
    <button class="kg__button">Default</button>
    <button class="kg__button kg-primary">Primary</button>
    <button class="kg__button kg-success">Success</button>
    <button class="kg__button kg-warning">Warning</button>
    <button class="kg__button kg-danger">Danger</button>
</div>

```html
<button class="kg__button">Default</button>
<button class="kg__button kg-primary">Primary</button>
<button class="kg__button kg-success">Success</button>
<button class="kg__button kg-warning">Warning</button>
<button class="kg__button kg-danger">Danger</button>
```

## Link buttons

```html
<a class="kg__button kg-no__decoration" href="#">Link Button</a>
```

## Disabled state

<div class="example">
    <button class="kg__button" disabled>Default</button>
    <button class="kg__button kg-primary" disabled>Primary</button>
</div>

```html
<button class="kg__button" disabled>Default</button>
<button class="kg__button kg-primary" disabled>Primary</button>
```

## Size state

This adjusts the width in percentages of the button

<div class="example">
    <button class="kg__button">Default</button>
    <button class="kg__button kg-primary kg-20">Primary</button>
    <button class="kg__button kg-success kg-30">Success</button>
    <button class="kg__button kg-warning kg-50">Warning</button>
    <button class="kg__button kg-danger kg-100">Danger</button>
</div>

```html
<button class="kg__button">Default</button>
<button class="kg__button kg-primary kg-20">Primary</button>
<button class="kg__button kg-success kg-30">Success</button>
<button class="kg__button kg-warning kg-50">Warning</button>
<button class="kg__button kg-danger kg-100">Danger</button>
```

### Ampersand modification list

* `kg-block`: Sets the button to `block`
* `kg-primary`: Sets the button to `primary`
* `kg-success`: Sets the button to `success`
* `kg-warning`: Sets the button to `warning`
* `kg-danger`: Sets the button to `danger`
* `kg-20`: Sets the button to `20%` width
* `kg-30`: Sets the button to `30%` width
* `kg-50`: Sets the button to `50%` width
* `kg-100`: Sets the button to `100%` width


#### Suported tags

* `input(submit)`
* `input(reset)`
* `a`
* `button`
