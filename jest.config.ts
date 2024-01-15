const config = {
  preset: "ts-jest/presets/js-with-ts",
  rootDir: "./src",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "node"],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
    "^__mocks__(.*)$": "<rootDir>/__mocks__$1",
    "^components/(.*)$": "<rootDir>/components/$1",
    "^pages/(.*)$": "<rootDir>/pages/$1",
    "^public/(.*)$": "<rootDir>/public/$1",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!jest.config.ts",
    "!**/node_modules/**",
    "!**/.vscode/**",
    "!**/coverage/**",
    "!**/dist/**",
  ],
  // coverageThreshold: {
  //   global: {
  //     lines: 90,
  // }, },
  coverageReporters: ["text", "lcov", "cobertura"],
  globalSetup: "<rootDir>/../jest.globalSetup.ts",
  globalTeardown: "<rootDir>/../jest.globalTeardown.ts",
  setupFiles: [],
  setupFilesAfterEnv: ["<rootDir>/utils/jest-extends.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/out"],
  globals: {
    window: {},
    document: {},
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json", warnOnly: true }],
  },
  testEnvironment: "jest-environment-jsdom",
};

export default config;
