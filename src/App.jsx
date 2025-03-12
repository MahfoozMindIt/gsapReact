import { lazy, Suspense } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Loader from './components/Loader';
import Layout from './Layout'
import ScrollToTop from './components/Scroll';

const Home=lazy(()=>import('./pages/Home'));
const Services=lazy(()=>import('./pages/Services'))
const Contact=lazy(()=>import('./pages/Contact'))


function App() {

  return (
    <Router>
      <ScrollToTop>
      <Suspense fallback={<Loader/>}/>
        <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
       <Route path='/services' element={<Services/>} />
       <Route path='/contact' element={<Contact/>} />
        </Route>
      </Routes></ScrollToTop>
    </Router>
  )
}

export default App
