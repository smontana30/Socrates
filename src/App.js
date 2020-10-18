import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GreekCrown from "./assets/images/GreekCrown.png";
import Admin from './components/Admin';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TabContent from 'react-bootstrap/TabContent';
import  Convos from './components/Convos';
import Stats from './components/Stats';
import io from "socket.io-client";

function App() {
  const [key, setKey] = useState('convos');
  const socket = io("http://127.0.0.1:5000/")

  return (
    <div className= 'App'>
        <div className= 'header'> 
          <div className= 'headerTitle'>
            Socrates
          </div>

          <img src = { GreekCrown } />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Tabs
        id="tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="admin" title="Admin">
          <Admin/>
        </Tab>
        <Tab eventKey="convos" title="Convos">
          <Convos socket = {socket}/>
        </Tab>
        <Tab eventKey="statics" title="Metrics">
          <Stats />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
