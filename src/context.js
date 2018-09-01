import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          //payload is data that send along with action
          //id is payload in this case
          contact => contact.id !== action.payload
        )
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John",
        email: "dsf@qq.com",
        phone: "5555-55-55"
      },
      {
        id: 2,
        name: "Xia",
        email: "65459@qq.com",
        phone: "6555-55-55"
      },
      {
        id: 3,
        name: "Tao",
        email: "97895451@qq.com",
        phone: "7555-55-55"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
