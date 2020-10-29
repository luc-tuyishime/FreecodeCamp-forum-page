import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import initialState from "../redux/store/initialState";
import apiMiddleware from "../middleware/apiMiddleware";

export { initialState };
export const middlewares = [thunk, apiMiddleware];
export const mockStore = configureMockStore(middlewares);
export const adminStore = mockStore({ ...initialState });

export default mockStore({ ...initialState });
