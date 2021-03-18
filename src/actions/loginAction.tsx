import action from "./action";
import { loginUser } from "./actionsNames";

export function loginAction(email: String, password: String): action {
    return ({
        type: loginUser,
        payload: {
            email,
            password,
        },
    });
}