import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Footer from './components/footer/footer.jsx'
import Loading from './components/loading.jsx'; 

const Home = lazy(() => import('./pages/home/home.jsx'));
const ProjectPage = lazy(() => import('./pages/project/projectPage.jsx'));
const _404 = lazy(() => import('./pages/404/_404.jsx'));
const Admin = lazy(() => import('./admin/admin.jsx'));

function App() {

  return (
    <>
      <Nav />

      <section id='wrapper'>
        <Suspense fallback={<Loading />}>
          
          <Routes>
            <Route path='*' element={<_404 />} />

            <Route path="/" element={<Home />} /> 
            <Route path="/projects" element={<ProjectPage />} /> 
            <Route path="/projects/:slug" element={<ProjectPage />} /> 



            <Route path="/admin" element={<Admin />} /> 
            
          </Routes>

        </Suspense>
      </section>
      
      <Footer />
    </>
  )
}

export default App
