import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function AppBar() {
    return (
        <View style={styles.appBar}>
            <Text>Keeper List ䷳ </Text>
            <Text>Create a list and never forget 🙈.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    appBar: {
        paddingTop: 60,
        paddingLeft: 10,
    }
})

export default AppBar