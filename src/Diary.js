export default class Diary {
  // properties
  #entries = [];

  // behaviours
  getEntries = () => this.#entries;
  addEntry = (entry) => {
    this.#entries.push(entry);
  };
}
