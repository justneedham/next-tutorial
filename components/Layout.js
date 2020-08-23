import Header from './Header';
import Menu from './Menu';
import React from 'react';

const layoutStyle = {
    margin: 20,
    padding: 20,
    height: '2000px',
    border: '1px solid #DDD'
}

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        <Menu />
        {props.children}
    </div>
)

export default Layout
