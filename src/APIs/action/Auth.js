import Axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constant/Auth";

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
  try {
    const { data } = await Axios.post('https://drust-daam.herokuapp.com/api/signin', { email, password })
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    await SecureStore.setItemAsync('userInfo', JSON.stringify(data) );
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

export { signin };