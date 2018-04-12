
import { NativeModules, Platform } from 'react-native';

const { RNThumbnail: NativeRNThumbnail } = NativeModules;

export default class RNThumbnail {
  static get(path, options = { timestamp: 0 }) {
    if (Platform.OS === 'ios') {
      return NativeRNThumbnail.get(path, options.timestamp)
    }
    return NativeRNThumbnail.get(path)
  }
};
