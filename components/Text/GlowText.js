import React, { Component } from 'react';
import { Text } from 'react-native';

class GlowText extends Component{
    state = { textColor: '#000000' };

    componentDidMount(){

        setInterval(() => (
            this.setState(() => (
                { textColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')' }
            ))
        ), 1000);
    };

    render() {
        return (
            <Text style={{ color: this.state.textColor}} >{this.props.text}</Text>
        );
    }
}