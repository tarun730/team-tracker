import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  // id: string;
  // title: string;
  description?: string;
  // status: string;
  timeSpent: number;
  Id: number;         
  title: string;          
  // description: string;   
  assignedTo: string;     
  assignedBy: string;     
  status: 'Pending' | 'In Progress' | 'Completed'; // The current status of the task
  startDate: string;      
  dueDate: string;        
  priority: 'Low' | 'Medium' | 'High'; // Priority level of the task
  // comments: Comment[];    
}

interface TaskState {
  tasks: Task[];
  activeTask: Task | null;
  isLoading: boolean;
}

const initialState: TaskState = {
  tasks: [],
  activeTask: null,
  isLoading: false,
};


export const fetchDetailTask=createAsyncThunk('getAllTask',async ()=>{
  const response = await fetch("/api/alltask");
  const data = await response.json();
  return data; 
})



const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    // setActiveTask: (state, action: PayloadAction<Task | null>) => {
    //   state.activeTask = action.payload;
    // },
    // updateTaskTime: (state, action: PayloadAction<{ id: string; timeSpent: number }>) => {
    //   const task = state.tasks.find(t => t.id === action.payload.id);
    //   if (task) {
    //     task.timeSpent = action.payload.timeSpent;
    //   }
    //   if (state.activeTask?.id === action.payload.id) {
    //     state.activeTask.timeSpent = action.payload.timeSpent;
    //   }
    // },
    isTaskCompleted:(state,action)=>{
      const task = state.tasks.find((task) => task.Id === action.payload); // Find task by ID
      if (task) {
        task.status = 'Completed'; // Update task status to 'completed'
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailTask.pending, (state) => {
        state.isLoading = true; // Start loading
      })
      .addCase(fetchDetailTask.fulfilled, (state, action) => {
        state.isLoading = false;  // Stop loading
        state.tasks = action.payload;  // Store the fetched tasks
      })
      .addCase(fetchDetailTask.rejected, (state, action) => {
        state.isLoading = false;  // Stop loading
        // state.error = action.error.message || 'Failed to fetch tasks'; // Handle error
      });
  }
});

export const { setTasks,setLoading ,isTaskCompleted} = taskSlice.actions;
export default taskSlice.reducer;