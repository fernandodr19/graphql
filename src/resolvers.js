const users = [
    {id: 1, name: "Fernando", email: "myemail@gmail.com"}
]

module.exports = {
    Query: {
        users() {
            return users;
        },
        user(id) {
            return users[0];
        },
    },
    Mutation: {
        createUser(name, email) {
            return user[0];
        }
    }
}