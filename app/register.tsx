import { View, Text, Image } from 'react-native'
import { Input, Box, FormControl, Stack, WarningOutlineIcon, Icon, Button } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Card } from '@rneui/base';
import React from 'react'

export default function register() {
  return (
    <Box alignItems="center" justifyContent="center">
    <Box>
        <Image />
    </Box>
    <Box>
      <Card>
      <Card.Title>Register</Card.Title>
      <Card.Divider />
        <FormControl isRequired>
          <Stack mx="3">
                <Input w="100%" 
              InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Username" />
                <FormControl.Label>Password</FormControl.Label>
                <FormControl.HelperText>
                De 5 a 10 caracteres
                </FormControl.HelperText>
                <Input type="password" defaultValue="" placeholder="password" w="100%" />
                <FormControl.Label>Repeat Password</FormControl.Label>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Aaaa
                </FormControl.ErrorMessage>
                <Input type="password" defaultValue="" placeholder="password" w="100%" />
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                </FormControl.ErrorMessage>
                <Button onPress={() => router.push("/login")}>Send</Button>
              </Stack>
        </FormControl>
      </Card>
    </Box>
    </Box>
  )
}
