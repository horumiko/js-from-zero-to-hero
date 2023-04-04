class User {
    constructor(id, login, password, username, avatar) {
      this.id = id;
      this.login = login;
      this.password = password;
      this.username = username;
      this.avatar = avatar;
      this.email = "";
    }
  }
  
  export default class UserCollection {
    constructor() {
      this.users = [];
      this.lastId = 0;
      this.loadUsers();
    }
  
    addUser(login, password, username, avatar) {
      const newUser = new User(++this.lastId, login, password, username, avatar);
      this.users.push(newUser);
      this.saveUsers();
      return newUser;
    }
  
    editUser(id, newLogin, newPassword, newUsername, newAvatar, newEmail) {
      const userIndex = this.users.findIndex(user => user.id === id);
  
      if (userIndex === -1) {
        throw new Error(`User with id ${id} not found`);
      }
  
      const user = this.users[userIndex];
      user.login = newLogin ?? user.login;
      user.password = newPassword ?? user.password;
      user.username = newUsername ?? user.username;
      user.avatar = newAvatar ?? user.avatar;
      user.email = newEmail ?? user.email;

      this.saveUsers();

      localStorage.setItem('user', JSON.stringify(user))
      return user;
    }
  
    loadUsers() {
      const storedUsers = localStorage.getItem("users");
  
      if (storedUsers) {
        this.users = JSON.parse(storedUsers).map(user => new User(user.id, user.login, user.password, user.username, user.avatar));
        this.lastId = this.users.length > 0 ? this.users[this.users.length - 1].id : 0;
      }
    }
  
    saveUsers() {
      localStorage.setItem("users", JSON.stringify(this.users));
    }

    loginUser(username, password) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      const user = users.find(user => user.login === username && user.password === password);
  
      if (user) {
        return user;
      }
    }
  }
  