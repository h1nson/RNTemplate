import React from 'react';
import { HStack, Icon, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default () => {
    return <HStack>
        <Icon as={Ionicons} name="add-outline" />
        <Text>Header</Text>
        <Icon as={Ionicons} name="add-outline" />
    </HStack>;
};
