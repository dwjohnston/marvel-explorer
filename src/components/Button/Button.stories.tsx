import React from 'react';
import { COLOR_BLACK_2 } from '../../theme/theme';
import { Button } from './Button';

export const Default = () => {
  return (

    <div style ={{backgroundColor: COLOR_BLACK_2,
    
    padding: "50px 0"}}
    >
      <Button label = "I am a button" onClick = {() => undefined}/>
      </div>
  );
};

export default {
  component: Button,
  title: 'Components/Button',
  parameters: {
  },
};
