import './App.css';
import {Container} from "react-bootstrap"
import  Characters from "./Components/Characters/index"
import {useState} from "react"
import Search from "./Components/Search/index"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Register from "./Components/Pages/Register/index"
import Login from "./Components/Pages/Login/index"
function App() {

  const [search, setSearch] = useState("");

  const handlerSearch = (name) => {
    setSearch(name)
  }

  return (
    <Container>
      <Router>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
      </Router>
      <Search handlerSearch={handlerSearch}/>
      <Characters search={search}/>
    </Container>
  );
}


export default App;
