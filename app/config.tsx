import React from 'react';
import { View, Text, Switch, Button, ScrollView, StyleSheet} from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [language, setLanguage] = React.useState('es');

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 30 }}>Configuraciones de la aplicación</Text>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text>Modo oscuro: </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text>Idioma: </Text>
        <Button title="Español" onPress={() => setLanguage('es')} />
        <Button title="Inglés" onPress={() => setLanguage('en')} />
      </View>

      <ScrollView style={styles.content}></ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Contenido para el footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default SettingsScreen;
