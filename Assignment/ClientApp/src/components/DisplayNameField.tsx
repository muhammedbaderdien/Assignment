import React from 'react';
import { TextField } from '@fluentui/react';

import {
  inputBoxStyle,
  inputBoxTextStyle,
  inputBoxWarningStyle,
  labelFontStyle,
  warningStyle
} from './styles/Configuration.styles';
import { Constants } from '../core/constants';

interface DisplayNameFieldProps {
  setName(name: string): void;
  onNameTextChange(name: string): void;
  labelName: string;
  placeHolder: string;
  name: string;
  setEmptyWarning(isEmpty: boolean): void;
  isEmpty: boolean;
  validateName(): void;
}

const TextFieldStyleProps = {
  wrapper: {
    height: '2.3rem'
  },
  fieldGroup: {
    height: '2.3rem'
  }
};

export default (props: DisplayNameFieldProps): JSX.Element => {
  const onNameTextChange = (event: any) => {
    props.setName(event.target.value);
    if (event.target.value) {
      //props.setEmptyWarning(false);
    } else {
      //props.setEmptyWarning(true);
    }
  };

  return (
    <div>
          <div className={labelFontStyle}>{props.labelName}</div>
      <TextField
        autoComplete="off"
        inputClassName={inputBoxTextStyle}
        ariaLabel="Search Services"
        borderless={true}
        className={props.isEmpty ? inputBoxWarningStyle : inputBoxStyle}
        onChange={onNameTextChange}
        id="search"
        placeholder={props.placeHolder}
        defaultValue={props.name}
        styles={TextFieldStyleProps}
        onKeyDown={(ev) => {
            if (ev.which === Constants.ENTER_KEY) {
                props.validateName();
            }
        }}
      />
      {props.isEmpty && (
        <div role="alert" className={warningStyle}>
          {' '}
          Name cannot be empty{' '}
        </div>
      )}
    </div>
  );
};
