import { useNavigation } from '@react-navigation/native';
import { Text, Vibration, View } from 'react-native';

export function HabitsEmpty() {
  const { navigate } = useNavigation();

  return (
    <Text className='text-zinc-400 text-base'>
      voce ainda não está monitorando nenhum habito{' '}
      <Text
        className='text-violet-400 text-base underline'
        onPress={() => navigate('new')}
      >
        comece cadastrando um.
      </Text>
    </Text>
  );
}
