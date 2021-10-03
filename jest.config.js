const config  = {
    verbose: true,
    moduleFileExtensions: [ 'test.tsx', 'js', 'ts', 'tsx' ],
    testMatch: [        
        "src/**/*.{js,jsx,tsx}",
        "**/__tests__/*.(ts|tsx|js)"
    ],
    snapshotSerializers: [ 'enzyme-to-json'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMocks.js",
        "\\.(scss|less)$": "identity-obj-proxy"
    },
    transform:{ '\\.js$': 'ts-jest'},
    setupFiles: ['raf/polyfill'],
    preset: 'ts-jest',
    collectCoverage: true,
    setupFilesAfterEnv: ['./setupTests.js'],
    coveragePathIgnorePatterns: ["<rootDir>/src/index.tsx"]

}

module.exports = config;