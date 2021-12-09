import React from 'react';
import './index.css';
import './App.css';
import Shop from './shop';
import Home from './home';
import About from './about';
import Nav1 from './navigation';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
 <div className="App">
   
     <Router>
     <Nav1 />
     <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} />
      <Route path="/shop" element={<Shop/>} />

 </Routes>
      </Router>


     {/* <BrowserRouter>
     <Routes>
                  
        <Route path="/"  exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      </Routes>
      
     </BrowserRouter>  */}
      </div>
  );
}

export default App;
