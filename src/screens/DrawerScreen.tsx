import React from 'react';
import {Avatar, Box, Center, Icon, StatusBar, Text} from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import About from '@/screens/About';
import Profile from '@/screens/Profile';
import HomeScreen from './HomeScreen';
import {RootStackParamList} from '@/navigation/Types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MindAppTheme} from '@/common/theme';
import {DrawerActions} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  drawerItemStyle: {
    borderRadius: 20,
  },
});

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation, state} = props;
  const drawerName = state.routeNames[state.index];
  return (
    <Box flex={1}>
      <DrawerContentScrollView {...props}>
        <Center py={10}>
          <Avatar
            size={20}
            source={{uri: 'https://random.imagecdn.app/500/150'}}>
            User Name
          </Avatar>
          <Text pt={4} fontWeight={'bold'} fontSize={'md'}>
            John Wick
          </Text>
        </Center>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label="Home"
          pressColor="green"
          icon={() => (
            <Icon
              as={MaterialIcons}
              color={MindAppTheme.colors.primary}
              size="lg"
              name="home"
            />
          )}
          focused={drawerName === 'Home'}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <DrawerItem
          label="Profile"
          pressColor="green"
          icon={() => (
            <Icon
              as={MaterialIcons}
              size="lg"
              color={MindAppTheme.colors.primary}
              name="account-circle"
            />
          )}
          focused={drawerName === 'Profile'}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
        <DrawerItem
          label="About"
          pressColor="green"
          icon={() => (
            <Icon
              as={MaterialIcons}
              size="lg"
              color={MindAppTheme.colors.primary}
              name="info"
            />
          )}
          focused={drawerName === 'About'}
          onPress={() => {
            navigation.navigate('About');
          }}
        />
        <DrawerItem
          label="Help"
          pressColor="green"
          icon={() => (
            <Icon
              as={MaterialIcons}
              size="lg"
              color={MindAppTheme.colors.primary}
              name="help"
            />
          )}
          focused={drawerName === 'Help'}
          style={styles.drawerItemStyle}
          onPress={() => {
            navigation.navigate('Help');
          }}
        />
      </DrawerContentScrollView>
    </Box>
  );
};

export default (props: Props) => {
  const {navigation} = props;
  return (
    <Box flex={1}>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{
          drawerPosition: 'right',
          swipeEdgeWidth: 100,
          sceneContainerStyle: {
            padding: 10,
          },
          headerTitleAlign: 'center',
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
              as={MaterialIcons}
              name="dashboard"
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
