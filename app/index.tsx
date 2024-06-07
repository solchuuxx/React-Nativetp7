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
      <Box>
      <Image source={{
      uri: "https://bnextmedia.s3.hicloud.net.tw/image/album/2018-10/img-1539918205-30393@900.jpg"
    }} alt="Alternate Text" size={400} />
    </Box>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Ingresa o registrate en la aplicación:</Text>
      <Box style={{ flex: 1, alignItems: "center", width: "80%" }}>
        <HStack space={3}>
          <Button onPress={() => router.push("/login")} colorScheme="teal">
            LOGIN
          </Button>
          <Button onPress={() => router.push("/register")} colorScheme="purple">
              REGISTER
          </Button>
        </HStack>
      </Box>
    </View>
  );
}
