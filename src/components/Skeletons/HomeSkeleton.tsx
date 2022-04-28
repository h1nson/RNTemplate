import React from 'react';
import {Center, HStack, Skeleton, VStack} from 'native-base';

export default () => {
  return (
    <Center flex={1}>
      <VStack flexGrow={1} w="100%" space={2}>
        <Skeleton h="40" startColor={'warmGray.400'} borderRadius={5} />
        <Skeleton.Text px={'4'} my={'4'} startColor={'warmGray.400'} />

        <HStack space={2}>
          <Skeleton
            h="32"
            w="50%"
            startColor={'warmGray.400'}
            borderRadius={5}
          />
          <Skeleton
            h="32"
            w="50%"
            startColor={'warmGray.400'}
            borderRadius={5}
          />
        </HStack>

        <Skeleton size={10} startColor={'warmGray.400'} rounded="full" />
        <Skeleton.Text
          px={'2'}
          my={'2'}
          lines={2}
          startColor={'warmGray.400'}
        />
      </VStack>
    </Center>
  );
};
