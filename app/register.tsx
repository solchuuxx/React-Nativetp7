import { View, StyleSheet, ScrollView, Text } from 'react-native'
import { Input, Box, Button, Text as NBText } from 'native-base'
import { router } from "expo-router";
import { Card } from '@rneui/base';
import React from 'react'

export default function register() {
  return (
    <View>
      <Card>
        <Card.Title>Register</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0, width: 100, height: 100, marginLeft:105}}
          source={{
            uri:
              'https://th.bing.com/th/id/R.54cedafef938b477cee57bb5adc1fb31?rik=i3mLDOlZJNmIow&pid=ImgRaw&r=0',
          }}
        />
        <Box style={{padding:10}}>
          <Input mx="3" placeholder="Username" w="90%" style={{paddingBottom:20}} />
          <Input mx="3" placeholder="Password" w="90%" style={{paddingBottom:20}} /> 
          <Input mx="3" placeholder="Repeat Password" w="90%" style={{paddingBottom:20}} /> 
        </Box>
        <Button
          style={{
            borderRadius: 0,
            marginLeft: 5,
            marginRight: 0,
            marginBottom: 0,
          }}
          onPress={() => router.push("/login")}
        >
          <NBText
          style={{
            color:'#f3f3f3',
          }}
          >Send</NBText>
        </Button>

      </Card>

      <ScrollView style={styles.content}>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Contenido para el footer</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  content: {
    flex: 1,
  },
  footer: {
    width: '100%',
    backgroundColor: '#84B5F3',
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    padding: 20,
  },
  footerText: {
    color: '#000000',
  },
});
