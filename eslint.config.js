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
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'comma-dangle': ['error', {
            arrays: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never',
            objects: 'always',
        }],
        indent: 'error',
        'quote-props': [
            'error',
            'as-needed'
        ],
    },
    ignores: ['dist/**'],
}];