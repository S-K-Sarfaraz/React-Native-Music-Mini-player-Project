import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'

import {setupPlayer, addTrack} from '../musicPlayerServices'
import MusicPlayer from './screens/MusicPlayer'

export default function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup(){
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])

  if (!isPlayerReady) {
    <SafeAreaView>
      <ActivityIndicator/>
    </SafeAreaView>
  }
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})