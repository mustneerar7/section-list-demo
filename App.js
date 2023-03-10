import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';


const App = () => {

  // State containing data.
  const[data, setData] = useState(
    [
      {
        title: 'Starters',
        data: [
          {id: 0, title: "Soup"},
          {id: 1, title: "Salad"},
        ],
      },
      {
        title: 'Desi Food',
        data: [
          {id: 0, title: "Karhai"},
          {id: 1, title: "Biryani"},
          {id: 2, title: "Pulao"},
        ],
      },
      {
        title: 'Fast Food',
        data: [
          {id: 0, title: "Burger"},
          {id: 0, title: "Pizza"},
          {id: 0, title: "Shwarma"},
        ],
      },
    ])

  return(
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => 

        <MenuItem item={item}/>
      }
      renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  )
}

const MenuItem = ({item}) => {

  // State that manages the selected status of items.
  const [isSelected, setSelected] = useState(false)

  return(
    <TouchableOpacity 
          onPress={()=> {isSelected ? setSelected(false) : setSelected(true)}}>

          <View style={{
            backgroundColor : isSelected ? '#F56476' : '#373F51',
            padding: 20,
            marginVertical: 8,
            borderRadius: 8
          }}>
            <Text style={{
            fontSize: 24,
            color: isSelected ? "black" : "white"
          }}>
            {item.title}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:16,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    marginVertical: 8,
    borderRadius: 8
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    margin:16
  },
});

export default App;