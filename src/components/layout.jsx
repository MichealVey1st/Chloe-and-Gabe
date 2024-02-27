import React from 'react';
import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Outlet } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

export default function Layout() {
  return(
    <div id='navbar'>
      <Navbar shouldHideOnScroll>
        <NavbarContent className="sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-primary" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-primary" href="chloe">
              Chloe
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-primary" href="gabe">
              Gabe
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Link color="primary" href="login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} href="signup" color="primary" variant="ghost">
              Sign Up
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Outlet />
      <footer>Created by Chloe & Gabe! :)</footer>
    </div>
  )
}