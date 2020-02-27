import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {styles} from './Styles';
import RecipeListItem from './components/Partials/RecipeListItem';
import GlowText from './components/Text/GlowText';
import Images from './constants/Images';

export default class InteractiveRecipes extends Component {
  render() {
    let title = 'Interactive Recipes';
    let listTitle = 'Our Recipes';
    let pic = {uri: Images.sampleImageURI}
    let chickenImg = {uri: Images.chickenImg}

    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        <View style={styles.introContainer}>
            <Text style={styles.mainTitle}>{title}</Text>
            <Image source={pic} style={{ width:250, height: 250 }} />
        </View>

        <View style={styles.recipesListContainer}>
            <Text>{listTitle}</Text>
            <RecipeListItem title='Chicken' image={{chickenImg}} />
        </View>


      </View>
    );
  }
}