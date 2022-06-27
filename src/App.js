
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import Header from './header';
import MainPage from './main-page';
import { BrowserRouter as Router,  Route ,Routes} from 'react-router-dom';
import Contact from './contact';
import AboutPage from './about-page';
import ProjectPage from './project-page';
import NotFound from './404not';
// import './templatemo-style.css'
import './header.css';
import './contact.css';
import Footer from './footer';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
         <Routes>
              <Route path="/" element={<MainPage />} exact/>
              <Route path='/contact/' element={<Contact />} />
              <Route path='/about/' element={<AboutPage  />} />
              <Route path='/project/' element={<ProjectPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          <Footer />
    </Router>
    </div>
    
  );
}

export default App;
