// @flow
import styled from "styled-components/native";

const ORANGE = "rgb(255, 122, 0)";
const DARK_GREY = "rgb(51, 73, 91)";
const LIGHT_GREY = "rgb(224, 228, 230)";
const WHITE = "rgb(255, 255, 255)";

export const Container = styled.ScrollView`
  padding-top: 50;
  padding-horizontal: 15;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 8;
  background-color: ${({ disabled }) => (disabled ? LIGHT_GREY : ORANGE)};
  width: 200;
  height: 40;
  align-self: center;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonText = styled.Text`
  color: ${({ inactive }) => (inactive ? DARK_GREY : WHITE)};
  font-size: 16;
`;

export const Title = styled.Text`
  color: ${ORANGE};
  font-size: 30;
  margin-vertical: 30;
`;
export const SubTitle = styled.Text`
  color: ${ORANGE};
  font-size: 20;
  margin-vertical: 30;
`;
export const Info = styled.Text`
  font-size: 15;
  color: ${DARK_GREY};
`;

export const Photo = styled.Image`
  width: 100%;
  max-height: 300;
  height: 300;
  margin-top: 40;
`;
export const RecognisedContent = styled.View`
  margin-top: 30;
`;
