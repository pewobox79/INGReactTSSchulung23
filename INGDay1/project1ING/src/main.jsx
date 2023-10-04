import ReactDOM from 'react-dom/client'
import AboutMe from './pages/AboutMe.jsx';
import './styles/index.css'
import BasicLayout from './layouts/BasicLayout.jsx';
import Blog from './pages/Blog.jsx';
import AxiosHome from './pages/AxiosHome.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BasicLayout>
      {/* <Home /> */}
      {/* <AboutMe /> */}
      {/* <Blog/> */}
      <AxiosHome/>
    </BasicLayout>
)
