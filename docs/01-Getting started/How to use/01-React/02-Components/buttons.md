---
title: Buttons
---
```jsx
import {Button} from '@kagarisoft/csc-react'
```

```jsx live  title="/src/pages/Home.jsx"

function Home() {
  return (
    <>
        <Button label="Default" />
        <Button label="Default" styleArg="kg-warning" />
    </>
  );
}

```
:::info
  To see the styles of 'styleArg' see [this page](https://classstyle.netlify.app/docs/Components/buttons#ampersand-modification-list).
:::