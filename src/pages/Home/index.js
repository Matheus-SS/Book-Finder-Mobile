import React, {useState, useEffect, useRef} from 'react';
import googleBooksApi from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cards from '../../components/Cards';
import Animation from '../../components/Animation';
import {StatusBar} from 'react-native';

import {
  Container,
  Title,
  Form,
  FormInput,
  List,
  Pagination,
  ButtonPrev,
  ButtonNext,
} from './styles';

import {View, Text, ActivityIndicator} from 'react-native';

export default function Home() {
  const flatList = useRef(null);

  const [bookName, setBookName] = useState('');
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // startIndex is a config from google books api to control pagination
  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (books !== null) {
      loadBooks();
    }
  }, [bookName, startIndex]);

  async function loadBooks() {
    setLoading(true);
    try {
      const response = await googleBooksApi(
        `/volumes?q=${bookName}&startIndex=${startIndex}&maxResults=8`,
      );
      setBooks(response.data.items);
      setRefresh(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleNext() {
    setPage(page + 1);
    setStartIndex(startIndex + 7);
    flatList.current.scrollToOffset({animated: false, offset: 0});
  }

  function handlePrev() {
    if (page === 1) {
      return;
    }

    setPage(page - 1);
    setStartIndex(startIndex - 7);
    flatList.current.scrollToOffset({animated: false, offset: 0});
  }

  function handleRefresh() {
    setRefresh(true);
    loadBooks();
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Container>
        <Title>Book Finder</Title>
        <Form>
          <View style={{flexDirection: 'row'}}>
            <FormInput
              placeholder="type to search authors, books ..."
              onChangeText={setBookName}
              value={bookName}
            />
          </View>
        </Form>

        {bookName.length === 0 && <Animation />}

        {loading ? (
          <ActivityIndicator size="large" color="#dd11ea" />
        ) : (
          <>
            {bookName.length !== 0 && (
              <View style={{flex: 1}}>
                <List
                  data={books}
                  renderItem={({item}) => <Cards book={item} />}
                  keyExtractor={(item) => String(item.id)}
                  numColumns={2}
                  refreshing={refresh}
                  onRefresh={handleRefresh}
                  ref={flatList}
                  ListFooterComponent={
                    <Pagination>
                      <ButtonPrev onPress={handlePrev}>
                        <Icon name="arrow-back" color="#dd11ea" size={30} />
                      </ButtonPrev>

                      <Text
                        style={{
                          color: '#dd11ea',
                          fontSize: 30,
                          marginRight: 10,
                          marginLeft: 10,
                        }}>
                        {page}
                      </Text>
                      <ButtonNext onPress={handleNext}>
                        <Icon name="arrow-forward" color="#dd11ea" size={30} />
                      </ButtonNext>
                    </Pagination>
                  }
                />
              </View>
            )}
          </>
        )}
      </Container>
    </>
  );
}
