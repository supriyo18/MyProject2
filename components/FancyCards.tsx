import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCards = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Great Cricketer</Text>
            <View style={[styles.card, styles.elevated]}>
                <Image source={{
                    uri: 'https://c.ndtvimg.com/2024-04/utqtdga8_virat-kohli-bcci_625x300_07_April_24.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605'
                }}
                    style={styles.styleCardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Virat Kohli</Text>
                    <Text style={styles.cardDescription}>Royal Challangers Bangaluru</Text>

                </View>
            </View>
        </View>
    )
}

export default FancyCards

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        margin: 2
    },
    container: {
        flex: 1,
        padding: 20,
        flexGrow: 1,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7B8788'
    },
    card: {
        width: 370,
        height: 310,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        padding: 10,
    },
    elevated: {
        elevation: 3,  // Add shadow for Android
        shadowColor: '#FFF',  // Add shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: '#ff0000'
    },
    styleCardImage: {
        width: 350,
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    cardBody: {
        marginTop: 10,
    },
    cardTitle: {
        color: '#f5b505',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardDescription: {
        color: '#f5b505',
        fontSize: 23,
        fontWeight: 'bold'
    }

})