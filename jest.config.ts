export default {
    preset: "ts-jest",
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: ['js','ts', 'tsx', 'jsx', 'json', 'node']
}
