import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
        </View>
        {
          [3, 1, 2].map((item, index) => {
            return <View key={index} style={[styles.mainCard, item !== 1 && { marginLeft: 50,backgroundColor:"#2f4f4f" }]}>
              <Image source={{ uri: "https://images.pexels.com/photos/15511010/pexels-photo-15511010/free-photo-of-man-in-batman-costume-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }} style={styles.mainCardImage} resizeMode='cover' />
              <Text style={styles.mainCardTitle}>Ayandip</Text>
              <View style={styles.mainCardRankContainer}>
                <Text style={styles.mainCardRankContainerText}>{item}</Text>
              </View>
            </View>
          })
        }
      </View>


      <View>
        <FlatList data={listData} renderItem={({ item, index }) => {
          return <View style={styles.card}>
            <View style={styles.cardDataContainer}>
              <View><Text style={styles.cardIndex}>{index + 1}</Text></View>
              <Image source={{ uri: item?.imageUrl  }} style={styles.cardImage} resizeMode='cover' />
              <View><Text style={styles.cardTitle}>{item?.name}</Text></View>
            </View>
            <View style={styles.cardRankContainer}>
              <Text style={styles.cardRankTitle}>{item?.score}</Text>
            </View>
          </View>
        }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272c35',
  },
  topContainer: {
    backgroundColor: '#1A1F25',
    paddingTop: 40,
    padding: 20,
    paddingBottom: 30,
    borderBottomRightRadius: 20,
    gap: 20,
    borderBottomLeftRadius: 20,
  },
  headerTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  mainCard: {
    backgroundColor: '#708090',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  mainCardImage: {
    width: 100,
    borderRadius: 7,
    height: 50,
  },
  mainCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center'
  },
  mainCardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: "600",
  },
  mainCardRankContainer: {
    backgroundColor: "gold",
    borderRadius: 30,
    height: 30,
    position: 'absolute',
    bottom: -17,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainCardRankContainerText: {
    color: "black",
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardIndex: {
    color: 'white',
  },
  cardImage: {
    width: 50,
    marginLeft: 10,
    height: 50,
    borderRadius: 50,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: "600",
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: 'center',
    gap: 10,
  },
  cardRankContainer: {},
  cardRankTitle: {
    color: "gold",
  }
})

export default index

const listData = [
  { score: "36634.81", name: "Ayandip", imageUrl: "https://images.pexels.com/photos/15511010/pexels-photo-15511010/free-photo-of-man-in-batman-costume-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "87342.26", name: "Sayani", imageUrl: "https://images.pexels.com/photos/28245752/pexels-photo-28245752/free-photo-of-superman-chinatown-san-francisco.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "43567.45", name: "Rohan", imageUrl: "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "92612.31", name: "Ananya", imageUrl: "https://images.pexels.com/photos/8773762/pexels-photo-8773762.jpeg" },
  { score: "76293.55", name: "Nihal", imageUrl: "https://images.pexels.com/photos/3322106/pexels-photo-3322106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "56842.66", name: "Meera", imageUrl: "https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "68903.44", name: "Arjun", imageUrl: "https://images.pexels.com/photos/7764529/pexels-photo-7764529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "47411.09", name: "Riya", imageUrl: "https://images.pexels.com/photos/8773819/pexels-photo-8773819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "39562.23", name: "Sahil", imageUrl: "https://images.pexels.com/photos/20515842/pexels-photo-20515842/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "80514.33", name: "Tanya", imageUrl: "https://images.pexels.com/photos/3680088/pexels-photo-3680088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "67942.29", name: "Rajesh", imageUrl: "https://images.pexels.com/photos/7764473/pexels-photo-7764473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "45612.87", name: "Divya", imageUrl: "https://images.pexels.com/photos/5324306/pexels-photo-5324306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "62144.55", name: "Vikram", imageUrl: "https://images.pexels.com/photos/2714618/pexels-photo-2714618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "73219.74", name: "Smita", imageUrl: "https://images.pexels.com/photos/6416110/pexels-photo-6416110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "89374.18", name: "Aniket", imageUrl: "https://images.pexels.com/photos/4971156/pexels-photo-4971156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "94321.09", name: "Poonam", imageUrl: "https://images.pexels.com/photos/28894971/pexels-photo-28894971/free-photo-of-ethnic-hmong-family-in-lush-rice-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "61238.48", name: "Dheeraj", imageUrl: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "83421.56", name: "Shreya", imageUrl: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "79324.71", name: "Kunal", imageUrl: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "48267.32", name: "Arpita", imageUrl: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "51276.23", name: "Sonia", imageUrl: "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "79236.19", name: "Amit", imageUrl: "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "61231.34", name: "Harsha", imageUrl: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "92314.15", name: "Kavya", imageUrl: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "75411.78", name: "Rohit", imageUrl: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "44217.45", name: "Maya", imageUrl: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "65123.99", name: "Sneha", imageUrl: "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "89376.22", name: "Vivek", imageUrl: "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "57941.17", name: "Nisha", imageUrl: "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "74231.56", name: "Yash", imageUrl: "https://images.pexels.com/photos/572779/pexels-photo-572779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "66542.08", name: "Aruna", imageUrl: "https://images.pexels.com/photos/17312218/pexels-photo-17312218/free-photo-of-girl-with-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "71432.78", name: "Rakesh", imageUrl: "https://images.pexels.com/photos/17312229/pexels-photo-17312229/free-photo-of-architecture-in-the-wild.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "82361.04", name: "Dolly", imageUrl: "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "71243.11", name: "Mohan", imageUrl: "https://images.pexels.com/photos/6185245/pexels-photo-6185245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "88176.23", name: "Sunita", imageUrl: "https://images.pexels.com/photos/10336814/pexels-photo-10336814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "53647.92", name: "Anil", imageUrl: "https://images.pexels.com/photos/12265961/pexels-photo-12265961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { score: "62134.55", name: "Prakash", imageUrl: "https://images.pexels.com/photos/701771/pexels-photo-701771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
]