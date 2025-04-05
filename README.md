# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


Создать мини-приложение "Список задач" (To-Do List) с использованием React.

Требования:

1. Интерфейс:
 - Отобразить список задач.
 - Каждая задача должна содержать текст и кнопку "Удалить".
 - Добавить текстовое поле для ввода новой задачи и кнопку "Добавить".

2. Функционал:
 - Возможность добавлять новую задачу. После нажатия на кнопку "Добавить" задача должна появляться в списке.
-  Возможность перемещать порядок задач через drag&amp;drop
 - Возможность удалять задачу из списка.
 - Подсветка выполненных задач: при клике на задачу она должна становиться "выполненной" (например, зачеркнутой или с изменённым стилем).

3. Сохранение состояния:
 - Реализовать сохранение состояния в LocalStorage, чтобы при обновлении страницы список задач сохранялся.

4. Стилизация:
 - Простая стилизация для отображения списка и кнопок. Можно использовать CSS или встроенные стили.

5. Дополнительно (необязательно, если хватит времени):
 - Добавить возможность фильтровать задачи: "Все", "Выполненные", "Невыполненные".
 - Реализовать базовые тесты для функционала добавления и удаления задач.
