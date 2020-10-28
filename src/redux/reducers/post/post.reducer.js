import { postActionsTypes } from "../../actions-types";

export default (state, { type, payload }) => {
  switch (type) {
    case postActionsTypes.GET_POST_START:
      return {
        ...state,
        fetchPosts: {
          ...state.fetchPosts,
          message: "",
          loading: true,
          errors: {}
        }
      };
    case postActionsTypes.GET_POST_END:
      return {
        ...state,
        fetchPosts: {
          ...state.fetchPosts,
          loading: false
        }
      };
    case postActionsTypes.GET_POST_SUCCESS:
      return {
        ...state,
        listOfPost: payload?.topic_list?.topics,
        listOfUsers: payload?.users,
        fetchPosts: {
          loading: false,
          message: payload.message,
          errors: {}
        }
      };
    case postActionsTypes.GET_POST_FAILURE:
      return {
        ...state,
        fetchPosts: {
          loading: false,
          message: "",
          errors: payload.errors
        }
      };
    default:
      return null;
  }
};
