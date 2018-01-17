
# react-native-thumbnail
Get thumbnail from local media. Currently, it only supports for video.

## Getting started

`$ npm install react-native-thumbnail --save`

### Mostly automatic installation

`$ react-native link react-native-thumbnail`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-thumbnail` and add `RNThumbnail.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNThumbnail.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNThumbnailPackage;` to the imports at the top of the file
  - Add `new RNThumbnailPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-thumbnail'
  	project(':react-native-thumbnail').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-thumbnail/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-thumbnail')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNThumbnail.sln` in `node_modules/react-native-thumbnail/windows/RNThumbnail.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Com.Reactlibrary.RNThumbnail;` to the usings at the top of the file
  - Add `new RNThumbnailPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNThumbnail from 'react-native-thumbnail';


let options = {
  saveToDir: '.app_thumbs', //default "/storage/emulated/0/thumb/"
  uniqueNames: false,// default "false", same names
};
const filePath = "/storage/emulated/0/DCIM/Camera/VID_20180116_202826.mp4";
RNThumbnail.get(filePath, options).then((result) => {
  console.log(filePath, result);
  /** result:
  {
    height: 320
    path:"file:///storage/emulated/0/DCIM/Camera/.app_thumbs/VID_20180116_202826.mp4.jpeg" // thumbnail path
    width:240
  }
 */
});
```
