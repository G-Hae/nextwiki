import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends(
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'next/typescript',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript'
    ),
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'import/order': [2, { alphabetize: { order: 'asc' } }],
            'prettier/prettier': [
                'error',
                { trailingComma: 'all', endOfLine: 'lf', semi: false, singleQuote: true, printWidth: 80, tabWidth: 1 },
            ],
        },
    },
];

export default eslintConfig;
