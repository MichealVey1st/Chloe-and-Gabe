import React from 'react'

export default function Nav() {
  <Navbar class="bg-primary-900" shouldHideOnScroll>
    <NavbarContent className="sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link className="primary" href="chloe">
          Chloe
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="primary" href="gabe">
          Gabe
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="lg:flex">
        <Link href="#">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="#" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
}