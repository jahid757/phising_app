// import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Pressable
} from "react-native";
import safeView from "../components/safe-view";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const Login = ({navigation}) => {
  const [changeBorder, setChangeBorder] = useState(false);
  const [isSelected, setSelection] = useState(false);
  // setInterval(() => {
  //     setChangeBorder(!changeBorder);
  // },1200)
//   const navigation = useNavigation();
  return (
    <SafeAreaView style={[safeView.android, styles.container]}>
      <Image
        style={[
          styles.logo,
          { borderColor: changeBorder ? colors.red : colors.green },
        ]}
        source={require("../../assets/images/logo.jpg")}
      />
      
      <Text preset="h1" style={styles.text}>
        Admin Login
      </Text>
      <TextInput
      secureTextEntry={true}
        placeholderTextColor="#a2adb5"
        style={styles.input}
        placeholder="Password"
      />
      <View style={styles.button}>
      <Pressable
        style={styles.loginButton}
        onPress={() => console.log("Login api call")}
      >
        <Text
          style={{
            textAlign: "center",
            color: colors.white,
            fontWeight: "bold",
          }}
        >
          Submit
        </Text>
      </Pressable>
      <Pressable
        style={[styles.loginButton, { backgroundColor: colors.darkRed ,marginStart:spacing[3]}]}
        onPress={() => navigation.navigate("Register")}
      >
        <Text
          style={{
            textAlign: "center",
            color: colors.white,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </Pressable>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent:'space-evenly'
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1.5,
  },
  input: {
    width: 300,
    color: colors.white,
    margin: spacing[2],
    borderWidth: 1.5,
    borderColor: colors.red,
    padding: 10,
    borderRadius: 5,
  },
  loginButton: {
    width: 142,
    backgroundColor: colors.darkGreen,
    marginTop: spacing[3],
    padding: spacing[3],
    borderRadius: spacing[2],
  },
});

export default Login;
