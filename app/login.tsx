import { View, StyleSheet } from 'react-native'
import { Input, Box } from "native-base";
import { router } from "expo-router";
import React from 'react'
import { Card, Button, Icon } from '@rneui/base';

export default function login() {
  return (
    <View>
      <Card>
      <Card.Title>Log In</Card.Title>
      <Card.Divider />
          <Card.Image
            style={{ padding: 0, width: 100,
              height: 100, marginLeft:105}}
            source={{
              uri:
                'https://th.bing.com/th/id/R.54cedafef938b477cee57bb5adc1fb31?rik=i3mLDOlZJNmIow&pid=ImgRaw&r=0',
            }}
          />
        <Box style={{padding:10}}>
        <Input mx="3" placeholder="Username" w="90%" style={{paddingBottom:20}} />
        <Input mx="3" placeholder="Password" w="90%" style={{paddingBottom:20}} /> 
        </Box>
        <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 5,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Ingresar"
            onPress={() => router.push("/task")}
          />

      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
