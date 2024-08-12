import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native-paper';

const Home = () => {
  const value = [
    {
      id: 1,
      title: 'value 1',
    },
    {
      id: 2,
      title: 'value 2',
    },
    {
      id: 3,
      title: 'value 3',
    },
    {
      id: 4,
      title: 'value 4',
    },
  ];

  const [text, setText] = useState('');

  return (
    <View style={styles.continer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          Total List
        </Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
          {'0'}
        </Text>
      </View>

      <FlatList
        data={value}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                borderRadius: 10,
                backgroundColor: 'lightgrey',
                margin: 10,
                padding: 10,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity>
                  <MaterialIcons name="check-box-outline-blank" size={20} />
                </TouchableOpacity>
                <Text>{item.title}</Text>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="delete" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <TextInput
          label={'Enter the value'}
          value={text}
          onChangeText={text => setText(text)}
          style={{
            borderRadius: 5,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'black',
            width: '80%',
          }}
        />
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            backgroundColor: 'blue',
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', textAlign: 'center', marginTop: 20}}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
