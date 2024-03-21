# Create

This is a React + TypeScript + Tailwind + Vite Project

- npm create vite@latest

# LIBS

- npm create vite@latest

- npm i @reduxjs/toolkit react-redux

- npm i axios

- npm i react-icons

- npm i react-router-dom

- npm i react-loader-spinner

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

# Run

- npm run dev


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
