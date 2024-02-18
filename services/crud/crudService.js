class CrudService {
  constructor() {}

  async fetchData(params) {
    try {
      let number = Number(params.num);
      let factorial = 1;
      if (number === 0) {
        returnfactorial;
      } else if (number < 1) {
        return factorial;
      } else {
        for (let i = 1; i < number + 1; i++) {
          factorial *= i;
        }
      }
      return `Factorial of ${number} is ${factorial}`;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = CrudService;
