import {FETCH_MEDIA} from '../actions';

import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_MEDIA:
      return action.payload.data;
    default:
    return state;
  }
}
