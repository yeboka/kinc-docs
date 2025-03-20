---
sidebar_position: 4
---
# Использование Redux в проекте
## Описание

Этот код реализует конфигурацию **Redux** хранилища с использованием **Redux Toolkit** и **redux-persist** для сохранения состояния в `localStorage`. Хранилище управляет состоянием приложения, включая данные о задачах, пользователях, оборудовании, контактах, отзывах и других объектах. Компоненты могут взаимодействовать с состоянием через **Redux slices** и **thunks**, которые обрабатывают асинхронные запросы для загрузки данных.

## Структура хранилища

1. **`kinetic.slice.js`** — создает **slice** состояния с различными данными, такими как задачи, пользователи, оборудование и т.д.
2. **`kinetic.thunk.js`** — содержит **thunks** для асинхронных запросов, таких как загрузка задач, пользователей и других данных.
3. **`store.js`** — конфигурирует **Redux store** с использованием **redux-persist** для сохранения состояния в локальное хранилище.
4. **`StoreProvider.jsx`** — компонент, который оборачивает приложение в провайдер Redux, чтобы предоставить доступ к хранилищу всем дочерним компонентам.

## `kinetic.slice.js`

Этот файл создаёт **slice** состояния с помощью `createSlice` из Redux Toolkit. Он управляет состоянием данных, таких как задачи, пользователи, оборудование, контакты, и выполняет асинхронные действия через thunks.

### Начальное состояние:

```jsx
const initialState = {
    tasks: [],
    task: null,
    cabTasks: [],
    cabTask: null,
    files: [],
    users: [],
    user: null,
    cUsers: [],
    cUser: null,
    equipments: [],
    equipment: null,
    cabEquipments: [],
    cabEquipment: null,
    loading: false,
    error: null,
    currentUser: null,
    contacts: null,
    reviews: [],
    review: null,
    dashboard: null,
    userReviews: [],
    adminDashboard: null,
    notify: null,
    organizations: [],
    organization: null,
    equipDashboard: null,
    userEquipments: [],
    pUsers: [],
    pTasks: [],
};
```

### Слайс Redux:

```jsx
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTasks.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
        })
        .addCase(fetchTasks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    // Подобные обработчики для других асинхронных действий (например, fetchTask, fetchUsers, fetchEquipments и т.д.)
    },
});
```

- **`extraReducers`** управляют асинхронными запросами, обрабатывая различные состояния: `pending`, `fulfilled` и `rejected`.

## `kinetic.thunk.js`

В этом файле создаются **thunks** с помощью `createAsyncThunk` для асинхронных запросов, таких как получение данных о задачах, пользователях, оборудовании и других сущностях.

### Пример асинхронного действия:

```jsx
export const fetchTasks = createAsyncThunk(
'tasks/fetchTasks',
async (queryOptions, { rejectWithValue }) => {
try {
const response = await kineticApi.getTasks(queryOptions);
return response.data;
} catch (error) {
return rejectWithValue(error.response);
}
}
);
```

Каждое действие использует **kineticApi** для отправки запросов и возвращает данные или ошибку в зависимости от ответа.

## `store.js`

Файл конфигурирует **Redux store** с использованием **redux-persist**, чтобы автоматически сохранять состояние в `localStorage` и восстанавливать его при перезагрузке страницы.

### Создание хранилища:

```jsx
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from '@/lib/slices/kinetic.slice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
key: 'root',
storage,
};

const rootReducer = combineReducers({
app: appReducer,
});

// Создание persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
return configureStore({
reducer: persistedReducer,
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware({
serializableCheck: false, // Отключение проверки сериализуемости для redux-persist
}),
});
};

export const store = makeStore();
```

## `StoreProvider.jsx`

Этот компонент оборачивает ваше приложение в **Provider** из **react-redux** и предоставляет доступ к **Redux store** для всех дочерних компонентов.

### Пример использования:

```jsx
import { store } from "@/lib/store";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }) => {
return (
<Provider store={store}>
{children}
</Provider>
);
};
```

## Пример использования в приложении:

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '@/lib/slices/kinetic.slice';

const MyComponent = () => {
const dispatch = useDispatch();
const currentUser = useSelector((state) => state.app.currentUser);

const updateUser = () => {
dispatch(setCurrentUser({ name: 'John Doe' }));
};

return (
<div>
<p>Текущий пользователь: {currentUser?.name}</p>
<button onClick={updateUser}>Обновить пользователя</button>
</div>
);
};
```

## Зависимости

- **Redux Toolkit**: для создания слайсов и асинхронных действий.
- **Redux Persist**: для сохранения состояния в `localStorage`.
- **React-Redux**: для взаимодействия с Redux в компонентах.

## Заключение

Этот набор файлов предоставляет полную конфигурацию для использования Redux в приложении с поддержкой сохранения состояния и асинхронных запросов. Хранилище настроено для работы с большими объемами данных, таких как задачи, пользователи, оборудование, и позволяет компонентам динамически обновлять и сбрасывать фильтры, а также управлять состоянием приложения через **Redux**.
