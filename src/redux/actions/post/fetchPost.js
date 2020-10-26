import { postActionsTypes } from '../../actions-types';
import { apiAction } from '../../../helpers';

export default () => (dispatch) => dispatch(apiAction({
  method: 'get',
  url: '/latest',
  onStart: postActionsTypes.GET_POST_START,
  onEnd: postActionsTypes.GET_POST_END,
  onSuccess: postActionsTypes.GET_POST_SUCCESS,
  onFailure: postActionsTypes.GET_POST_FAILURE
}));
