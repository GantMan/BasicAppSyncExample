import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  LayoutAnimation
} from 'react-native'

export default class ListItems extends Component {

  listItems = () => {
    // window.alert(this.props.allItems)
    LayoutAnimation.spring()
    return this.props.allItems && this.props.allItems.map(item => <Text key={item.id}>{item.name}</Text>)
  }

  render() {
    return (
        <View>
          { this.listItems() }
        </View>
    )
  }
}
