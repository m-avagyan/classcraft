const configs = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  collectCoverageFrom: ["src/index.ts"],
};

module.exports = configs;
