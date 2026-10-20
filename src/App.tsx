import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { AboutSection } from './components/about/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { CreativeSection } from './components/creative/CreativeSection';
import { JourneySection } from './components/journey/JourneySection';
import { ContactSection } from './components/contact/ContactSection';
import { AdminLogin } from './pages/Admin/Login';

function PublicLayout() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <CreativeSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function AdminLayout() {
  return <AdminLogin />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />} />
      <Route path="/admin/login" element={<AdminLayout />} />
      <Route path="/admin/*" element={<Navigate to="/admin/login" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;