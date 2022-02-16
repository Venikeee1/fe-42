export const userListFactory = ({ onChange }) => {
  return {
    _items: null,
    get items() {
      return this._items;
    },
    set items(items) {
      this._items = items;
      // onChange?.(items)
      if (onChange) {
        onChange(items);
      }
    },
    setUsers(users) {
      this.items = users;
    },
    addUsers(...users) {
      this.items = [...this.items, ...users];
    },
    deleteUser(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    updateUser(user) {
      const { id } = user;
      this.items = this.items.map(item => {
        if (item.id !== id) {
          return item;
        }

        return {
          ...item,
          ...user,
        };
      });
    },
  };
};
