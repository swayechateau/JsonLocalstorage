class JSONLocalStorage {
    constructor(name) {
        this.name = name;
        this.storage = window.localStorage;
    }
    
    get(key) {
        const item = this.storage.getItem(this.name + '.' + key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    }

    set(key, value) {
        this.storage.setItem(this.name + '.' + key, JSON.stringify(value));
    }

    remove(key) {
        this.storage.removeItem(this.name + '.' + key);
    }
}

module.exports = JSONLocalStorage;