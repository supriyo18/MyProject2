import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const ActionCards = () => {

    function openWebsite(website: string) {
        Linking.openURL(website);
    }

    function openWhatsApp() {
        const phoneNumber = '7439338919'; // Replace with your actual phone number
        const message = 'Hi there, I want to discuss with you.';
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        Linking.openURL(whatsappLink);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Blog Cards</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>JAVA 21</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://www.gcreddy.com/wp-content/uploads/2021/05/Java-Programming-Language-1.png'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText} numberOfLines={2}>
                        Oracle is proud to announce the general availability of JDK 21. This release is the 12th Feature Release delivered on time through the six-month release cadence. This level of predictability allows developers to easily manage their adoption of innovation thanks to a steady stream of expected improvements.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://blogs.oracle.com/java/post/the-arrival-of-java-21')}>
                        <Text style={styles.readMoreText}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openWhatsApp} style={styles.chatButton}>
                        <Text style={styles.chatText}>Chat with Us</Text>
                        <Image
                            source={{
                                uri: 'https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-icon-png-image_8704827.png'
                            }}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ActionCards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#01CBC6'
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
        marginHorizontal: 8,
        width: '100%',
    },
    elevatedCard: {
        elevation: 3, // For Android
        shadowColor: '#000', // For iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: '#E74292'
    },
    headerContainer: {
        padding: 10,
        backgroundColor: '#e0e0e0',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardImage: {
        width: '100%',
        height: 150,
    },
    bodyContainer: {
        padding: 10,
    },
    bodyText: {
        fontSize: 14,
        color: '#333',
    },
    footerContainer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#192A56',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    readMoreText: {
        color: '#2B2B52',
        fontWeight: 'bold',
    },
    chatButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    chatText: {
        color: '#2B2B52',
        fontWeight: 'bold',
        marginRight: 5,
    },
    icon: {
        width: 24,
        height: 24,
    },
});
