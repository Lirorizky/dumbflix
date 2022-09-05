// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import ProfileDum from '../assets/images/profiledum.jpg';
// import '../assets/styles/style.css';
// import Images from '../assets/Icons/icons';

// const style = {
//   brand: {
//     color: 'red',
//     paddingRight: '10vw',
//   },
//   profileContainer: {
//     width: '40px',
//     height: '40px',
//   },
//   profileImage: {
//     borderRadius: '100%',
//     width: '40px',
//     height: '40px',
//     objectFit: 'cover',
//     border: '2px solid white'
//   },
// }

// function NavScroll() {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
//       <Container fluid className="">
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Navbar.Brand href="#" className='ms-5' style={style.brand}>DumbFlix</Navbar.Brand>
//           </Nav>
//           <div className="me-5 ms-auto">
//             <NavDropdown 
//             title={
//               <div style={style.profileContainer}>
//                 <img src={ProfileDum} alt="" className='img-fluid' style={style.profileImage}/>
//               </div>
//             } 
//             className="navDrop ms-auto me-auto" 
//             id="navbarScrollingDropdown" menuVariant="dark" align="end"
//             >
//                 <NavDropdown.Item href="#action3">
//                   <img src={Images.Film} alt="" className='filmDropdown ms-2 me-2'></img> Film
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                   <img src={Images.Logout} alt="" className='filmDropdown ms-2 me-2'></img> Log Out
//                 </NavDropdown.Item>
//             </NavDropdown>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScroll;