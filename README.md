# React native image recognition workshop

Please have a macbook with you ideally; you can use windows/linux but please check you can run the project without any issues including simulators. No matter which platform you're on, check out this repository _before the workshop_ and follow the following steps to ensure you can run the application. This will help us focus on the interesting bits :)

If you have any questions or issues, feel free to create an issue here on github or hit me up on twitter @lithinn

## Pre-requisites

Requirements (you can't do the workshop without these):

- Installed node & nvm (https://github.com/creationix/nvm)

Nice-to-have's (these will help you follow along but are not strictly necessary):

- Installed yarn ideally
- RN debugger
- Editor set up to work with prettier

## Installing project

`yarn global add react-native-cli`

Make sure you're using correct XCode version:

- `gem install xcode-install`
- `xcversion install 9.4`
- `xcversion select 9.4 --symlink`
- `xcode-select --print-path`

## Running project

- `yarn start`
- `yarn ios` or `yarn android`

For android, you'll need to update the path to Android SDK in `android/local.properties`.

In order to make taking photos work, you'll need to run this app on your actual device. That's easy enough on Android but there is a bit more set up on iOS. Find out how to do this in [RN tutorial](https://facebook.github.io/react-native/docs/running-on-device).
