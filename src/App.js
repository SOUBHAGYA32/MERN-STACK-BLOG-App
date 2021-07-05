//Pages
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/Articlelist';
//Components 
import NavBar from './Components/NavBar';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/output.css'

function App() {
  return (
    <Router>
    <NavBar/>
      <div className="max-w-screen-md mx-auto pt-20">
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/article/:name' component={Article}/>
      <Route exact path='/article-list' component={ArticleList}/>
      </div>
    </Router>
  );
}

export default App;
