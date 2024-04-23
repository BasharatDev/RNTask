export const ADD_TASK_ACTION_TYPES = {
  ADD_TASK: 'ADD_TASK',
};

export const addTask = payload => {
  return dispatch => {
    return dispatch({
      type: ADD_TASK_ACTION_TYPES.ADD_TASK,
      payload
    });
  };
};
