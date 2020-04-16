module.exports = {
    "jsRules": {
        "no-unused-expression": true
    },
    'rules': {
        'quotemark': [true, 'single'],
        'max-line-length': [true, 150],
        'member-ordering': [false],
        'interface-name': [false],
        'arrow-parens': false,
        'object-literal-sort-keys': false,
        'semicolon': [
            true,
            'never'
        ],
        'import-spacing': true,
        'indent': [
            true,
            'spaces'
        ],
        'comment-format': [
            true,
            'check-space'
        ],
        'member-access': [true, 'no-public', 'check-constructor'],
        'no-arg': true,
        'no-bitwise': true,
        'no-console': [
            true,
            'debug',
            'info',
            'time',
            'timeEnd',
            'trace'
        ],
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-super': true,
        'no-empty': false,
        'no-empty-interface': true,
        'no-eval': true,
        'no-inferrable-types': [
            true,
            'ignore-params'
        ],
        'ordered-imports': [
            true,
            {
                'import-sources-order': 'lowercase-last',
                'named-imports-order': 'lowercase-first',
                'grouped-imports': true
            }
        ],
        'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-type'
        ],
        'prefer-const': true,
        'prefer-for-of': true,
        'prefer-object-spread': true,
        'no-duplicate-imports': true,
        'no-import-side-effect': true,
        'no-invalid-this': true,
        'array-type': [true, 'array'],
        'variable-name': {
            'options': [
                'ban-keywords',
                'check-format',
                'allow-leading-underscore',
                'allow-pascal-case',
                'allow-snake-case'
            ]
        },
        'max-classes-per-file': false
    },
    'rulesDirectory': []
}
