import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import BooksReducer from './reducer_books';
import PageReducer from './reducer_currentPage';
import ReviewsReducer from './reducer_reviews';
import ToursReducer from './reducer_tours';
import PostsReducer from './reducer_posts';
import CategoriesReducer from './reducer_categories';
import CurrentCategoryReducer from './reducer_currentCategory';
import ArtReducer from './reducer_art';
import ActiveArtReducer from './reducer_activeArt';


const rootReducer = combineReducers({
  form: formReducer,
  books: BooksReducer,
  page: PageReducer,
  reviews: ReviewsReducer,
  tours: ToursReducer,
  posts: PostsReducer,
  categories: CategoriesReducer,
  currentCategory: CurrentCategoryReducer,
  art: ArtReducer,
  activeArt: ActiveArtReducer
});

export default rootReducer;
