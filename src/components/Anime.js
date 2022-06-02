import React, { Component } from "react";
import { TouchableOpacity, Text, TextInput } from "react-native";

class Anime extends Component {
  state = {
    TextInputValueHolder: "",
    button: ""
  };
  render() {
    return (
      <>
        <TextInput
          style={{
            height: 150,
            borderStyle: "solid",
            borderWidth: 2,
            fontSize: 30
          }}
          placeholder="New Post"
          onChangeText={TextInputValueHolder =>
            this.setState({ TextInputValueHolder })
          }
        />
        <TouchableOpacity
          onPress={this.handlePress}
          style={{ background: "red", marginLeft: 0, width: 80, height: 40 }}
        >
          <Text>{this.state.button}</Text>
        </TouchableOpacity>
      </>
    );
  }
  handlePress = () => {
    const value = this.state.TextInputValueHolder;
    console.log("value", value);

    this.setState({ button: value });
  };
}

export default Anime;