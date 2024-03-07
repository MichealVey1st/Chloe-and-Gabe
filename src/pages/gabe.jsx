import React from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

// TODO: Fix the bug where the image is not showing up on the Card
// TODO: Fix the content background color somehow using css ig?
// TODO: Create some sort of content whatever to put on it and make it look nice with cards and stuff. Maybe draw a picture of it?

export default function Gabe() {
  return (
    <div style={{ margin: 'auto', width: '80%', border: '3px', padding: '50px'}}> 
      <h1>Gabe was here.....</h1>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ float: 'left', marginRight: '20px' }}>
          <Card className="py-4" style={{ width: '240px', height: '260px' }}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Bigfoot</p>
              <small className="text-default-500">Hide and Seek Champion</small>
              <h4 className="font-bold text-large">100% real</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                isBlurred
                alt="Card background"
                className="object-cover rounded-xl"
                src="bigfooted.jpg"
                width={240}
              />
            </CardBody>
          </Card>
        </div>
        <div>
          <p>this is a bunch of text to see if it wraps right instead of doing something stupid and like just showing up below the card because that would be super lame because the amount of work it is going to take to try and resolve that issue is going to be "fun"..... it did it..... ughhhh</p>
        </div>
      </div>
    </div>
  )
}
