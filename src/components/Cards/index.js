import React from 'react';
import {Text, Image, Linking, TouchableOpacity} from 'react-native';
import noImage from '../../assets/no-image.jpg';

import {
  Card,
  CardText,
  CardTop,
  CardTitle,
  CardInfo,
  LabelInfo,
} from './styles';

export default function Cards({book}) {
  function loadInBrowser() {
    Linking.openURL(book.volumeInfo.previewLink).catch((err) =>
      console.error("Couldn't load page", err),
    );
  }

  return (
    <Card>
      <TouchableOpacity onPress={loadInBrowser}>
        <CardTop>
          {book.volumeInfo.imageLinks ? (
            <Image
              resizeMode="stretch"
              source={{
                uri: book.volumeInfo.imageLinks.thumbnail,
              }}
              style={{width: '100%', height: 200}}
            />
          ) : (
            <Image
              resizeMode="stretch"
              source={noImage}
              style={{width: '100%', height: 200}}
            />
          )}
        </CardTop>

        <CardText>
          <CardTitle>{book.volumeInfo.title}</CardTitle>

          <CardInfo>
            <LabelInfo>Author: </LabelInfo>
            <Text
              style={{
                fontSize: 16,
                flex: 1,
              }}
              numberOfLines={1}>
              {book.volumeInfo.authors
                ? book.volumeInfo.authors.map((author) => author)
                : 'None'}
            </Text>
          </CardInfo>

          <CardInfo>
            <LabelInfo>Publisher:</LabelInfo>
            <Text
              style={{
                fontSize: 16,
                flex: 1,
              }}
              numberOfLines={1}>
              {book.volumeInfo.publisher ? book.volumeInfo.publisher : 'None'}
            </Text>
          </CardInfo>

          <CardInfo>
            <LabelInfo>Published:</LabelInfo>
            <Text
              style={{
                fontSize: 16,
                flex: 1,
              }}
              numberOfLines={1}>
              {book.volumeInfo.publishedDate
                ? book.volumeInfo.publishedDate
                : 'None'}
            </Text>
          </CardInfo>
        </CardText>
      </TouchableOpacity>
    </Card>
  );
}
