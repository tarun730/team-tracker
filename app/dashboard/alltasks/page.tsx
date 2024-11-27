// Assuming you're using TypeScript (tsx extension)
'use client';

import { RootState, AppDispatch } from '@/store/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setTasks, isTaskCompleted, fetchDetailTask } from '@/store/features/taskSlice';
import { Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption, } from '@/components/ui/table';
// import { fetchDetailTask } from './path-to-your-thunk';
// import { RootState } from './store';



const MyComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { tasks, isLoading, } = useSelector((state: RootState) => state.tasks);
    const [data, setdata] = useState<Data[] | null>(null)

    interface Data {
        taskId: number;         // A unique identifier for the task
        title: string;          // The title or name of the task
        description: string;    // Detailed description of the task
        assignedTo: string;     // The person the task is assigned to
        assignedBy: string;     // The person who assigned the task
        status: 'Pending' | 'In Progress' | 'Completed'; // The current status of the task
        startDate: string;      // The start date of the task (ISO string format)
        dueDate: string;        // The due date of the task (ISO string format)
        priority: 'Low' | 'Medium' | 'High'; // Priority level of the task
        comments: Comment[];    // An array of comments associated with the task
    }


    useEffect(() => {
        const loadData = async () => {
            dispatch(setLoading(true)); // Start loading
            try {
                if (tasks.length === 0) {
                    dispatch(fetchDetailTask());
                }

            } finally {
                dispatch(setLoading(false)); // Stop loading
            }
        };

        loadData();
    }, [dispatch, tasks.length]);

    const handleMarkAsCompleted = (taskId: number) => {
        dispatch(isTaskCompleted(taskId)); // Dispatch the action with the task id
    };
    return (
        <>
            <h1>this is the all task page assigned to u</h1>
            <Table>
      <TableCaption>Task Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Assigned To</TableHead>
          <TableHead>Assigned By</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Start Date</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.Id}>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.assignedTo}</TableCell>
            <TableCell>{task.assignedBy}</TableCell>
            <TableCell>{task.status}</TableCell>
            <TableCell>{task.startDate}</TableCell>
            <TableCell>{task.dueDate}</TableCell>
            <TableCell>{task.priority}</TableCell>
            <TableCell>
              <button onClick={() => handleMarkAsCompleted(task.Id)}>Completed</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

            {/* <table className='border'>
                <thead>
                    <tr>
                        <th className='border p-2 uppercase'>title</th>
                        <th className='border uppercase'>description</th>
                        <th className='border px-4 uppercase'>assignedTo</th>
                        <th className='border px-4 uppercase'>assignedBy</th>
                        <th className='border uppercase'>status</th>
                        <th className='border uppercase'>startDate</th>
                        <th className='border uppercase'>dueDate</th>
                        <th className='border p-3 uppercase'>priority</th>
                        <th className='border p-3 uppercase'>action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks && tasks.map(data => (
                            <tr key={data.Id}>
                                <td className='border p-2 '>{data.title}</td>
                                <td className='border p-2 '>{data.description}</td>
                                <td className='border p-2 '>{data.assignedTo}</td>
                                <td className='border p-2 '>{data.assignedBy}</td>
                                <td className='border p-2 '>{data.status}</td>
                                <td className='border p-2 '>{data.startDate}</td>
                                <td className='border p-2 '>{data.dueDate}</td>
                                <td className='border p-2 '>{data.priority}</td>
                                <td className='border p-2 '>
                                    <button onClick={() => handleMarkAsCompleted(data.Id)}>completed</button>
                                </td>
                            </tr>))
                    }

                </tbody>
            </table> */}
        </>
    );
};

export default MyComponent;
