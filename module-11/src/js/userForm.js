import { createUser } from './api/mockUsersApi';

export const addUserForm = ({ onSubmit }) => {
  const userFormRef = document.querySelector('.user-form');

  const handleSubmit = async event => {
    event.preventDefault();
    const { currentTarget: formRef } = event;
    const formData = new FormData(formRef);
    const body = {};

    formData.forEach((value, key) => {
      body[key] = value;
    });

    onSubmit(body);

    /** Form elements */
    // const { name, description } = currentTarget.elements;
    // const body = {
    //   name: name.value,
    //   description: description.value,
    // };

    /** Form data */

    // try {
    //   await createUser(body);
    //   formRef.reset();
    // } catch (error) {
    //   isDataLoading = false;
    // }
  };

  userFormRef.addEventListener('submit', handleSubmit);

  return {
    resetForm() {
      userFormRef.reset();
    },
  };
};
