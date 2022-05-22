import React from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import { presets } from './text-preset';

const Text = ({children,style,preset='default'}) => {
    const styleText = StyleSheet.compose(style,presets[preset]);
    return (
        <RNText style={styleText}>{children}</RNText>
    );
}

const styles = StyleSheet.create({})

export default Text;
