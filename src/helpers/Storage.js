/**
 * Utility class for handling local storage operations with a specified prefix.
 * It encapsulates common operations like getting, setting, and clearing data.
 *
 * @class Storage
 */

class Storage {
  #engine = null;

  #prefix = '';

  constructor(engine, prefix) {
    this.#engine = engine;
    this.#prefix = prefix;
  }

  get(key) {
    return this.#engine.getItem(this.#prefix + key);
  }

  set(key, value) {
    return this.#engine.setItem(this.#prefix + key, value);
  }

  getData(key) {
    const data = this.get(key);
    return data != null && data !== 'undefined' ? JSON.parse(data) : null;
  }

  setData(key, value) {
    return this.set(key, JSON.stringify(value));
  }

  clear() {
    this.#engine.clear();
  }
}

export default Storage;
