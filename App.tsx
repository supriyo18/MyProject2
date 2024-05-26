import { SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
const App = () => {
  const styles = StyleSheet.create({
    whiteText: {
      color: 'white',
      fontSize: 25
    },
    safeArea: {
      flex: 1, // Ensure SafeAreaView takes up the whole screen
    }
  })

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
      </ScrollView >
    </SafeAreaView>

  )
}

export default App