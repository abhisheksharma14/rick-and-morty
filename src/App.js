import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Sidebar, Content } from "./components";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Content />
    </React.Fragment>
  );
}

export default App;
