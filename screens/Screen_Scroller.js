import { StyleSheet, View, FlatList, Dimensions } from 'react-native'
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
  {
    artist: "artist 2",
    title: "title 2",
    uri: "uri 2"
  },
  {
    artist: "artist 2",
    title: "title 2",
    uri: "uri 2"
  },
  {
    artist: "artist 2",
    title: "title 2",
    uri: "uri 2"
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
        snapToInterval={Dimensions.get("window").height}
        decelerationRate='fast'
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
    height: '200vh',
  }
})