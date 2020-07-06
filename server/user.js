const users = [];

const newUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    return { id, name, room };
};

const addUser = ({ id, name, room }) => {
    if (!name || !room) return { error: 'Username and room are required.' };
    const currentUser = newUser({ id, name, room });
    
    const existedUser = users.find((user) => (user.name ===currentUser.name && user.room ===currentUser.room));
    if (existedUser) return { error: 'Username is taken.' };

    users.push({ id, name, room });
    return { user: currentUser };
};

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
