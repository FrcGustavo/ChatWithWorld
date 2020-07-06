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

const user1 = { id: '123456', name: 'Gustavo', room: 'myplace' };
addUser(user1);
addUser(user1);
console.log(users);
