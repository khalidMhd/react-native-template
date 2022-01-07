import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Progress from 'react-native-progress'
const ProgressBar = () => {
    return (
        <View style={styles.container}>
            {/* <Progress.Bar progress={0.3} width={200} />
            <Progress.Pie progress={0.4} size={50} />
            <Progress.Circle size={30} indeterminate={true} /> */}
            <Progress.CircleSnail size={50} color={['red', 'green', 'blue']} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});

export default ProgressBar;