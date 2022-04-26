import React, {useEffect, useState} from 'react';
import {Avatar, Box, Center, Pressable, Stack, Text} from 'native-base';

import {userService} from '@/service';
import Toast from 'react-native-root-toast';

export default () => {
  const [user, setUser] = useState(null);
  const getUserProfile = async () => {
    var userData = await userService.getUserProfile(0);
    if (userData != null) {
      setUser(userData);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <Box flex={1} p={5}>
      {user && (
        <Stack space={2} alignItems="center">
          <Pressable
            onPress={() => {
              console.log('toast');
              Toast.show('Request Failed', {
                duration: Toast.durations.LONG,
                position: Toast.positions.TOP,
                shadow: true,
                animation: true,
                hideOnPress: true,
              });
            }}>
            <Avatar size={20} source={{uri: user.results[0].picture.large}} />
          </Pressable>
          <Text fontSize={20}>{user.results[0].cell}</Text>
          <Text fontSize={20}>{user.results[0].email}</Text>
        </Stack>
      )}
    </Box>
  );
};
