// action
export const CHECK_SATATUS = 'CHECK_SATATUS';

// state
const initialState = {
  categories: [],
};

// create actions
export const checkStatus = (category) => ({
  type: CHECK_SATATUS,
  playload: category,
});

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_SATATUS:
      return {
        ...state,
        message: 'Under construction',
      };
    default:
      return state;
  }
}
