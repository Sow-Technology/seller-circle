export const getLocalStorage = (key) => {
  if (typeof window === "undefined") {
    return null;
  }
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setLocalStorage = (key, data) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalStorage = (key) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.removeItem(key);
};

export const removeLocalStorageItems = (keys) => {
  if (typeof window === "undefined") {
    return;
  }
  keys.forEach((key) => {
    localStorage.removeItem(key);
  });
};

export const clearLocalStorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.clear();
};
