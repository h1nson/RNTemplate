import React from 'react';
import {Box, Center, HStack, Icon, StatusBar, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MindAppTheme} from '@/common/theme';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  title: string;
};

export default (props: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <HStack py={2}>
      {/* <StatusBar backgroundColor="red" barStyle="light-content" /> */}
      <Icon
        as={Ionicons}
        name="fitness"
        size={'lg'}
        color={MindAppTheme.colors.primaryButton}
      />
      <Center flexGrow={1}>
        <Text color={MindAppTheme.colors.primaryButton} fontWeight={'bold'}>
          {props.title}
        </Text>
      </Center>
      <Box shadow={1} bg="white" borderRadius={10} p={1}>
        <Icon
          as={Ionicons}
          onPress={() => {
            navigation.openDrawer();
          }}
          name="menu"
          size={'lg'}
          color={MindAppTheme.colors.primaryButton}
        />
      </Box>
    </HStack>
  );
};
