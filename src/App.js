import React from 'react';
import './App.css';
import logo from './logo.svg';
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form></Form>
      {/*<NameList></NameList> */}
      {/*<UserGreeting></UserGreeting> */}
      {/*<ParentComponent></ParentComponent> */}
      {/*<EventBind></EventBind> */}
      {/*<FunctionClick />*/}
      {/*<ClassClick/> */}
      {/*<Greet name="Bruce" heroName="BatMan"/> */}
      {/*<Welcome name="Clark" heroName="SuperMan"/>*/}
      {/*<Counter></Counter> */}
      {/*<Message/>*/ }
    </div>
  );
}

export default App;
