import styled from 'styled-components/native';

export const Card = styled.View`
  height: 350px;
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 10px 10px;
`;

export const CardTop = styled.View``;

export const CardText = styled.View`
  margin-top: 5px;
  padding: 5px;
`;

export const CardTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-weight: bold;
  text-align: center;
`;

export const CardInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
`;

export const LabelInfo = styled.Text`
  font-weight: bold;
  margin-right: 5px;
  font-size: 16px;
`;
