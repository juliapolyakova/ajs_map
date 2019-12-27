export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  toSet(code, value) {
    this.errors.set(code, value);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }

    return 'Unknown error';
  }
}
