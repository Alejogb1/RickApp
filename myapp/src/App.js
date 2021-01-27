import './App.css';
import {Container} from "react-bootstrap"
import  Characters from "./Components/Characters/index"
import {useState} from "react"
import Search from "./Components/Search/index"
function App() {

  const [search, setSearch] = useState("");

  const handlerSearch = (name) => {
    setSearch(name)
  }

  return (
    <Container>
      <Search handlerSearch={handlerSearch}/>
      <Characters search={search}/>
    </Container>
  );
}

export default App;
