import react from 'eslint-plugin-react';
import parser from '@typescript-eslint/parser';

export default [{
    plugins: {
        react,
    },
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
        parser,
        ecmaVersion: 12,
        globals: {
            browser: true,
            commonjs: true,
            es2021: true,
            webextensions: true,
        },
    },
    rules: {
        quotes: [
            'error',
            'single',
        ],
        semi: [
            'error',
            'always',
        ],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            imports: 'never',
            exports: 'never',
            functions: 'never',
            objects: 'always-multiline',
        }],
        indent: 'error',
        'quote-props': [
            'error',
            'as-needed',
        ],
    },
    ignores: ['dist/**'],
}];