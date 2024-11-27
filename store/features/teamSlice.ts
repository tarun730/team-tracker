import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Team {
  id: string;
  name: string;
  members: any[];
}

interface TeamState {
  teams: Team[];
  isLoading: boolean;
}

const initialState: TeamState = {
  teams: [],
  isLoading: false,
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setTeams: (state, action: PayloadAction<Team[]>) => {
      state.teams = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setTeams, setLoading } = teamSlice.actions;
export default teamSlice.reducer;