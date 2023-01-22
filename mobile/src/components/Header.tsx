import { View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import Logo from '../assets/logo.svg';

export function Header() {
  return (
    <View className='w-full flex-row items-center justify-between'>
      <Logo />
      <Feather name='plus' />
    </View>
  );
}
