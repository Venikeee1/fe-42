export class Pagination {
  #currentPage = 1;

  constructor({ initialPage = 1, total = 1, onChange }) {
    this.#currentPage = initialPage;
    this.total = total;
    this.onChange = onChange;
  }

  get currentPage() {
    return this.#currentPage;
  }

  set currentPage(value) {
    this.#currentPage = value;

    if (this.onChange) {
      this.onChange(value);
    }

    // опциональный вызов функции
    // onChange?.(value)
  }

  nextPage() {
    if (this.currentPage === this.total) {
      return;
    }

    this.currentPage += 1;
  }

  prevPage() {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage -= 1;
  }
}
