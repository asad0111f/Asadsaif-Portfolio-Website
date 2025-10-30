import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { DefaultSEO } from './lib/seo'
import VideoEditing from './pages/VideoEditing'
import GraphicDesign from './pages/GraphicDesign'

export default function App() {
  return (
    <>
      <DefaultSEO />
      <Routes>
        <Route element={<MainLayout />}> 
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="projects/video-editing" element={<VideoEditing />} />
          <Route path="projects/graphic-design" element={<GraphicDesign />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
