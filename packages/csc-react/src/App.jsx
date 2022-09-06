import React, { useState } from 'react';
import { Button, Details, Alert, Image } from './lib'

function App() {
  const [Count, setCount] = useState(0)

  const button = () => {
    setCount(Count + 1)
  }

  return <div className="App">

    <Button label="Hello world" customClass="" styleArg="success" onClickButton={button} />

    {Count}

    <Details title="hello" body="hello" />

    <Alert type>
      Hola mundo
    </Alert>

    <Image
      src="https://placehold.jp/3d4070/ffffff/500x150.png"
      alt="hey!" />
  </div>;
}

export default App;


const style = {
  customButton: {
    color: '#000',
  }
}