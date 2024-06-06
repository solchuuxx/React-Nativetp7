import { View, Text, Image } from 'react-native'
import { Input, Box, FormControl, Stack, WarningOutlineIcon, Icon, Button } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons";
import React from 'react'

export default function register() {
  return (
    <Box alignItems="center" justifyContent="center">
    <Box>
        <Image />
    </Box>
    <Box>
      <Text>Register</Text>
      <FormControl isRequired>
      <Stack mx="4">
      <Input w={{base: "75%",md: "25%"}} 
    InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" defaultValue="" placeholder="password" />
            <FormControl.HelperText>
              Password
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              A
            </FormControl.ErrorMessage>
            <Input type="password" defaultValue="" placeholder="password" />
            <FormControl.HelperText>
              M6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
              6.
            </FormControl.ErrorMessage>
            <Button onPress={() => console.log("hello world")}>Send</Button>
          </Stack>
      </FormControl>
    </Box>
    </Box>
  )
}