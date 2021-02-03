import { createContext } from "react";

const authContext = createContext({
    useState: {
    authenticated: false,
    admin: false,
    userEmail: '',
    logAuth: (key, val) => {
        this.setState({
            [key]: val
        })
    }
    }
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;