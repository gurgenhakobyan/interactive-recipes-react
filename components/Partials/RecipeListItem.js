import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

export default class RecipeListItem extends Component {
    render(){
        const { width, height } = Dimensions.get('window');
        return (
            <View style={{flex: 1}}>
                <Text>{this.props.title}</Text>
                <Image source={this.props.image} style={{ width: width * 0.8, height: height * 0.8 }} resizeMode={'cover'} />
            </View>
        );
    }
}