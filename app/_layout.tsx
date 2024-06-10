import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function RootLayout() {
  return (
    <NativeBaseProvider>
      <Stack>
        <Stack.Screen name="index" 
        options={{
          title: 'Inicio',
          headerStyle: {
            backgroundColor: '#84B5F3',
          }
        }}
        />
        <Stack.Screen name="login" 
        options={{
          title: 'Iniciar sesion',
          headerStyle: {
            backgroundColor: '#84B5F3',
          }
        }}/>
        <Stack.Screen name="register"  
        options={{
          title: 'Registro',
          headerStyle: {
            backgroundColor: '#84B5F3',
          }
        }}/>
        <Stack.Screen name="task" 
        options={{
          title: 'Tareas',
          headerStyle: {
            backgroundColor: '#84B5F3',
          }
        }}/>
      </Stack>
    </NativeBaseProvider>
  );
}
