import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
  const {title, artist, thumbnail_image, image, url} = props.album;
  const {thumbnailContainer,thumbnail,headerText,headerContent,imageContainer} = styles;

  return (    
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnail} source={{uri:thumbnail_image}} />
        </View>    
        <View style={headerContent}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection> 

      <CardSection>
        <Image style={imageContainer} source={{uri:image}} />
      </CardSection> 

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Click me!!
        </Button> 
      </CardSection>
    </Card>
  );
}
 
const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnail: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageContainer: {
    height: 300,
    flex: 1,
    width: null
  }
}


export default AlbumDetail;