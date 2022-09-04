import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Navbar } from './components/navbar/Navbar';
import {Homepage} from './pages/Homepage'





function App() {
  return (
   <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact element={Homepage}/>
    </Switch>
   </Router>
  );
}

export default App;
