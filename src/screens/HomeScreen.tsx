import React from 'react';
import {Box, Center, Image, Stack, Text, useTheme} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import theme from '@/common/theme';
import Header from '@/components/Header';

export default () => {
  // const data = [
  //   {
  //     title: 'Webinar 1',
  //     uri: 'https://random.imagecdn.app/500/150',
  //   },
  //   {
  //     title: 'Webinar 2',
  //     uri: 'https://random.imagecdn.app/500/200',
  //   },
  //   {
  //     title: 'Webinar 2',
  //     uri: 'https://random.imagecdn.app/500/250',
  //   },
  //   {
  //     title: 'Webinar 2',
  //     uri: 'https://random.imagecdn.app/500/300',
  //   },
  //   {
  //     title: 'Webinar 2',
  //     uri: 'https://random.imagecdn.app/500/400',
  //   },
  // ];

  // const renderItem = ({item, index}) => {
  //   return (
  //     <Box bg="blue.300" style={{height: 200}}>
  //       <Text style={{}}>{item.title}</Text>
  //       <Image
  //         flex={1}
  //         resizeMode="cover"
  //         source={{uri: item.uri}}
  //         alt="image"
  //       />
  //     </Box>
  //   );
  // };
  return (
    <Stack flex={1} p={2}>
      <Header />
      <Center
        h={20}
        borderRadius={10}
        bg={theme.linearGradient}>
        {/* <Carousel
          data={data}
          layout="default"
          layoutCardOffset={'1'}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={200}
        /> */}

          <Text color={'white'} fontSize={14} fontWeight={'bold'}>Need to complete LAPT before next session</Text>
      </Center>
    </Stack>
  );
};
