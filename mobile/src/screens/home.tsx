import { View, Text } from 'react-native';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <View className='flex-1 bg-background px-8 pt-6'>
      <Header />
    </View>
  );
}
