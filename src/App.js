import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Movies from "./Pages/Movies";
import {MoviesProvider} from "./Context/MoviesContext";
import MovieInfo from "./Pages/MovieInfo";

function App() {
  return (
    <Router>
      <div className="App container-fluid">
        
      
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/movies/:id" component={MovieInfo} />
      </Switch>
      </div>
    </Router>
  );
}

function AppProvider(){
  return(
    <MoviesProvider>
      <App />
    </MoviesProvider>
  )
}

export default AppProvider;
