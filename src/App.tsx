import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import Container from './components/Container';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text style={styles.header}>January 2018</Text>
        <Text style={styles.header}>February 2018</Text>
        <Text style={styles.header}>March 2018</Text>
        <Text style={styles.header}>January 2018</Text>
        <Text style={styles.header}>January 2018</Text>
        <Text style={styles.header}>January 2018</Text>
      </Container>
    );
  }
}

const headerFontSize = 40;
const styles = StyleSheet.create({
  header: {
    fontSize: headerFontSize,
    marginTop: headerFontSize,
    fontWeight: '200'
  }
});