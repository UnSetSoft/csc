import React, { useState } from 'react';
import { Button, Acordeon, Alert, Image, Container } from './lib'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

import './assets/css/main.css'
function App() {
  const [Count, setCount] = useState(0)

  const button = () => {
    setCount(Count + 1)
  }

  return <div className="App">

    <Container className="test" expanded isLite>
      <Button anchor="eee" decorationOff label="Hello world" success onClickButton={button} />

      {Count}

      <Acordeon
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        icon={faLaptop}
        iconColor="000"

      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum earum, fugit praesentium exercitationem aliquam magnam officia nemo. Ea quasi voluptate, voluptatum qui tempora atque. Facilis tempora sed ea nulla incidunt!
          hello world
        </p>
      </Acordeon>

      <Alert type>
        Hola mundo
      </Alert>

      <Image
        src="https://placehold.jp/3d4070/ffffff/500x150.png"
        alt="hey!"
        anchor="eee"
        thumbnail
        responsive
        border

      />
    </Container>
  </div>;
}

export default App;


const style = {
  customButton: {
    color: '#000',
  }
}