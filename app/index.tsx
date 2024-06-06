import { router } from "expo-router";
import { View, Text } from "react-native";
import { HStack, Box, Image, Button } from 'native-base'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image />
      <Text>Ingresa o registrate en la aplicación:</Text>
      <Box style={{ flex: 1, alignItems: "center", width: "80%" }}>
        <HStack>
          <Button onPress={() => router.push("/login")}>
            LOGIN
          </Button>
          <Button onPress={() => router.push("/register")}>
              REGISTER
          </Button>
          <Button onPress={() => router.push("/task")}>
              task
          </Button>
        </HStack>
      </Box>
    </View>
  );
}
