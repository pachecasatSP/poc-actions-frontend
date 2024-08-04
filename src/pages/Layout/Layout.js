import { Outlet } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Weather Forecast Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center" activeKey="/">
              <Nav.Link href="/weatherforecast">Weather Now!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;