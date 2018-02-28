import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  style?: {};
}

export default class Container extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.containerInner}>
          {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  containerInner: {
    width: 1024
  }
})