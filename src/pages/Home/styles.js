import styled from 'styled-components/native';

const primaryColor = '#dd11ea';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #000;
`;

export const Title = styled.Text`
  font-size: 54px;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${primaryColor};
  text-align: center;
`;

export const Form = styled.View`
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const FormInput = styled.TextInput`
  border: 1px solid black;
  flex: 1;
  border-radius: 4px;
  background: #fff;
  padding: 10px;
  font-size: 20px;
`;

export const TextButton = styled.Text`
  color: #000;
  font-weight: bold;
`;

export const List = styled.FlatList``;

export const Pagination = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonNext = styled.TouchableOpacity``;

export const ButtonPrev = styled.TouchableOpacity``;
