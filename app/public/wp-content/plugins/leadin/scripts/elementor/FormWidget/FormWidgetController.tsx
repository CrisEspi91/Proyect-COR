import React, { Fragment } from 'react';
import { connectionStatus } from '../../constants/leadinConfig';
import ErrorHandler from '../../shared/Common/ErrorHandler';
import FormEdit from '../../shared/Form/FormEdit';
import { IFormAttributes } from './registerFormWidget';

const ConnectionStatus = {
  Connected: 'Connected',
  NotConnected: 'NotConnected',
};

export default function FormWidgetController(
  attributes: IFormAttributes,
  setValue: Function
) {
  return () => {
    const render = () => {
      if (connectionStatus === ConnectionStatus.Connected) {
        return (
          <FormEdit
            attributes={attributes}
            isSelected={true}
            setAttributes={setValue}
            preview={false}
            origin="elementor"
          />
        );
      } else {
        return <ErrorHandler status={401} />;
      }
    };
    return <Fragment>{render()}</Fragment>;
  };
}
