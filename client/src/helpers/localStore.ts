export function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getLocalStorage(key: string): any {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return value;
  }
}

export function deleteLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
