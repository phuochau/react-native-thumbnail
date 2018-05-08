
import { NativeModules, Platform } from 'react-native';

const { RNThumbnail: NativeRNThumbnail } = NativeModules;

const defaultOptions = {
  timestamp: 0,
  quality: 1
}

export default class RNThumbnail {
  static get(path, options = {}) {
    if (Platform.OS === 'ios') {
      const mergedOptions = {...defaultOptions, ...options}
      return NativeRNThumbnail.get(path, mergedOptions.timestamp, mergedOptions.quality)
    }
    return NativeRNThumbnail.get(path)
  }
};
