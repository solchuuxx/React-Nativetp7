import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Input, Box } from "native-base";
import { router } from "expo-router";
import { Card, Button, Icon } from '@rneui/base';

export default function login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateInput = () => {
    const usernameRegex = /^[a-zA-Z0-9]{5,10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

    if (!usernameRegex.test(username) && !emailRegex.test(username)) {
      setError('El nombre de usuario debe tener entre 5 y 10 caracteres o ser un correo electrónico válido.');
      return false;
    }

    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos 5 caracteres, una letra mayúscula, una letra minúscula y un símbolo.');
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    if (validateInput()) {
      router.push("/task");
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Log In</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0, width: 100, height: 100, marginLeft:105}}
          source={{
            uri:
              'https://th.bing.com/th/id/R.54cedafef938b477cee57bb5adc1fb31?rik=i3mLDOlZJNmIow&pid=ImgRaw&r=0',
          }}
        />
        <Box style={{padding:10}}>
          <Input mx="3" placeholder="Username or email" w="90%" style={{paddingBottom:20}} value={username} onChangeText={setUsername} />
          <Input mx="3" placeholder="Password" w="90%" style={{paddingBottom:20}} value={password} onChangeText={setPassword} /> 
        </Box>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 5,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Enter"
          onPress={handleLogin}
        />
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
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


