import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/cartSummary";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  color="light" light expand="md">
        <NavbarBrand href="/">Store App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="d-flex justify-content-end" isOpen={isOpen} navbar>
          <Nav  navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary  />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
