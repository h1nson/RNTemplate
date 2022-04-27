import React from 'react';
import {Avatar, Box, Center, Icon, Text} from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import About from '@/screens/About';
import Profile from '@/screens/Profile';
import HomeScreen from './HomeScreen';

import {RootStackParamList} from '@/navigation/Types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '@/components/Header';
import {MindAppTheme} from '@/common/theme';
import {DrawerActions} from '@react-navigation/native';
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
  const {navigation} = props;
  console.log('props', navigation);
  return (
    <Box flex={1}>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          drawerPosition: 'right',
          //header: () => <Header title="title" />,
          sceneContainerStyle: {
            padding: 10,
          },
          headerTitleAlign: 'center',
          //headerTransparent: true,
          headerShown: true,
          headerStyle: {
            elevation: 0,
            backgroundColor: 'transparnet',
          },
          headerTitleStyle: {
            color: 'green',
          },
          headerLeft: () => (
            <Icon
              as={Ionicons}
              name="fitness"
              size={'lg'}
              color={MindAppTheme.colors.primaryButton}
            />
          ),
          headerRight: () => (
            <Box shadow={1} bg="white" borderRadius={10} p={1}>
              <Icon
                as={Ionicons}
                onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer());
                }}
                name="menu-outline"
                size={'lg'}
                color={MindAppTheme.colors.primaryButton}
              />
            </Box>
          ),
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </Box>
  );
};
