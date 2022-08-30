const initialState = [];
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      const newCounters = [];
      newCounters.push(action.payload);
      return [...state, ...newCounters];

    case INCREMENT:
      return [...state].map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            value: item.value + action.payload.value,
          };
        } else {
          return {
            ...item,
          };
        }
      });

    case DECREMENT:
      return [...state].map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            value: item.value - action.payload.value,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    case RESET_COUNTER:
      return [...state].map((item) => {
        return {
          ...item,
          value: 0,
        };
      });

    default:
      return state;
  }
};
