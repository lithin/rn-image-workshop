/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import ImagePicker from "react-native-image-picker";
import AWS from "aws-sdk";

import { getAWSAccessTokens, convertBase64ToByteArray } from "./utils";
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

const rekognition = new AWS.Rekognition({
  region: "eu-west-1",
  apiVersion: "2016-06-27",
  ...getAWSAccessTokens()
});

type Props = {};
type State = {
  pictureData: ?string,
  processedData: Array<{ name: string, confidence: number }>
};
export default class App extends React.Component<Props, State> {
  state = { pictureData: null, processedData: [] };

  takePic = () => {
    console.log("take picture here and upload it");
    ImagePicker.showImagePicker({ quality: 0.3 }, response =>
      this.setState({
        pictureData: response.data
      })
    );
  };

  processPic(body) {
    console.log("get information about what is in the picture");

    rekognition.detectLabels(
      {
        Image: {
          Bytes: convertBase64ToByteArray(body)
        },
        MaxLabels: 6,
        MinConfidence: 90
      },
      (err, data) => {
        if (err) {
          console.log(err, err.stack);
        } else {
          this.setState({
            processedData: data.Labels.map(label => ({
              name: label.Name,
              confidence: parseInt(label.Confidence, 10)
            }))
          });
        }
      }
    );
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
        <Button
          onPress={() => this.processPic(pictureData)}
          disabled={isProcessingDisabled}
        >
          <ButtonText inactive={isProcessingDisabled}>Check</ButtonText>
        </Button>
        <RecognisedContent>
          {processedData.length ? (
            processedData.map(label => (
              <Info key={label.name}>
                - There's {label.name}, with {label.confidence}% confidence
              </Info>
            ))
          ) : (
            <Info>Not sure yet!</Info>
          )}
        </RecognisedContent>
      </Container>
    );
  }
}
