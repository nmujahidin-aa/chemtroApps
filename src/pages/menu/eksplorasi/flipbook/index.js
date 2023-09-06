import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const Flipbook = () => {

  return (
    <View style={styles.container}>
      <WebView style={styles.webview}
        source={{ uri: 'https://online.fliphtml5.com/blvai/glnh/' }}
        originWhitelist={['*']}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  webview:{
    flex: 1,
  },
});

export default Flipbook;