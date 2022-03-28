import React from 'react';
import Image from 'next/image'
import {Box, Flex, Text, useMediaQuery} from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel () {
    const [isMobile] = useMediaQuery('(max-width: 768px)')
    const [showDescription, setShowDescription] = React.useState(false)
    const slidePercentage = isMobile ? 100 : 33;
    const carouselWidth = isMobile ? '90%' : '100%';

    // These are the images used in the slide
    const cards = [
        {id: 1, url: '/images/our-values-education.png', title: 'Education', description:'We learn from each other. We seek to become\n' +
                'a trusted guide that empowers people all over\n' +
                'the globe to adopt decentralized finance by\n' +
                'sharing accurate, truthful, and objective information.'},
        {id: 2, url: '/images/our-values-culture.png', title: 'Culture', description:'We reward action and embrace risk. We empower our community to continually drive new initiatives by providing a space to self-organize and quickly move from idea to action.'},
        {id: 3, url: '/images/our-values-decentralized-governance.png', title: 'Decentralized Governance', description:'We put decision making into the hands of the collective. We create legitimacy through an environment where the best ideas win.'}
    ];
    const handleOnItemClick = (id) => {
        setShowDescription(!showDescription);
    }
    return (
        <Flex py={5} direction={{sm:'column', md: 'row'}}>
            <Carousel
                infiniteLoop
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                centerMode={true}
                centerSlidePercentage={slidePercentage}
                width={carouselWidth}
            >
                {cards.map((card, index) => (
                <Box onClick={() => handleOnItemClick(card.id)}>
                    <Image
                      src={card.url}
                      height={248}
                      width={404}
                      alt={'Our Values - ' + card.title}
                      />
                    <Text position={"relative"} top={-20} casing={"uppercase"} fontWeight={700}>{card.title}</Text>
                    {showDescription && <Text id={"card" + card.id} position={"relative"} fontWeight={400} fontSize={{base: 'md', lg:'xl'}} textAlign={"center"}>{card.description}</Text>}
                </Box>
                ))}
            </Carousel>
        </Flex>
    );
}

export default ImageCarousel