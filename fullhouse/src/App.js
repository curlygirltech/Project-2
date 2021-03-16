import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import axios from "axios"
import { baseURL, config } from "./services"
import {useState, useEffect } from "react"
import "./App.css";
import ConnectionPage from "./components/ConnectionPage";

function App() {
  const[data, setData]= useState([])
  useEffect(() => {
    const userData = async() => {
      const resp = await axios.get(baseURL, config)
      console.log(resp.data.records)
      setData(resp.data.records)
    }
    userData()
},[])
  
  return (
    <div>
      <Navbar />
      <Route exact path="/">FullHouse Home</Route>
      <Route path="/about">FullHouse About</Route>
      <Route path="/blog">FullHouse Blog</Route>
      <Route path="/newform"></Route>
      <Route path="/connectionpage">
        <div className="connection-container">
          {data.map((data) => (
            <ConnectionPage ConnectionPage={ConnectionPage} />
          ))}
        </div>
      </Route>
      <div className="app-title">
        <h1>FullHouse</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
