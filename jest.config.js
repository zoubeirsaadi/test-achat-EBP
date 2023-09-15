module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest'
    },
    moduleNameMapper: {
      '@app/(.*)': '<rootDir>/src/app/$1'
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    globals: {
      'ts-jest': {
        tsConfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
        astTransformers: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer'
        ]
      }
    }
  };
  