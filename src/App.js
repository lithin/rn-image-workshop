/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

const AddPhoto = styled.TouchableOpacity`
  border-radius: 10;
  background-color: blue;
`;

type Props = {};
export default class App extends React.Component<Props> {
  takePic() {
    console.log("take picture here and upload it");
  }

  render() {
    return (
      <ScrollView>
        <AddPhoto onPress={this.takePic}>Take a photo</AddPhoto>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
      </ScrollView>
    );
  }
}
