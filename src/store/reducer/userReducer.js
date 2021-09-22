const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: { loading: false, data: null },
  reducers: {
    setUserState: (state, action) => ({ ...state, ...action.payload }),
    setUser: (state, action) => ({ ...state, data: action.payload }),
  },
});

export const { setUserSlice, setUser } = userSlice.actions;
export default userSlice.reducer;
