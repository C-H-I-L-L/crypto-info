import React, { Component } from 'react';
import ChatListComponent from '../chatlist/chatList';

const firebase = require('firebase');

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: []
    };
  }
  render() {
    return (
      <>
        <div>hello from dashboard</div>
        <ChatListComponent
          history={this.props.history}
          userEmail={this.state.email}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          selectedChatIndex={this.state.selectedChat}
          newChatBtnFn={this.newChatBtnClicked}
        ></ChatListComponent>
      </>
    );
  }

  selectChat = chatIndex => {
    console.log('selected a chat', chatIndex);
  };

  newChatBtnClicked = () => {
    this.setState({ newChatFormVisible: true, selectedChat: null });
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async _usr => {
      if (!_usr) this.props.history.push('/login');
      else {
        await firebase
          .firestore()
          .collection('chats')
          .where('users', 'array-contains', _usr.email)
          .onSnapshot(async res => {
            const chats = res.docs.map(_doc => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats
            });
          });
      }
    });
    console.log(this.state);
  };
}
