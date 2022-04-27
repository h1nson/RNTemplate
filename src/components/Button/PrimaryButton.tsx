import React from 'react';
import {Button} from 'native-base';
import {MindAppTheme} from '@/common/theme';
import {GestureResponderEvent} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default (props: ButtonProps) => {
  const {title, onPress} = props;
  return (
    <Button
      bg={MindAppTheme.colors.primaryButton}
      borderRadius={10}
      _text={{
        fontWeight: 'bold',
      }}
      px={5}
      onPress={onPress}>
      {title}
    </Button>
  );
};
