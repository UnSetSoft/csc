# KagariCSS

This Framework plans to cover only the important and necessary tags, as well as necessary styles, on the other hand, this Framework is oriented to a 2 typography design, the japanese language and the western typography (english, spanish). Also this Framework is based on Bootstrap.

The updates will be published little by little and will not follow a specific order, so some styles will not be prioritized, for example: Styles for the mobile version, or very specific styles.

> Feel free to Fork and add things if you want to add more styles or fix existing ones.

For how to use check the [wiki](https://github.com/KagariSoft/KagariCSS/wiki) (Work in Progress).

# Import in your project

### Html
```html

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kagaristyle@latest/dist/css/common.min.css">

```
### Express
```js

const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use('/css', express.static(__dirname + '/node_modules/kagaristyle/dist/css'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port);
console.log("Server started at http://localhost:" + port);

```
and inside your html file:

```html
<link rel="stylesheet" href="/css/common.min.css" />
```


## How to install

Clone the repository and then run the following command:

```
npm install
```

## How to build (Development)

This option will allow you to make live changes and view them instantly.

```
npm run build:develop
```

## How to build

This option will only compile the css 

```
npm run build-css:build
```


> **Note:** Do not edit ".css" files, only edit ".scss" files.