export interface IAction {
  type: string;
  option: {
    loading: boolean;
    media: string;
    type: string;
  };
}

export const loadingUploadReducer = (
  state: {
    loading: boolean;
    media: string;
    type: string;
  },
  action: IAction
) => {
  switch (action.type) {
    case 'UPDATE_LOADING_UPLOAD':
      return action.option;
    default:
      return state;
  }
};
