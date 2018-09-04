# React Setup
```shell
npm install -g create-react-native-app

brew update && brew cask install react-native-debugger

```
# Setup project
```shell
react-native init DynamicHelloWorkshop

npm install --save redux

npm install --save react-redux

npm install --save redux-logger

npm install --save redux-thunk
```

## React
See https://facebook.github.io/react-native/

## Redux
See https://redux.js.org/introduction/coreconcepts

## Redux Logger
See https://www.npmjs.com/package/redux-logger

## Redux Thunk
See https://github.com/reduxjs/redux-thunk

# Android Emulator Developer Menu
You can access the developer menu by shaking your device or by selecting "Shake Gesture" inside the Hardware menu in the iOS Simulator. You can also use the ⌘D keyboard shortcut when your app is running in the iOS Simulator, or ⌘M when running in an Android emulator on Mac OS and Ctrl+M on Windows and Linux. Alternatively for Android, you can run the command `adb shell input keyevent 82` to open the dev menu (82 being the Menu key code).