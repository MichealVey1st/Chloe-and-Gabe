import { Snippet } from '@nextui-org/react';
import React from 'react';

// https://www.w3schools.com/react/default.asp
// https://www.w3schools.com/react/react_jsx.asp
// https://nextui.org/docs/components/card
// https://nextui.org/docs/components/button

// TODO: tell Chloe that she is absoluely awesome ;)
// If you're reading this then my mission probably succeeded :P

/*

  /\_/\  
 ( o.o ) 
  > ^ <
  meow...
  
*/

export default function Chloe() {
  return ( 
 //Wrap the JSX In a div or a fragment
    <div style={{margin: 'auto', width: '50%', border: '3px', padding: '10px'}}>
      <h1>Chloe was here...</h1>
      <Snippet symbol=" " size="lg" variant="bordered">  
        <span>{`__   /\\_/\\   `}</span>  
        <span>{`_ ( o.o )  `}</span>
        <span>{`__ > ^ <  `}</span>
        <span>{`-- meow...`}</span>

      </Snippet>
    </div>
  
  );
  
  

}