import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, Text, View } from 'react-native';
import DrinkItem from '../../components/DrinkItem';
import data from '../../data/drinks.json';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  const [user, setuser] = useState(null);
  const renderItem = ({ item, index }) => {
    return <DrinkItem item={item} index={index} navigation={navigation} />;
  };
  const getUserData = async () => {
    let curUser = await AsyncStorage.getItem('curUser');
    curUser = JSON.parse(curUser);
    setuser(curUser);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        marginTop: StatusBar.currentHeight + 10,
      }}
    >
      <Text style={{ marginTop: 8, fontSize: 20,color:"darkolivegreen" , fontWeight:"bold", flexDirection: 'row',width:"100%",alignItems:'center', textAlign:'center' }}>{`Hello, ${
        user && user.name
      } !`}</Text>
      <View
        style={{
          backgroundColor: 'gray',
          padding: 8,
          borderRadius: 12,
          marginTop: 8,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', width:"100%", height: 40, backgroundColor:"beige", borderRadius:10, justifyContent:'center',marginBottom:5, }}>
         <Text
          style={{
            color: 'darkkhaki',
            fontWeight: 'bold',
            fontSize: 25,
           
           
          }}
        >
          ADIDAS IN YOUR FAMILY
        </Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', width:"100%",  backgroundColor:"beige", borderRadius:10, justifyContent:'center',marginBottom:1, }}>

        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
       
       
          <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 18 }}>
            SALE
          </Text>
          <Text
            style={{
              color: 'darkgoldenrod',
              fontWeight: 'bold',
              fontSize: 22,
            }}
          >
            {' 70% '}
          </Text>
          <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 18 }}>
            FOR NEWBIE
          </Text>
        </View>
      
        <Text
          style={{
            color: 'darkkhaki',
            fontWeight: 'bold',
            fontSize: 12,
            marginTop: 8,
          }}
        >
          USING THIS CODE NOW
        </Text>
        <Text
          style={{
            color: 'darkgoldenrod',
            fontWeight: 'bold',
            fontSize: 24,
          }}
        >
          NEW-70
        </Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Đồ uống HOT</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Có thể bạn sẽ thích</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
}
