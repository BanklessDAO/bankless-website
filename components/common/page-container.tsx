import React from 'react';

import NavBar from './nav-bar';
import Footer from './footer';


class PageContainer extends React.Component {

    render() {

        return (
            <div className='page-container'>
                <NavBar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default PageContainer;