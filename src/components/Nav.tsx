import { Navbar, Nav } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-Navbar-Nav" />
      <Navbar.Collapse id="basic-Navbar-Nav">
        <div className="container-fluid">
          <Nav.Link color='white' href="#home" style={{color:'white'}}>Home</Nav.Link>
          <Nav.Link href="#about" style={{color:'white'}}>About</Nav.Link>
          <Nav.Link href="#services" style={{color:'white'}}>Services</Nav.Link>
          <Nav.Link href="#contact" style={{color:'white'}}>Contact</Nav.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
