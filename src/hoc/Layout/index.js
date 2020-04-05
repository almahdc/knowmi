import React, { Component } from 'react';

// Components
import Menu from '../../components/Navigation/Menu'

class Layout extends Component {
    render () {
        return (
            <>
                <Menu />
                <main>
                    {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout;
