import { lazy, Suspense } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Loader from './components/Loader';
import Layout from './Layout'
import ScrollToTop from './components/Scroll';

const Home=lazy(()=>import('./pages/Home'));
const Services=lazy(()=>import('./pages/Services'))
const Contact=lazy(()=>import('./pages/Contact'))
const Cards=lazy(()=>import('./pages/Cards'))
const PrivacyPolicy=lazy(()=>import('./pages/PrivacyPolicy'))
const Cookies=lazy(()=>import('./pages/Cookies'))
const Terms=lazy(()=>import('./pages/Terms'))


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
       <Route path='/cards' element={<Cards/>} />
       <Route path='/terms-and-conditions' element={<Terms/>} />
       <Route path='/cookies' element={<Cookies/>} />
       <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        </Route>
      </Routes></ScrollToTop>
    </Router>
  )
}

export default App
