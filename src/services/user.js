import generateUniqueId from '../utils/uniqueId';
import storage from './storage';

/**
 * UserService
 */
const UserService = () => {
  const registerUser = async (data) => {
    const storageItemName = 'usersTracking';

    let currentStorage = JSON.parse(storage.getItem(storageItemName));

    if (!currentStorage) {
      currentStorage = [];
    }

    const userExists = currentStorage.find((user) => (
      user.lastName === data.lastName && user.firstName === data.firstName));

    if (userExists) {
      throw new Error('User already exists');
    }

    const newUserEntry = {
      id: generateUniqueId(),
      ...data,
    };

    const newStorage = [
      ...currentStorage,
      newUserEntry,
    ];

    storage.setItem(storageItemName, JSON.stringify(newStorage));

    return newUserEntry;
  };

  return Object.freeze({
    registerUser,
  });
};

export default UserService();
