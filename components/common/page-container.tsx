import React from 'react';

import NavBar from './nav-bar';


class PageContainer extends React.Component {

    render() {

        return (
            <div className='page-container'>
                <NavBar />
                {this.props.children}
            </div>
        )
    }
}

export default PageContainer;