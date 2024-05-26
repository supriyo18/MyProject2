import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
    return (
        <View >
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text>Pink</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 28
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#fc5603'
    },
    cardTwo: {
        backgroundColor: '#03fca1'
    },
    cardThree: {
        backgroundColor: '#5b66e3'
    },
    cardFour: {
        backgroundColor: '#ed66c5'
    }
})