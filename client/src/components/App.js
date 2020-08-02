import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const PageOne = () => {
  return <div>PageOne</div>;
};
const PageTwo = () => {
  return <div>PageTwo</div>;
};
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">streamz.</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/stream/new">Create
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink tag={Link} className="text-dark" to="/stream/edit">Edit
                </NavLink>
                <NavLink tag={Link} className="text-dark" to="/stream/delete">Delete a stream
                </NavLink>
                <DropdownItem divider />
                <NavLink tag={Link} className="text-dark" to="/stream/show">Show stream
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Follow us on Instagram: @streamzofficial</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={PageOne} />
        <Route path="/stream/new" exact component={StreamCreate} />
        <Route path="/stream/edit" exact component={StreamEdit} />
        <Route path="/stream/delete" exact component={StreamDelete} />
        <Route path="/stream/show" exact component={StreamShow} />
      </BrowserRouter>
    </div>
  );
};
export default App;
