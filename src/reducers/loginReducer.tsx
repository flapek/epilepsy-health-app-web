import action from "../actions/action";
import { loginUser } from "../actions/actionsNames";

const loginData = {
  email: "email@email.com",
  password: "password"
}

export default function loginReducer(state: boolean = false, action: action) {
    switch (action.type) {
      case loginUser:
        if (action.payload.email === loginData.email && action.payload.password === loginData.password)
          return !state;
        else 
          return state;
      default:
        return state
    }
  }