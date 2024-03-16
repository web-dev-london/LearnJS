export default class Helper {
  constructor(str) {
    this.str = str;
  }
  capitalize() {
    return (
      this.str[0].toUpperCase() +
      this.str.substring(1).toLowerCase()
    );
  }
}

export class ToString {
  capitalize(word) {
    return (
      word[0].toUpperCase() +
      word.substring(1).toLowerCase()
    );
  }
}
