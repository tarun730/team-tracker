import { prisma } from "@/lib/prisma";


export async function POST(request:any){
    try {
        const data = await request.json();
        // console.log(data,"on the server comp")
        const task = await prisma.task.create({
            data: {
              title: data.title || '',
              description: data.description || '',
              assignedTo: data.assignedTo || '',
              creator: data.assignedBy || '',  // Default to 'tarun' as per your requirement
              status: data.status || 'Pending',
              createdAt: new Date(data.startDate),  // Make sure to parse dates correctly
              updatedAt: new Date(data.dueDate),      // Make sure to parse dates correctly
              priority: data.priority || 'Medium',  // Default priority is 'Medium'
            },
          });
        return new Response(
            JSON.stringify({ message: 'Task added successfully!', task: data }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
          );
    } catch (error) {
        console.error('Error handling POST request:', error);
        return new Response(
          JSON.stringify({ message: 'Error creating task' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
    
  
   
}