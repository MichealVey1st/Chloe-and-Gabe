import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Divider} from "@nextui-org/react";

export default function Home () {
    return(
        <div className="dark foreground">
            <h1 style={{textAlign:'center', fontSize: '40px'}}>Bigfoot who?</h1>
            <br/>
            <p style={{textIndent: '25px', fontSize: '18px'}} >
            In the heart of the untamed and expansive wilderness, a mysterious and legendary creature roams freely — the mighty Sasquatch. Revered by various names across cultures, such as Bigfoot or Yeti, this enigmatic being stands as a testament to the enduring allure of the unknown. With a colossal, humanoid form draped in thick, shaggy fur, Sasquatch has become an iconic figure in the realm of cryptozoology.            
            </p>
            <p style={{textIndent: '25px', fontSize: '18px'}} >
            Woven into the fabric of indigenous folklore for centuries, Sasquatch is often depicted as a guardian of the wilderness, dwelling in the secluded depths of dense forests and remote mountain ranges. The creature, described as a colossal ape-like being, is elusive by nature, shying away from direct human contact and leaving behind only cryptic traces of its existence — the iconic, massive footprints that have fueled countless tales and investigations.            </p>
            <p style={{textIndent: '25px', fontSize: '18px'}} >
            While skeptics dismiss Sasquatch as a product of the human imagination, a myriad of compelling accounts, footprint casts, and purported photographic evidence persists. Witnesses from diverse backgrounds and geographical locations have reported sightings of this mysterious giant, creating a tapestry of narratives that spans cultures and generations.            
            </p>
            <p style={{textIndent: '25px', fontSize: '18px'}} >
            The allure of Sasquatch lies not only in the quest for scientific validation but also in the deep sense of wonder and curiosity it ignites. As we venture into the uncharted territories of the natural world, the legend of Sasquatch beckons us to consider the possibility that, hidden within the shadows of the wilderness, an ancient and elusive giant may continue to defy our understanding, challenging us to explore and appreciate the mysteries that still linger beyond the edges of our knowledge. In the vast expanse of untouched landscapes, Sasquatch stands as a symbol of the wild, inviting us to peer into the depths of the unknown and contemplate the wonders that may lie hidden in the untouched corners of our planet.            </p>
            <br/>
            <div id="card holder">
                <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                >
                    <Image
                        alt="Bigfoot impression"
                        className="object-cover"
                        height={200}
                        src="./imgs/bigfoot1.jpg"
                        width={200}
                    />
                    <Divider></Divider>
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Bigfoot impression</p>
                    </CardFooter>
                </Card>
                <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                >
                    <Image
                        alt="Bigfoot impression"
                        className="object-cover"
                        height={200}
                        src="./imgs/bigfoot2.jpg"
                        width={200}
                    />
                    <Divider></Divider>
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Bigfoot impression</p>
                    </CardFooter>
                </Card>
                <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                >
                    <Image
                        alt="Bigfoot impression"
                        className="object-cover"
                        height={200}
                        src="./imgs/drawingbigfoot.jpg"
                        width={200}
                    ></Image>
                    <Divider></Divider>
                    <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                        <p className="text-tiny text-white/80">Bigfoot impression</p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}