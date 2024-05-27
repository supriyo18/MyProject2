import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.card, styles.cardFour]}>
                        <Text>Yellow</Text>
                    </View>
                    <View style={[styles.card, styles.cardFive]}>
                        <Text>🤣</Text>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 28,
        backgroundColor: '#777E8B'
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#eb212b',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#1c1102'
    },
    cardTwo: {
        backgroundColor: '#acf2e4',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardThree: {
        backgroundColor: '#bfe86d',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardFour: {
        backgroundColor: '#ccc7a3',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardFive: {
        backgroundColor: '#eb9321',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        }
    }
})