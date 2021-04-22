import React, { useEffect } from 'react';
import { Stack } from '@fluentui/react';
import {
  containerTokens,
  headerStyle,
  upperStackTokens,
  upperStackStyle
} from './styles/HomeScreen.styles';

export interface HomeScreenProps {
  startCallHandler(): void;
}

export default (props: HomeScreenProps): JSX.Element => {
  const headerTitle = 'Services Test Assignment';
  
  useEffect(() => {
      props.startCallHandler();
  }, []);

  return (
    <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={containerTokens}>
      <Stack className={upperStackStyle} tokens={upperStackTokens}>
        <div className={headerStyle}>{headerTitle}</div>
       
      </Stack>
      
    </Stack>
  );
};
