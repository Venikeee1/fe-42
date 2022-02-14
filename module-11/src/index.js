import './sass/main.scss';
// import './js/questions';
import { getUsers, deleteUser } from './js/api/mockUsersApi';
import { UserCard } from './js/components/UserCard';
import './js/userForm';

const usersListRef = document.querySelector('.users-list');
let users = [];

const renderUsersList = usersList => {
  usersListRef.innerHTML = '';
  const usersNodeList = usersList.map(user => UserCard(user));
  usersListRef.append(...usersNodeList);
};

const handleUserDelete = event => {
  const { target } = event;

  if (target.closest('.delete-user-btn')) {
    const { id } = target.dataset;

    deleteUser(id).then(() => {
      users = users.filter(user => user.id !== id);
      renderUsersList(users);
    });
  }
};

getUsers().then(({ data: usersList }) => {
  users = usersList;
  renderUsersList(usersList);
});

usersListRef.addEventListener('click', handleUserDelete);
