import { RegisterRequest } from "../types/registerTypes";
import { User } from "../types/registerTypes";

export const loginResponseFrom = (user: User): RegisterRequest => {
    const { password, ...rest } = user;
    return {
        ...rest,
        token: 'mock_token'
    };
};