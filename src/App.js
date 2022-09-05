import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/style.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import IncomingTransactions from './Pages/IncomingTransactions';
import AddFilm from './Pages/AddFilm';
import NotFound from './Pages/NotFound';

// navbar import 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ProfileDum from './assets/images/profiledum.jpg';
import Images from './assets/Icons/icons';
// navbar import

const style = {
  brand: {
    color: 'red',
    paddingRight: '10vw',
  },
  profileContainer: {
    width: '40px',
    height: '40px',
  },
  profileImage: {
    borderRadius: '100%',
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    border: '2px solid white'
  },
}

function App() {
  return (
    <div className="App basePage">
      <Router>
        {/* NAVBAR */}
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
          <Container fluid className="">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Navbar.Brand href="/" className='ms-5' style={style.brand}>
                  <img src={Images.Dumbflix} alt=''/>
                </Navbar.Brand>
              </Nav>
              <div className="me-5 ms-auto">
                <NavDropdown 
                  title={
                    <div style={style.profileContainer}>
                      <img src={ProfileDum} alt="" className='img-fluid' style={style.profileImage}/>
                    </div>
                  } 
                  className="navDrop ms-auto me-auto" 
                  id="navbarScrollingDropdown"
                  menuVariant="dark"
                  align="end"
                >
                    <NavDropdown.Item href="#">
                      <img src={Images.Film} alt="" className='filmDropdown ms-2 me-2'></img> Film
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                      <img src={Images.Logout} alt="" className='filmDropdown ms-2 me-2'></img> Log Out
                    </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* NAVBAR */}

        {/* ROUTE */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<IncomingTransactions />} />
          <Route path="/add-film" element={<AddFilm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* ROUTE */}
    </Router>
    </div>
  );
}

export default App;
