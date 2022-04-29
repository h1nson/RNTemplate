import React from 'react';
import {Button, IButtonProps} from 'native-base';
import {MindAppTheme} from '@/common/theme';
import {GestureResponderEvent} from 'react-native';

type ButtonProps = IButtonProps & {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

export default (props: ButtonProps) => {
  const {title} = props;
  return (
    <Button
      bg={MindAppTheme.colors.primaryButton}
      borderRadius={10}
      _text={{
        fontWeight: 'bold',
      }}
      px={5}
      {...props}>
      {title}
    </Button>
  );
};
