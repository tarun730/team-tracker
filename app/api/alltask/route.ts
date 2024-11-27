import { headers } from "next/headers"


export const GET = async () => {


    const data = [
        {
            "Id": 1,
            "title": "Design homepage UI",
            "description": "Create the UI design for the homepage using Figma",
            "assignedTo": "Alice",
            "assignedBy": "Bob",
            "status": "In Progress",
            "startDate": "2024-11-01T09:00:00Z",
            "dueDate": "2024-11-10T17:00:00Z",
            "priority": "High",

        },
        {
            "Id": 2,
            "title": "Develop authentication feature",
            "description": "Implement user authentication using JWT.",
            "assignedTo": "Charlie",
            "assignedBy": "Alice",
            "status": "Pending",
            "startDate": "2024-11-05T09:00:00Z",
            "dueDate": "2024-11-15T17:00:00Z",
            "priority": "Medium",

        },
        {
            "Id": 3,
            "title": "Write API documentation",
            "description": "Write API documentation for new authentication endpoints.",
            "assignedTo": "David",
            "assignedBy": "Charlie",
            "status": "Completed",
            "startDate": "2024-10-28T08:30:00Z",
            "dueDate": "2024-10-31T16:00:00Z",
            "priority": "Low",
        },
        {
            "Id": 4,
            "title": "Develop API endpoints",
            "description": "Implement the necessary API endpoints for the application.",
            "assignedTo": "Charlie",
            "assignedBy": "Alice",
            "status": "Not Started",
            "startDate": "2024-11-03T10:00:00Z",
            "dueDate": "2024-11-15T18:00:00Z",
            "priority": "High"
        },
        {
            "Id": 5,
            "title": "Write unit tests",
            "description": "Write unit tests for the authentication module.",
            "assignedTo": "David",
            "assignedBy": "Charlie",
            "status": "In Progress",
            "startDate": "2024-11-05T11:00:00Z",
            "dueDate": "2024-11-12T17:00:00Z",
            "priority": "Medium"
        },
        {
            "Id": 6,
            "title": "Design login page",
            "description": "Create the UI design for the login page using Figma.",
            "assignedTo": "Alice",
            "assignedBy": "Bob",
            "status": "Completed",
            "startDate": "2024-11-02T08:00:00Z",
            "dueDate": "2024-11-06T12:00:00Z",
            "priority": "Medium"
        },
        {
            "Id": 7,
            "title": "Setup CI/CD pipeline",
            "description": "Configure the continuous integration and delivery pipeline.",
            "assignedTo": "Eve",
            "assignedBy": "David",
            "status": "In Progress",
            "startDate": "2024-11-04T14:00:00Z",
            "dueDate": "2024-11-14T16:00:00Z",
            "priority": "High"
        },
        {
            "Id": 8,
            "title": "Update user documentation",
            "description": "Update the user documentation for the new features.",
            "assignedTo": "Bob",
            "assignedBy": "Alice",
            "status": "Not Started",
            "startDate": "2024-11-06T13:00:00Z",
            "dueDate": "2024-11-20T17:00:00Z",
            "priority": "Low"
        },
        {
            "Id": 9,
            "title": "Refactor database schema",
            "description": "Refactor the database schema to improve performance.",
            "assignedTo": "Charlie",
            "assignedBy": "David",
            "status": "Not Started",
            "startDate": "2024-11-07T09:00:00Z",
            "dueDate": "2024-11-18T17:00:00Z",
            "priority": "High"
        },
        {
            "Id": 10,
            "title": "Create product landing page",
            "description": "Design and develop the landing page for the product.",
            "assignedTo": "Eve",
            "assignedBy": "Bob",
            "status": "In Progress",
            "startDate": "2024-11-08T15:00:00Z",
            "dueDate": "2024-11-22T18:00:00Z",
            "priority": "High"
        }
    ]


    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    })

}