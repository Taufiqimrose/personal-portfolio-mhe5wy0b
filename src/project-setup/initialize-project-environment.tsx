npx create-next-app@latest personal-portfolio --typescript
cd personal-portfolio
npm install eslint --save-dev
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
echo "module.exports = { extends: ['eslint:recommended', 'plugin:prettier/recommended'], parser: '@typescript-eslint/parser', plugins: ['@typescript-eslint'], rules: { '@typescript-eslint/no-explicit-any': 'off' } };" > .eslintrc.js
echo "{ semi: true, singleQuote: true }" > .prettierrc
npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit "npm run lint"
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
echo "module.exports = { content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'], theme: { extend: {}, }, plugins: [], };" > tailwind.config.js
echo "{ \"version\": 2, \"builds\": [{ \"src\": \"next.config.js\", \"use\": \"@vercel/next\" }] }" > vercel.json