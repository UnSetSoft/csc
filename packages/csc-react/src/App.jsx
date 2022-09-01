import { Button, Details, Alert, Image } from './lib'

function App() {
  return <div className="App">

    <Button label="Hello world" />

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
