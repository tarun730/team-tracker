"use client"

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { createTask } from '@/lib/API';
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react';

// Validation schema (optional, but recommended)
// import * as Yup from 'yup';

const TaskForm = () => {
    const dispatch = useDispatch();
  // Validation Schema (Optional, for example using Yup)
//   const validationSchema = Yup.object({
//     title: Yup.string().required('Title is required'),
//     assignedTo: Yup.string().required('Assignee is required'),
//     startDate: Yup.date().required('Start date is required'),
//     dueDate: Yup.date().required('Due date is required'),
//     priority: Yup.string().oneOf(['Low', 'Medium', 'High']).required('Priority is required'),
//   });

  // Formik initial values
  const { data: session } = useSession();
  const initialValues = {
    title: '',
    description:'',
    assignedTo: '',
    assignedBy: session?.user?.id,
    status:'Pending',
    startDate: '',
    dueDate: '',
    priority: 'Medium', // Default priority can be set to any of 'Low', 'Medium', 'High'
  };

  // Submit handler
  const onSubmit = (values: any) => {
    // console.log('Form data', values);
    createTask(values, dispatch)
  };

  return (
    <Formik
      initialValues={initialValues}
      
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="title">Title</label>
          <Field
            type="text"
            id="title"
            name="title"
            placeholder="Task Title"
          />
          <ErrorMessage name="title" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <Field
            type="text"
            id="description"
            name="description"
            placeholder="Task description"
          />
          <ErrorMessage name="description" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <label htmlFor="assignedTo">Assigned To</label>
          <Field
            type="text"
            id="assignedTo"
            name="assignedTo"
            placeholder="Assigned To"
          />
          <ErrorMessage name="assignedTo" component="div" style={{ color: 'red' }} />
        </div>
        <div>
          <label htmlFor="assignedBy">Assigned By </label>
          <Field
            type="text"
            id="assignedBy"
            name="assignedBy"
            placeholder="Assigned By " 
          />
          <ErrorMessage name="assignedBy" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <label htmlFor="startDate">Start Date</label>
          <Field
            type="date"
            id="startDate"
            name="startDate"
          />
          <ErrorMessage name="startDate" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <label htmlFor="dueDate">Due Date</label>
          <Field
            type="date"
            id="dueDate"
            name="dueDate"
          />
          <ErrorMessage name="dueDate" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <label htmlFor="priority">Priority</label>
          <Field as="select" id="priority" name="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Field>
          <ErrorMessage name="priority" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default TaskForm;
