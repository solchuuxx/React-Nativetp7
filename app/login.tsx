import { View, Text, TextInput } from 'react-native'
import { Button, Input } from "native-base";
import React from 'react'

export default function login() {
  return (
    <View>
      <Text>login</Text>
      <Input mx="3" placeholder="Username" w="100%" />
      <Input mx="3" placeholder="Password" w="100%" />
    </View>
  )
}