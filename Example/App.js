import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNThumbnail from 'react-native-thumbnail';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      thumbnail: null
    }
  }

  openPicker () {
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
        console.log(response.uri)
        RNThumbnail.get(response.uri).then((result) => {
          console.log(result.path); // thumbnail path
        })
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openPicker}><Text>Click Me</Text></TouchableOpacity>
        {this.state.thumbnail ? <Image source={this.state.thumbnail} /> : null}
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
