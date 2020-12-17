import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "./AppText";
import * as Progress from "react-native-progress";

function UploadScreen({ progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Progress.Bar progress={progress} color="dodgerblue" width={200} />
        {/* <AppText>{progress * 100}%</AppText> */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default UploadScreen;
