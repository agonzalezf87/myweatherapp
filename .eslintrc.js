module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": { "extensions": [".js", ".jsx"] }
    }
}
