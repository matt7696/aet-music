import { StyleSheet, View, FlatList } from 'react-native'
import DiscoveryScreen from './Discovery_Screen'

const sampleData = [
  {
    artist: "sampleArtist",
    title: "sampleTitle",
    uri: "sampleUri"
  },
  {
    artist: "artist 2",
    title: "title 2",
    uri: "uri 2"
  },
]

export default function ScreenScroller() {

  return (
    <View style={styles.container}>
      <FlatList
        snapToAlignment='start'
        data={sampleData}
        renderItem={({ item }) => (
          <DiscoveryScreen artist={item.artist} title={item.title} uri={item.title}/>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100vh',
  }
})