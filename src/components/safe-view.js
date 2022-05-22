import { StatusBar } from "expo-status-bar";
import { StyleSheet,Platform } from "react-native";
import { spacing } from "../theme/spacing";
export default StyleSheet.create({
    android:{
        paddingTop:Platform.OS === 'android' ? spacing[9] : 0,
    }
});