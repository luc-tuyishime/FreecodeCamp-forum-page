import { post as initialState } from '../../store/initialState';

import requestPost from './post.reducer';

export default (state = initialState, action) => {
  const getPostForum = requestPost(state, action);

  return getPostForum || state;
};
