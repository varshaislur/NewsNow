import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewComponent = ({ route }) => {
  return (
    <WebView source={{ uri: route.params.url }} />
  );
};

export default WebViewComponent;
