import React from 'react';
import {Dimensions} from 'react-native';
import {
  Box,
  Center,
  HStack,
  Image,
  Stack,
  Text,
  Icon,
  useTheme,
  Avatar,
  Button,
} from 'native-base';
import Carousel from 'react-native-snap-carousel';
import {MindAppTheme} from '@/common/theme';
import Header from '@/components/Header';
import HowDoYouFeel from '@/components/HowDoYouFeel';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {formatDate, formatTime} from '@/util/timeFormatter';
import PrimaryButton from '@/components/Button/PrimaryButton';

export default () => {
  //const theme = useTheme();

  const width = Dimensions.get('screen').width;
  const data = [
    {
      title: 'Webinar 1',
      startTime: new Date(),
      uri: 'https://random.imagecdn.app/500/150',
    },
    {
      title: 'Webinar 2',
      startTime: new Date(),
      uri: 'https://random.imagecdn.app/500/200',
    },
    {
      title: 'Webinar 2',
      startTime: new Date(),
      uri: 'https://random.imagecdn.app/500/250',
    },
    {
      title: 'Webinar 2',
      startTime: new Date(),
      uri: 'https://random.imagecdn.app/500/300',
    },
    {
      title: 'Webinar 2',
      uri: 'https://random.imagecdn.app/500/400',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <Box key={index} py={5} h={200} borderRadius={10}>
        <Image
          flex={1}
          borderTopRightRadius={10}
          borderTopLeftRadius={10}
          resizeMode="cover"
          source={{uri: item.uri}}
          alt="image"
        />
        <Text color={'green.600'}>{item.title}</Text>
        <Text fontWeight={'bold'}>
          <Text color={MindAppTheme.colors.primaryText}>
            {formatDate(item.startTime)}
          </Text>
          <Text color={'muted.400'}> | </Text>
          <Text color={MindAppTheme.colors.primaryText}>
            {formatTime(item.startTime)}
          </Text>
        </Text>
      </Box>
    );
  };
  return (
    <Stack flex={1} p={4} space={2}>
      <Header title="Home" />
      <Center h={20} borderRadius={10} bg={MindAppTheme.boxGradient}>
        <Text color={'white'} fontSize={14} fontWeight={'bold'}>
          Hello World!
        </Text>
      </Center>
      <HowDoYouFeel />

      <Stack>
        <HStack py={2}>
          <Text flex={1} fontWeight="bold">
            Next Webinars
          </Text>
          <Icon as={MaterialIcons} name="chevron-right" size={'2xl'} />
        </HStack>
        <Carousel
          data={data}
          layout="default"
          inactiveSlideShift={0}
          renderItem={renderItem}
          activeSlideAlignment="start"
          sliderWidth={width}
          itemWidth={width - 100}
        />
      </Stack>

      <Stack>
        <HStack py={2}>
          <Text flex={1} fontWeight="bold">
            Upcoming Therapy Appointments
          </Text>
          <Icon as={MaterialIcons} name="chevron-right" size={'2xl'} />
        </HStack>
        <Stack p={4} space={1} borderRadius={10} bg="white">
          <HStack space={2}>
            <Avatar source={{uri: 'https://picsum.photos/200/300'}} />
            <Stack>
              <Text color="muted.500" fontWeight={'bold'}>
                Therapist
              </Text>
              <Text fontWeight={'bold'}>Alex Kim</Text>
            </Stack>
          </HStack>
          <HStack />
          <HStack alignItems={'center'}>
            <Text fontWeight={'bold'} flex={1}>
              <Text color={MindAppTheme.colors.primaryText}>
                {formatDate(new Date())}
              </Text>
              <Text color={'muted.400'}> | </Text>
              <Text color={MindAppTheme.colors.primaryText}>
                {formatTime(new Date())}
              </Text>
            </Text>
            <PrimaryButton title="Video" onPress={() => {}} />
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};
