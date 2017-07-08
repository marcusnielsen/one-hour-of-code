import mockData from "./mock-data";

const symbols = {
  get: () => Promise.resolve(mockData)
};

export default {
  symbols
};
