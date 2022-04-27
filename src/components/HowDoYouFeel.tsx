import React from 'react';
import {Center, HStack, Icon, Stack, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default () => {
  const emojs = [
    {
      icon: 'mood-bad',
      color: 'red.600',
    },
    {
      icon: 'sentiment-very-dissatisfied',
      color: 'warning.400',
    },
    {
      icon: 'sentiment-neutral',
      color: 'yellow.400',
    },
    {
      icon: 'sentiment-satisfied-alt',
      color: 'warmGray.600',
    },
    {
      icon: 'sentiment-very-satisfied',
      color: 'green.600',
    },
  ];
  return (
    <Stack mt={2}>
      <Text fontWeight={'bold'} py={4}>
        How do you feel today?
      </Text>
      <HStack bg="white" py={4} borderRadius={5}>
        {emojs.map((item, index) => {
          return (
            <Center flex={1}>
              <Icon
                key={index}
                as={MaterialIcons}
                name={item.icon}
                size={'2xl'}
                color={item.color}
              />
            </Center>
          );
        })}
      </HStack>
    </Stack>
  );
};
