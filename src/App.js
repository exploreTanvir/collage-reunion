import {
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Form from "./components/form/Form";
import NewForm from "./components/NewForm/NewForm";
import Home from "./components/pages/home/Home";

function App() {
  
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newForm">
         <Form/>
          </Route>
          <Route path="/registration">
         <NewForm/>
          </Route>
         
          
        </Switch>
    </Router>
    </div>
  );
}

export default App;
