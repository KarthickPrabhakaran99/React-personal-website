import './styles.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from './HomePage';
import Header from './Header';
import Cv from './Cv';

import Contact from './Contact';

function App() {
  return (
    <div>
 <Router>
 <div className="App">
 <Header />
   <Switch>
     <Route exact path="/">
      
    <HomePage />
     </Route>
    
     <Route exact path="/cv">
      
    <Cv />
       
       
     </Route>
     <Route exact path="/contact">
      
  <Contact />
         
         
       </Route>
     </Switch>
     </div>
    
     </Router>
    </div>
  );
}

export default App;
