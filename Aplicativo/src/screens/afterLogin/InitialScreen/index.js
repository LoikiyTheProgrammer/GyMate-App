import React from 'react';
import styles from '../../../constants/afterLogin/styleInitialScreen';
import { SafeAreaView, View, Text } from 'react-native';

export default function InitialScreen() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hello</Text>
            </View>
        </SafeAreaView>
    );
}