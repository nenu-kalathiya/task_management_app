import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskUpdate }) => {
    return (
        <div>
            <h2>Task List</h2>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onTaskUpdate={onTaskUpdate} />
            ))}
        </div>
    );
};

export default TaskList;
