import * as React from 'react';
import {Box, Button, Center, Image, Stack, Text} from 'native-base';
import PagerView from 'react-native-pager-view';
import {StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/navigation/Types';
import PrimaryButton from '@/components/Button/PrimaryButton';
type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

const Landing = ({navigation}: Props) => {
  const data = [
    {
      id: 1,
      content: 'Sint ipsum incididunt veniam et in et commodo laboris.',
      uri: 'https://random.imagecdn.app/500/300',
    },
    {
      id: 2,
      content: 'Consectetur eiusmod anim elit deserunt commodo.',
      uri: 'https://random.imagecdn.app/500/200',
    },
    {
      id: 3,
      content: 'Aliquip consectetur cillum elit reprehenderit.',
      uri: 'https://random.imagecdn.app/500/100',
    },
    {
      id: 4,
      content: 'Tempor aliqua proident minim do commodo.',
      uri: 'https://random.imagecdn.app/500/250',
    },
    {
      id: 5,
      content: 'Officia exercitation qui occaecat dolor aute nostrud.',
      uri: 'https://random.imagecdn.app/500/350',
    },
  ];

  const renderItem = item => {
    return (
      <Center key={item.id} size={400}>
        <Stack alignItems="center">
          <Image
            size={400}
            resizeMode="cover"
            source={{uri: item.uri}}
            alt="image"
          />
          <Text style={{}}>{item.content}</Text>
        </Stack>
      </Center>
    );
  };

  return (
    <Box flex={1} p={5} bg="gray.200">
      <Stack flex={1} space={2}>
        <Box flexGrow={1}>
          <PagerView style={styles.pagerView} initialPage={0}>
            {data.map(item => {
              return renderItem(item);
            })}
          </PagerView>
        </Box>
        <PrimaryButton
          size={'lg'}
          title="CONTINUE"
          onPress={() => {
            navigation.navigate('Drawer');
          }}
        />
      </Stack>
    </Box>
  );
};

export default Landing;
