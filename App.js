import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Platform,
  StyleSheet,
  StatusBar as status,
  SafeAreaView,
  View,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const [urlhiperfar] = useState("http://d4500d653bcc.sn.mynetname.net:8079/m");
  const [urlorto] = useState("http://orto.ddns.com.br:8079/m");
  const [load, setLoad] = useState(true);
  function carregar() {
    setLoad(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        incognito={true}
        style={styles.container1}
        source={{ uri: "http://orto.ddns.com.br:8079/m" }}
        onLoad={carregar}
      />

      {load && (
        <ActivityIndicator
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          size={40}
          color={"#0000ff"}
          
        />
          
        
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? status.currentHeight : 0,
  },
});
