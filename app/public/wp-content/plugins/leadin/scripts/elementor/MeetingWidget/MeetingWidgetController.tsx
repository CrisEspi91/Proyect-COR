import React, { Fragment } from 'react';
import { connectionStatus } from '../../constants/leadinConfig';
import ErrorHandler from '../../shared/Common/ErrorHandler';
import MeetingsEdit from '../../shared/Meeting/MeetingEdit';
import { IMeetingAttributes } from './registerMeetingWidget';

const ConnectionStatus = {
  Connected: 'Connected',
  NotConnected: 'NotConnected',
};

export default function MeetingWidgetController(
  attributes: IMeetingAttributes,
  setValue: Function
) {
  return () => {
    const render = () => {
      if (connectionStatus === ConnectionStatus.Connected) {
        return (
          <MeetingsEdit
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
