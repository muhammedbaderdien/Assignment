import React from 'react';
import NewLocalSettings from './LocalSettings';
import ParticipantStack from '../containers/ParticipantStack';
import { VideoDeviceInfo, AudioDeviceInfo, DeviceManager } from '@azure/communication-calling';
import { Stack } from '@fluentui/react';
import {
  fullHeightStyles,
  paneHeaderStyle,
  settingsContainerStyle,
  paneHeaderTextStyle,
  paneHeaderUnderlineStyle
} from './styles/CommandPanel.styles';
import Footer from './Footer';
//import { containerStyles } from './styles/GroupCall.styles';

import ChatArea from '../containers/ChatArea';
//import SidePanel from '../containers/SidePanel';
import {
    chatScreenBottomContainerStyle,
    //hatScreenContainerStyle,
} from './styles/ChatScreen.styles';
//import { SidePanelTypes } from './SidePanel';

export interface CommandPanelProps {
  selectedPane: string;
  videoDeviceInfo: VideoDeviceInfo;
  videoDeviceList: VideoDeviceInfo[];
  audioDeviceList: AudioDeviceInfo[];
  audioDeviceInfo: AudioDeviceInfo;
  setSelectedPane: any;
  setVideoDeviceInfo(device: VideoDeviceInfo): void;
  setAudioDeviceInfo(device: AudioDeviceInfo): void;

  deviceManager: DeviceManager;
  threadMembersError: boolean;
  endChatHandler(): void;
  errorHandler(): void;
  getThreadMembers(): void;
  getThread(): void;
  getMessages(): void;

  endChatHandler(): void;
}
export enum CommandPanelTypes {
  None = 'none',
  People = 'People',
  Chat = 'Live Chat',
  Settings = 'Settings'
}

export default (props: CommandPanelProps): JSX.Element => {
  // People pane will be visible when a chat is joined if the window width is greater than 600
  //const [selectedPane, setSelectedPane] = useState(
  //    window.innerWidth > 600 ? SidePanelTypes.Chat : SidePanelTypes.None
  //);


  return (
    <Stack styles={fullHeightStyles}>
      <Stack.Item className={paneHeaderStyle}>
        <div className={paneHeaderTextStyle}>{props.selectedPane}</div>
        <hr className={paneHeaderUnderlineStyle}/>
      </Stack.Item>
      
        {props.selectedPane === CommandPanelTypes.People && (
          <Stack.Item styles={fullHeightStyles}>
            <ParticipantStack />
          </Stack.Item>

          )}

        {props.selectedPane === CommandPanelTypes.Chat && (
          <Stack.Item styles={fullHeightStyles}>
              <Stack className={chatScreenBottomContainerStyle} horizontal={true}>
                  <ChatArea endChatHandler={props.endChatHandler} />
              </Stack>
          </Stack.Item>

        )}
        {props.selectedPane === CommandPanelTypes.People && (
          <Stack.Item>
            <Footer />
          </Stack.Item>
        )}
        {props.selectedPane === CommandPanelTypes.Settings && (
          <Stack.Item>
          <div className={settingsContainerStyle}>
            <NewLocalSettings
              videoDeviceList={props.videoDeviceList}
              audioDeviceList={props.audioDeviceList}
              audioDeviceInfo={props.audioDeviceInfo}
              videoDeviceInfo={props.videoDeviceInfo}
              setVideoDeviceInfo={props.setVideoDeviceInfo}
              setAudioDeviceInfo={props.setAudioDeviceInfo}
              deviceManager={props.deviceManager}
            />
          </div>
          </Stack.Item>
        )}
      
    </Stack>
  );
};
