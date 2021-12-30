import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
// import ProductSingle from './components/ProductSingle';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/explore" component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
