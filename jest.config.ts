
import nextJest from "next/jest.js";


const createJestConfig = nextJest({
  dir: "./",
});


const config = {

  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },

  collectCoverage: true,

  coverageDirectory: "coverage",

  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
  ],
};

export default createJestConfig(config);