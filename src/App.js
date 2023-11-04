import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import Table from './components/views/Table/Table';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <main>
      <Container>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
