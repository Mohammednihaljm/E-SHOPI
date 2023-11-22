import "./App.css";
import React from "react";
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
// import HomeScreenTest from "./screens/HomeScreenTest";

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <a href="/">amazon</a>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/" element={<HomeScreen/>}/>
          {/* <Route path="/" element={<HomeScreenTest/>}/> */}
        </Routes>
        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
