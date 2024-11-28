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
    ]


    return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' }
    })

}