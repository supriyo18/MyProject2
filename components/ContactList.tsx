import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const ContactList = () => {
    const contactList = [
        {
            userId: '001',
            userName: 'John Doe',
            userAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            whatsAppStatus: 'Hey there! I am using WhatsApp.'
        },
        {
            userId: '002',
            userName: 'Jane Smith',
            userAvatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            whatsAppStatus: 'Available'
        },
        {
            userId: '003',
            userName: 'Mike Johnson',
            userAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
            whatsAppStatus: 'At work'
        },
        {
            userId: '004',
            userName: 'Emily Davis',
            userAvatar: 'https://randomuser.me/api/portraits/women/4.jpg',
            whatsAppStatus: 'Busy'
        },
        {
            userId: '005',
            userName: 'Chris Lee',
            userAvatar: 'https://randomuser.me/api/portraits/men/5.jpg',
            whatsAppStatus: 'Can’t talk, WhatsApp only'
        },
        {
            userId: '006',
            userName: 'Anna Wilson',
            userAvatar: 'https://randomuser.me/api/portraits/women/6.jpg',
            whatsAppStatus: 'Hey there! I am using WhatsApp.'
        },
        {
            userId: '007',
            userName: 'David Martinez',
            userAvatar: 'https://randomuser.me/api/portraits/men/7.jpg',
            whatsAppStatus: 'Available'
        },
        {
            userId: '008',
            userName: 'Sophia Garcia',
            userAvatar: 'https://randomuser.me/api/portraits/women/8.jpg',
            whatsAppStatus: 'At the gym'
        },
        {
            userId: '009',
            userName: 'James Brown',
            userAvatar: 'https://randomuser.me/api/portraits/men/9.jpg',
            whatsAppStatus: 'Sleeping'
        },
        {
            userId: '010',
            userName: 'Mia Martinez',
            userAvatar: 'https://randomuser.me/api/portraits/women/10.jpg',
            whatsAppStatus: 'In a meeting'
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView>
                {contactList.map(({ userId, userName, userAvatar, whatsAppStatus }) => (
                    <View key={userId} style={styles.userCard}>
                        <Image
                            source={{ uri: userAvatar }}
                            style={styles.userImage}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{userName}</Text>
                            <Text style={styles.userStatus}>{whatsAppStatus}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

export default ContactList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333'
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
        elevation: 3
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 15
    },
    userInfo: {
        flex: 1
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    userStatus: {
        fontSize: 14,
        color: '#666',
        marginTop: 4
    }
});
