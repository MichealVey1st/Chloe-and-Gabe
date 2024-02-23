import "./output.css";
import React from 'react';
import {Navbar, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

function App() {
  return (
      <div className="red-dark text-foreground bg-background">
        <div id='navbar'>
          <Navbar className="bg-primary">
            <NavbarContent className="sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link className="text-primary" href="chloe">
                  Chloe
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="text-primary-900" href="gabe">
                  Gabe
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="lg:flex">
                <Link className="primary" href="#">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} href="#" variant="ghost">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
      </div>
  );
}

export default App;
