import { Header } from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import { Form } from "./components/Form/Form";
import { NothingToLunchBtn } from "./components/NothingToLunchBtn/NothingToLunchBtn";

function App() {
  return (
    <Container>
      <Header />
      <Form />
      <NothingToLunchBtn />
    </Container>
  );
}

export default App;
