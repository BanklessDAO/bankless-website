import React from 'react';
import { Flex } from '@chakra-ui/react'

import NavBar from './nav-bar';
import Footer from './footer';


class PageContainer extends React.Component {

    render() {

        return (
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              background={"black"}
            >
                <NavBar />
                {this.props.children}
                <Footer />
            </Flex>
        )
    }
}

export default PageContainer;