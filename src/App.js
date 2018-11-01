/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import ImagePicker from "react-native-image-picker";

import {
  Container,
  Title,
  Button,
  ButtonText,
  Photo,
  SubTitle,
  RecognisedContent,
  Info
} from "./styles.js";
import placeholderImage from "./home.png";

type Props = {};
type State = {
  pictureData: ?string,
  processedData: Array<string>
};
export default class App extends React.Component<Props, State> {
  state = { pictureData: null, processedData: [] };

  takePic = () => {
    console.log("take picture here and upload it");
  };

  processPic() {
    console.log("get information about what is in the picture");
  }

  render() {
    const { pictureData, processedData } = this.state;
    const isProcessingDisabled = !pictureData;

    return (
      <Container>
        <Title>RN Image Workshop</Title>
        <Button onPress={this.takePic}>
          <ButtonText>Take a photo</ButtonText>
        </Button>
        <Photo
          source={
            pictureData
              ? { uri: `data:image/jpeg;base64, ${pictureData}` }
              : placeholderImage
          }
        />
        <SubTitle>What's in the photo?</SubTitle>
        <Button onPress={this.processPic} disabled={isProcessingDisabled}>
          <ButtonText inactive={isProcessingDisabled}>Check</ButtonText>
        </Button>
        <RecognisedContent>
          {processedData.length ? (
            processedData.map(info => <Info key={info}>{info}</Info>)
          ) : (
            <Info>Not sure yet!</Info>
          )}
        </RecognisedContent>
      </Container>
    );
  }
}
