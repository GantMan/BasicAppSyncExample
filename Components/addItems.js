import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default class AddItems extends Component {

  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState = () => ({
    text: ''
  })

  handleAdd = () => {
    const { text } = this.state;

    this.setState(this.getInitialState(), () => {
        this.props.onAdd({
          id: (new Date).getTime().toString(),
          itemName: text
        })
    })
  }

  render() {
    return (
      <View>
        <TextInput placeholder='Packing Item'

          blurOnSubmit
          clearTextOnFocus
          onSubmitEditing={this.handleAdd}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          returnKeyLabel='Add Item'
          returnKeyType='done'
        />
        <TouchableOpacity
          style={[{backgroundColor: 'green'}, styles.button]}
          onPress={this.handleAdd}>
          <Text>ADD ITEM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{backgroundColor: 'red'}, styles.button]}
          onPress={() => window.alert('CLEAR?')}>
          <Text>CLEAR ITEMS</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderRadius: 4,
    margin: 5,
    padding: 10
  }
})

