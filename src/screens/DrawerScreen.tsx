import React from 'react';
import {Avatar, Box, Center, Icon, Text} from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import About from '@/screens/About';
import Profile from '@/screens/Profile';
import HomeScreen from './HomeScreen';

import {RootStackParamList} from '@/navigation/Types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <Center>
        <Avatar size={20} source={{uri: 'https://picsum.photos/200'}}>
          User Name
        </Avatar>
      </Center>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => console.log('Link to help')} />
    </DrawerContentScrollView>
  );
};

export default (props: Props) => {
  return (
    <Box flex={1}>
      <Drawer.Navigator
        useLegacyImplementation
        // screenOptions={{
        //   drawerPosition: 'right',
        //   headerLeft: () => (
        //     <Avatar size={10} source={{uri: 'https://picsum.photos/200'}} />
        //   ),
        //   headerRight: () => <Icon as={Ionicons} name="fa-solid" />,
        // }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} options={
          {
            headerShown: false,
          }
        }/>
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </Box>
  );
};
