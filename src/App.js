//Pages
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/Articlelist';
import NotFound from './pages/NotFound';
//Components 
import NavBar from './Components/NavBar';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/output.css'

function App() {
  return (
    <Router>
    <NavBar/>
      <div className="max-w-screen-md mx-auto pt-20">
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/article-list' component={ArticleList}/>
      <Route exact path='/article/:name' component={Article}/>
      <Route component={NotFound}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
