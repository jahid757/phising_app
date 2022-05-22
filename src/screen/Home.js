import React from 'react';
import {View, StyleSheet,SafeAreaView} from 'react-native';
import safeView from '../components/safe-view';
import Text from './../components/text/text';

const Home = () => {
    return (
        <SafeAreaView style={safeView.android}>
            <Text>Home</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Home;
