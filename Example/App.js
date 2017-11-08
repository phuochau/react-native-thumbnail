import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNThumbnail from 'react-native-thumbnail';

const screenW = Dimensions.get('window').width
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      thumbnail: null,
      width: null,
      height: null
    }
  }

  openPicker = () => {
    var options = {
      title: 'Select Video',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
      mediaType: 'video'
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        RNThumbnail.get(response.uri).then((result) => {
          this.setState({
            thumbnail: result.path,
            width: result.width,
            height: result.height
          })
        })
      }
    });
  }

  render() {
    const { thumbnail, width, height } = this.state
    const imgW = screenW
    const imgH = imgW * height / width
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openPicker}><Text>Click Me</Text></TouchableOpacity>
        {thumbnail ? <Image style={{ width: imgW, height: imgH }} source={{ isStatic: true, uri: thumbnail }} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
