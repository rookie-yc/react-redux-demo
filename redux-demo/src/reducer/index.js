
const initialState = {
    value: '默认值',
};
exports.reducer =  (state = initialState, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case 'send_type':
      return Object.assign({}, state, action);

    default:
      return state
  }
};

