import { createUser } from './api/mockUsersApi';

const userFormRef = document.querySelector('.user-form');
let isDataLoading = false;

const handleSubmit = event => {
  event.preventDefault();
  const { currentTarget: formRef } = event;
  if (isDataLoading) return;
  isDataLoading = true;

  /** Form elements */
  // const { name, description } = currentTarget.elements;
  // const body = {
  //   name: name.value,
  //   description: description.value,
  // };

  /** Form data */
  const formData = new FormData(formRef);
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  });

  createUser(body)
    .then(() => {
      formRef.reset();
    })
    .finally(() => {
      isDataLoading = false;
    });
};

userFormRef.addEventListener('submit', handleSubmit);
