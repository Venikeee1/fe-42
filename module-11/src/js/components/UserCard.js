import { createElement } from '../utils/createElement';

export const UserCard = userData => {
  const { avatar, name, description, id } = userData;
  const userAvatarElem = createElement('img', {
    class: 'user-avatar',
    src: avatar,
    alt: 'user avatar',
  });

  const deleteButtonElem = createElement(
    'button',
    {
      class: 'delete-user-btn',
      dataset: {
        id,
      },
    },
    'Delete user',
  );

  const userTitleElem = createElement(
    'h2',
    {
      class: 'user-title',
    },
    name,
  );

  const userDescriptionElem = createElement(
    'p',
    {
      class: 'user-description',
    },
    description,
  );

  const userCardElem = createElement(
    'div',
    {
      class: 'user-card',
    },
    [userAvatarElem, userTitleElem, userDescriptionElem, deleteButtonElem],
  );

  return userCardElem;
};
