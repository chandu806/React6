import logo from './logo.svg';
import './App.css';

import { Login } from './components/Login';
import { Cart } from './components/Cart';
import {Routes,Route} from "react-router";
import {Home} from "./components/Home";
import {Navbar} from "./components/Navbar";
import {Afterpage} from "./components/Afterpage"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/cart" element = {<Cart/>}></Route>
        <Route path = "/product/:id" element = {<Afterpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
