enum LocalStorageKeysEnum {
    userId = 'userId',
}

export function SaveUserIdToLocalStorage(id: number) {
    localStorage.setItem(LocalStorageKeysEnum.userId, id.toString())
}

export function GetUserIdFromLocalStorage(): number {
    return parseInt(localStorage.getItem(LocalStorageKeysEnum.userId), 10);
}

export function ClearLocalStorage() {
    localStorage.clear();
}