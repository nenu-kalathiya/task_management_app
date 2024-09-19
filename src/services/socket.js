import io from 'socket.io-client';

const socket = io('http://localhost:5000');

export const emitUpdateTask = (task) => {
    socket.emit('updateTask', task);
};

export default socket;
