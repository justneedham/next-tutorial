import React, { PureComponent } from 'react';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

const containerStyle = {

}

const menuStyle = {
    background: 'red',
    position: 'fixed',
    height: '100%',
    width: '200px',
    transform: 'translateX(0)',
    transition: 'transform 0.3s ease-in-out',
}


const menuClose = {
    ...menuStyle,
    transform: 'translateX(-100%)',
    transition: 'transform 0.3s ease-in-out'
}


class Menu extends PureComponent {
    constructor(props) {
        super(props);
        this.targetElement = null;
        this.state = {
            open: false,
        }
    }

    componentDidMount() {
        this.targetElement = document.querySelector('#testDiv')
    }

    toggle = () => {
        const { open } = this.state;
        if (open) {
            enableBodyScroll(this.targetElement);
            this.setState({
                open: false
            })
        } else {
            disableBodyScroll(this.targetElement)
            this.setState({
                open: true
            })
        }
    }

    render() {
        const { open } = this.state;
        return (
            <div id="testDiv" style={containerStyle}>
                <button onClick={this.toggle}>Toggle</button>
                <div style={open ? menuStyle : menuClose}>
                    <p>Test</p>
                </div>
            </div>
        )
    }
}

export default Menu;
