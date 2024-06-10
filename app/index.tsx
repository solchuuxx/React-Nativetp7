import { router } from "expo-router";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HStack, Box, Image, Button } from 'native-base'

export default function Index() {
  return (
    <View style={styles.container}>
      <Box>
        <Image source={{
          uri: "https://bnextmedia.s3.hicloud.net.tw/image/album/2018-10/img-1539918205-30393@900.jpg"
        }} alt="Alternate Text" size={400} />
      </Box>
      <Text style={styles.welcomeText}>Bienvenido</Text>
      <View style={styles.loginRegisterContainer}>
        <Text style={styles.loginRegisterText}>Ingresa o registrate en la aplicación:</Text>
        <HStack space={3}>
        <Button onPress={() => router.push("/login")} style={{ backgroundColor: '#84B5F3' }}>
          LOGIN
        </Button>

          <Button onPress={() => router.push("/register")} style={{ backgroundColor: '#84B5F3' }}>
            REGISTER
          </Button>
        </HStack>
      </View>
      <ScrollView style={styles.content}>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Contenido para el footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loginRegisterContainer: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius:10,
  },
  loginRegisterText: {
    fontWeight: 'bold',
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
