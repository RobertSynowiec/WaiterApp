import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    return (
        <Navbar bg='primary' variant='dark' className='mt-4 mb-4 rounded'>
            <Container>
                <Navbar.Brand className='text-white' as={NavLink} to='/'>Waiter App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav>
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;