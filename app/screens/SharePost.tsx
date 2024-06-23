// SharedLinkScreen.js

import React from "react";
import { View, Text } from "react-native";

const SharedLinkScreen = ({ route }: { route: any }) => {
  const { link } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Shared Link:</Text>
      <Text>{link}</Text>
      {/* You can render additional UI or process the shared link here */}
    </View>
  );
};

export default SharedLinkScreen;
