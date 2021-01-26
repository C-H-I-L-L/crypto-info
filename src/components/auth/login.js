// import React, { Component } from 'react';
// import axios from 'axios';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//       errorText: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//       errorText: '',
//     });
//   };

//   handleSubmit = (event) => {
//     axios
//       .post(
//         'https://api.devcamp.space/sessions',
//         {
//           client: {
//             email: this.state.email,
//             password: this.state.password,
//           },
//         },
//         { withCredentials: true }
//       )
//       .then((response) => {
//         if (response.data.status === 'created') {
//           this.props.history.push('/')
//           this.props.handleSuccessfulAuth();
//         } else {
//           this.setState({
//             errorText: 'Wrong email or password',
//           });
//           this.props.handleUnsuccessfulAuth();
//         }
//       })
//       .catch((error) => {
//         this.setState({
//           errorText: 'An error occurred',
//         });
//         this.props.handleUnsuccessfulAuth();
//       });

//     event.preventDefault();
//   };

//   render() {
//     return (
//       <div className='login-container'>
//         <div className='login-box'>
//           <h1>~LOGIN~</h1>

//           <div>{this.state.errorText}</div>

//           <form className='login-form' onSubmit={this.handleSubmit}>
//             <input
//               type='email'
//               name='email'
//               placeholder='Your email'
//               value={this.state.email}
//               onChange={this.handleChange}
//             />

//             <input
//               type='password'
//               name='password'
//               placeholder='Your password'
//               value={this.state.password}
//               onChange={this.handleChange}
//             />

//             <button type='submit'>Login</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }


// new login stuff

import React from "react";
import { AuthConsumer } from "../../authContext";

const Login = () => (
  <AuthConsumer>
    {({ initiateLogin }) => (
      <button className="login-button" onClick={initiateLogin}>
        Login
      </button>
    )}
  </AuthConsumer>
);

export default Login;