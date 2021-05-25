  
module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      '@vue/standard',
      '@vue/typescript/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
        "prettier/prettier": 0,
        "semi": ["error", "never"],
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "comma-spacing": [2, { "before": false, "after": true }],
        "no-console": 2,
        "space-before-function-paren": 0, // 函数需要空格
        "comma-dangle": 0, // 结尾逗号
        "no-useless-catch": 0,
        "no-case-declarations": 0,
        "no-unused-vars": 0,
        "@typescript-eslint/no-explicit-any": 2, // 不能使用any类型的
        "@typescript-eslint/no-var-requires": 2, // 不能使用var设置变量
        "@typescript-eslint/no-unused-vars": 2, // 不能有定义但未使用的变量
        "@typescript-eslint/no-non-null-assertion": 0 // 不能有定义但未使用的变量
    }
  }