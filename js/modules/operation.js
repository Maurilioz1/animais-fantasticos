export default class Operation {
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  operationData() {
    this.daysWeek = this.operation.dataset.week.split(', ').map(Number);
    this.hours = this.operation.dataset.hour.split(', ').map(Number);
  }

  dataNow() {
    this.now = new Date();
    this.dayWeek = this.now.getDay();
    this.hour = this.now.getUTCHours() - 3;
  }

  isOpen() {
    const dayWeekOpen = this.daysWeek.indexOf(this.dayWeek) !== -1;
    const hourOpen = this.hour >= this.hours[0] && this.hour < this.hours[1];

    return dayWeekOpen && hourOpen;
  }

  activeOpen() {
    if (this.isOpen()) {
      this.operation.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.operation) {
      this.operationData();
      this.dataNow();
      this.activeOpen();
    }

    return this;
  }
}
