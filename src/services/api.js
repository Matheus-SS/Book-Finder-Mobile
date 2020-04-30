import axios from 'axios';

const googleBooksApi = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

export default googleBooksApi;
