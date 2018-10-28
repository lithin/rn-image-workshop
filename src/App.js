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

import placeholderImage from "./home.png";

const ORANGE = "rgb(255, 122, 0)";
const DARK_GREY = "rgb(51, 73, 91)";
const LIGHT_GREY = "rgb(224, 228, 230)";
const WHITE = "rgb(255, 255, 255)";

const Container = styled.ScrollView`
  padding-top: 50;
  padding-horizontal: 15;
`;

const Button = styled.TouchableOpacity`
  border-radius: 8;
  background-color: ${({ disabled }) => (disabled ? LIGHT_GREY : ORANGE)};
  width: 200;
  height: 40;
  align-self: center;
  align-items: center;
  justify-content: space-around;
`;

const ButtonText = styled.Text`
  color: ${({ inactive }) => (inactive ? DARK_GREY : WHITE)};
  font-size: 16;
`;

const Title = styled.Text`
  color: ${ORANGE};
  font-size: 30;
  margin-vertical: 30;
`;
const SubTitle = styled.Text`
  color: ${ORANGE};
  font-size: 20;
  margin-vertical: 30;
`;
const Info = styled.Text`
  font-size: 15;
  color: ${DARK_GREY};
`;

const Photo = styled.Image`
  width: 100%;
  max-height: 300;
  margin-top: 40;
`;
const RecognisedContent = styled.View`
  margin-top: 30;
`;

type Props = {};
type State = { pictureURL: ?string, data: Array<string> };
export default class App extends React.Component<Props, State> {
  state = { pictureURL: null, data: [] };

  takePic() {
    console.log("take picture here and upload it");
  }

  processPic() {
    console.log("get information about what is in the picture");
  }

  render() {
    const { pictureURL, data } = this.state;
    const isProcessingDisabled = !pictureURL;

    return (
      <Container>
        <Title>RN Image Workshop</Title>
        <Button onPress={this.takePic}>
          <ButtonText>Take a photo</ButtonText>
        </Button>
        <Photo source={pictureURL ? { uri: pictureURL } : placeholderImage} />
        <SubTitle>What's in the photo?</SubTitle>
        <Button onPress={this.processPic} disabled={isProcessingDisabled}>
          <ButtonText inactive={isProcessingDisabled}>Check</ButtonText>
        </Button>
        <RecognisedContent>
          {data.length ? (
            data.map(info => <Info key={info}>{info}</Info>)
          ) : (
            <Info>Not sure yet!</Info>
          )}
        </RecognisedContent>
      </Container>
    );
  }
}
