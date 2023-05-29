
import React from 'react';
import './App.css';
import TodoList from './TodoList';


function App() {
  return (
   // <div className="App"> <ParentComponent/></div>
    //  <div className="App"> <PC/></div>
     // <div className="App"> <SubscriptionComponent/></div>
     // <div className="App"> <QuantityCounter/></div>
     // <div className="App"> <Products/></div>
      //<div className="App"> <Authentication/></div>
     // <div className="App"> <Mainapp/></div>
      <div className="App"> <TodoList/></div>



  );
}

export default App; 


/* 


import React from 'react';
import ComponentOne from './ComponentOne';
import ComponentThree from './ComponentThree';
import ComponentFive from './ComponentFive';
import ValueContext from './ValueContext';

function App() {
  const valueX = 22;

  return (
    <div className="App">
      <ValueContext.ValueContext.Provider value={valueX}>
        <ComponentOne/>
        <ComponentThree/>
        <ComponentFive/>
      </ValueContext.ValueContext.Provider>
    </div>
  );
}

export default App;
*/ 