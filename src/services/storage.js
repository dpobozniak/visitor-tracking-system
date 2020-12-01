/**
 * StorageService
 */
const StorageService = () => {
  const setItem = (key, value) => window.localStorage.setItem(key, value);

  const getItem = (key) => window.localStorage.getItem(key);

  return Object.freeze({
    setItem,
    getItem,
  });
};

export default StorageService();
