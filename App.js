import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 justify-center items-center bg-gray-300'>
      <Text className='text-2xl font bold'>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

