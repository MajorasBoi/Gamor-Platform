module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        '@typescript-eslint'
    ],
    "rules": {
        "import/no-absolute-path": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/ban-types": "off"
    }
}
