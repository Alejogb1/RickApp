import './App.css';
import {Container} from "react-bootstrap"
import  Characters from "./Components/Characters/index"
import {useState} from "react"
import Search from "./Components/Search/index"
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import Login from "./Components/Pages/Login/index"
import Nav from "./Components/Common/Nav"
function App() {

  const [search, setSearch] = useState("");

  const handlerSearch = (name) => {
    setSearch(name)
  }

  return (
    <Container>
      <Router>
        <Nav/>
        <Route path="/login" exact component={Login}/>
        <Redirect to="/"/>
      </Router>
      <Search handlerSearch={handlerSearch}/>
      <Characters search={search}/>
    </Container>
  );
}


export default App;
