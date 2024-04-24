export default class Diary {
  // properties
  #entries = [];
  #pinCode = 1234;
  #isLocked = false;


  // behaviours
  getEntries = () => this.#entries;

  getIsLocked = () => this.#isLocked;

  addEntry = (entry) => {
    if (this.#isLocked === false) {
      this.#entries.push(entry);
    }
  };

  openDiary = (pin) => {
    pin === this.#pinCode ? this.#isLocked = false : this.#isLocked = true; 
  } 
}
