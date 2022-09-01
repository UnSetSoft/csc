---
title: Containers
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@kagarisoft/csc/dist/css/common.min.css"/>

The default container is `960` pixels wide and has a padding of `15` pixels on the sides. By default, all content will be displayed in the center.

```html
<div class="kg__container">
    <!-- All content -->
</div>
```

:::tip
The default height of the container is set depending on the contents of the container, but can be changed using `h-100` this will accommodate the high at 100vh.
:::

## Expanded container

The expanded container occupies 100% of the width and has a padding of `15` pixels on the sides.

```html
<div class="kg__container kg-expanded">
    <!-- All content -->
</div>
```

### Ampersand modification list

* `kg-expanded`: expands the container to 100% of the width
* `h-100`: sets the height of the container to 100vh
* `kg-dark`: sets the background color of the container to `#2b2b2b`
