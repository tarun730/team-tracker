import { addTask } from '@/store/features/taskSlice';
import axios from 'axios';
import { Dispatch } from 'redux';

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPosts = async () => {
  const response = await api.get('api/posts');
  return response.data;
};

export const createTask = async (data: {
    description?: string;
    Id: number;         
    title: string;            
    assignedTo: string;     
    assignedby: string;     
    startDate: string;      
    dueDate: string;        
    priority: 'Low' | 'Medium' | 'High';
    },dispatch: Dispatch) => {    
        const stringifiedData = JSON.stringify(data);
        console.log(stringifiedData,data)
  const response = await api.post('/addtask', stringifiedData);
  const task = await response.data;
  console.log(task,"api asilaaa");
  
  dispatch(addTask(task.task));
};

export const getPost = async (id: string) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};