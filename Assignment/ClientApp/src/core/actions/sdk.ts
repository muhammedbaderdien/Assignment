const SET_USERID = 'SET_USERID';
const SET_DISPLAY_NAME = 'SET_DISPLAY_NAME';
const SET_SERVICES = 'SET_SERVICES';

interface SetUserIdAction {
  type: typeof SET_USERID;
  userId: string;
}

interface SetDisplayNameAction {
  type: typeof SET_DISPLAY_NAME;
  displayName: string;
}

interface setServicesAction {
    type: typeof SET_SERVICES;
    services: any;
}

export const setUserId = (userId: string): SetUserIdAction => {
  return {
    type: SET_USERID,
    userId
  };
};

export const setDisplayName = (displayName: string): SetDisplayNameAction => {
  return {
    type: SET_DISPLAY_NAME,
    displayName
  };
};

export const setServices = (services: any): setServicesAction => {
    return {
	   type: SET_SERVICES,
	   services
    };
};

export { SET_USERID, SET_DISPLAY_NAME };

export type SdkTypes =
  | SetUserIdAction
  | SetDisplayNameAction;
