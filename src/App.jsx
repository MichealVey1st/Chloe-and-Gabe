import React from 'react';
import './output.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
/*import {Button} from "@nextui-org/button";*/
import { NextUIProvider } from '@nextui-org/system';
import {  Button, Navbar,   NavbarBrand,   NavbarContent,   NavbarItem, Image } from "@nextui-org/react";


function App() {
  const navigate = useNavigate();
  return (
    <div>
      <NextUIProvider navigate={navigate}>
        <div justify='center'>
          <Navbar className='flex z-40 w-full h-auto items-center justify-center dark' shouldHideOnScroll>
            <NavbarBrand>
              <Image src="./imgs/bigfoot.png" itemType='image/png'></Image>
            </NavbarBrand>
            <NavbarContent className='flex' justify='end'>

              <NavbarItem>
                <Link size="lg" className='dark foreground' to="/">
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link size="lg" className='dark foreground' to='/about'>
                  About
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/proof' element={<Proof/>}/>
          <Route path='*' element={<Nopage/>}/>
        </Routes>

      </NextUIProvider>
    </div>
  );
}

export default App;