# 🚀 Create BJ React Template CLI

A custom CLI tool to rapidly scaffold modern React projects pre-configured with **Redux Toolkit**, **Material UI (MUI)**, scalable **API service integrations**, **class-based service methods**, centralized **React Context + custom hook setup**, and a hot-swappable **ThemeProvider** for dynamic theming.

Skip the repetitive boilerplate and start building scalable, maintainable apps with the best tooling in place from the start.

---

## 📦 Features

- ⚛️ **React (latest) project scaffolding**
- 📦 **Redux Toolkit (v2.8.2)** for state management
- 🎨 **Material UI (MUI) (v7.1.0)** for modern, responsive UI components
- 📡 **Scalable API integration setup via API services**
- 🏛️ **Class-structured methods** for API clients (clean, reusable, centralized)
- 📊 **Centralized React Context implementation** with a custom `useContext` hook
- 🎨 **Dynamic hot theme implementation** using a custom **ThemeProvider**
- ⚡ Rapid project scaffolding with a clean, organized folder structure
- 📁 Ready-to-extend **Redux slices**, **components**, **API services**, and **contexts**

---

## 🛠️ Installation

### Install the CLI Globally

```bash
npm install -g create-bj-react-template
```

## 🚀 Usage
### 1️⃣ Create a New Project

```bash
create-bj-react-template <project-name>

```

### 2️⃣ Navigate to the Project
```bash
cd my-app

```
### 3️⃣ Install Dependencies

```bash
npm install

```
### 4️⃣ Start the Development Server


```bash
npm start


```

## 📂 Generated Project Structure

my-app/
├── src/
│   ├── api/                # Scalable API services with class-structured methods
│   ├── components/         # MUI-based reusable components
│   ├── context/            # Centralized React Context + custom hook
│   ├── features/           # Redux Toolkit slices/features
│   ├── store/              # Redux store setup
│   ├── theme/              # ThemeProvider and hot theme management
│   ├── App.js              # Main app entry with MUI ThemeProvider
│   └── index.js            # App bootstrap
├── package.json            # Pre-configured with dependencies
└── ...                     # Standard React files


## 📡 API Service Architecture
Centralized apiService using Axios with interceptors

Clean, scalable class-structured service methods per API domain (e.g. AuthService, UserService)

Simplified and consistent API request handling

#### example 
``` tsx
import apiService from "./apiService";

class UserService {
  getAllUsers() {
    return apiService.get("/users");
  }

  getUserById(id) {
    return apiService.get(`/users/${id}`);
  }

  createUser(data) {
    return apiService.post("/users", data);
  }
}

export const userService = new UserService();

```

## 🏛️ Centralized Context + Custom Hook
Built-in context and hook pattern for scalable state management beyond Redux.

#### Example:

```tsx
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within a AppProvider");
  return context;
};

export const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");
  return (
    <AppContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </AppContext.Provider>
  );
};

```

## 🎨 Hot Theme Implementation
Global ThemeProvider wrapping the app via MUI theming

Dynamic light/dark mode toggle

Integrated with centralized context for seamless theme updates

#### Example:

``` tsx 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { themeMode } = useAppContext();

  const theme = createTheme({
    palette: { mode: themeMode },
  });

  return (
    <ThemeProvider theme={theme}>
      <MainRoutes />
    </ThemeProvider>
  );
};

```

## 📦 Included Dependencies

| Package            | Version | Purpose                  |
| :----------------- | :------ | :----------------------- |
| `@mui/material`    | ^7.1.0  | Material UI components   |
| `@reduxjs/toolkit` | ^2.8.2  | Redux state management   |
| `react-redux`      | ^9.2.0  | React bindings for Redux |
| `axios`            | latest  | API integration layer    |

## 📜 License
MIT © Blessed Raj P



