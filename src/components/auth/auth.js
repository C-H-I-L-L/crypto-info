import React from 'react';
import { AuthProvider } from '../../context';

class AuthContext extends React.Component {
    render() {
        return (
            <AuthProvider>
                {this.props.children}
            </AuthProvider>
        )
}
}



export default AuthContext;