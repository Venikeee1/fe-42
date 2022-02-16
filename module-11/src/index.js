import './sass/main.scss';
import { getUsers, deleteUser, createUser } from './js/api/mockUsersApi';
import { UserCard } from './js/components/UserCard';
import { userListFactory } from './js/userList';
import { addUserForm } from './js/userForm';
import gsap from 'gsap';

const usersListRef = document.querySelector('.users-list');

const renderUsersList = usersList => {
  const sortedUsers = [...usersList].sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  usersListRef.innerHTML = '';
  const usersNodeList = sortedUsers.map(user => UserCard(user));
  gsap.to(usersNodeList, { y: 0, duration: 1, stagger: 0.2, opacity: 1 });
  usersListRef.append(...usersNodeList);
};

const userListManager = userListFactory({ onChange: renderUsersList });

const handleUserDelete = async event => {
  const { target } = event;

  if (target.closest('.delete-user-btn')) {
    const { id } = target.dataset;

    await deleteUser(id);
    userListManager.deleteUser(id);
  }
};

const render = async () => {
  const { data: usersList } = await getUsers();
  userListManager.setUsers(usersList);
};

const handleSubmit = async body => {
  try {
    const { data: newUser } = await createUser(body);
    userListManager.addUsers(newUser);
    resetForm();
  } catch (error) {
    isDataLoading = false;
  }
};

const { resetForm } = addUserForm({
  onSubmit: handleSubmit,
});

usersListRef.addEventListener('click', handleUserDelete);

render();
