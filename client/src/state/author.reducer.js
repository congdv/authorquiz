import { AuthorConstants } from '../constants/';

export const author = (state = {}, action) => {
  switch(action.type) {
    case AuthorConstants.SET_AUTHORS:
      return {
        authors: action.data
      };
    default: 
      return state;
  }
}
