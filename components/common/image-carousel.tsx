import React, { Component } from 'react';
import Image from 'next/image'
import { Box, Container, Flex, Text } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {
    // These are the images used in the slide
    render() {
        const cards = [
            {url: '/images/our-values-education.png', title: 'Education'},
            {url: '/images/our-values-culture.png', title: 'Culture'},
            {url: '/images/our-values-decentralized-governance.png', title: 'Decentralized Governance'}
        ];
        return (
            <Flex py={5} direction={['column', 'row']}>
                <Carousel
                    infiniteLoop
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                >
                    {cards.map((card, index) => (
                    <Box>
                        <Image
                          src={card.url}
                          height={248}
                          width={404}
                          alt={'Our Values - ' + card.title}
                          />
                        <Text position={"relative"} top={-20} casing={"uppercase"} fontWeight={700}>{card.title}</Text>
                    </Box>
                    ))}
                </Carousel>
            </Flex>
        );
    }
}

export default ImageCarousel
// ReactDOM.render(<ImageCarousel />, document.querySelector('.image-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
