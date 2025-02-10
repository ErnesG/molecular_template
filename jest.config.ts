export default {
    preset: "ts-jest",
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: 'tsconfig.test.json'
        }]
    },
    moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx', 'json', 'node']
}
