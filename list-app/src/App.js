//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Counters from './components/counters';
import React from 'react';
//Counters from indext to app
//index-->App-->counters-->counter
//Conuters  to counter via props
//Because parent child relationship
//No p-c relationship b/w counters and app
//So we have t--> lifting state up
function App() {
  return (
<React.Fragment>
<Navbar/>
 <main className="container">
<Counters/>
 </main>
</React.Fragment>

  );
}

export default App;
