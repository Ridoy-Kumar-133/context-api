# React Context API Practice

A beginner-friendly React/Next.js practice project focused on understanding and implementing the **Context API**.

## 📌 About The Project

This project is created to learn how React Context API works and how shared data can be accessed by multiple components without passing props manually through every level.

In this project, I practiced:

* Creating a Context with `createContext()`
* Creating a Context Provider
* Passing data through the Provider
* Using `children` inside a Provider
* Accessing Context data with `useContext()`
* Sharing state with Context API
* Passing state values and state update functions through Context
* Understanding the relationship between Provider and child components

## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* JavaScript
* Context API
* Tailwind CSS

## 📂 Project Structure

```text
src/
├── app/
│   ├── context/
│   │   └── UserContext.tsx
│   │
│   ├── user/
│   │   └── page.tsx
│   │
│   └── layout.tsx
│
└── ...
```

## 🧠 Context API Example

The project creates a `UserContext` using `createContext()`:

```tsx
export const UserContext = createContext({});
```

The Provider shares user data and state:

```tsx
<UserContext.Provider value={is}>
  {children}
</UserContext.Provider>
```

The `value` contains:

```tsx
const is = {
  count,
  setCount,
  increse,
  setIncrease,
  users,
};
```

A child component can access the shared data using `useContext()`:

```tsx
const data = useContext(UserContext);

const { users } = data;
```

Then the user information can be displayed:

```tsx
<h1>User name: {users.name}</h1>
<h2>User age: {users.age}</h2>
```

## 🔄 How Context API Works

```text
createContext()
      ↓
Create Context
      ↓
Context Provider
      ↓
value={...}
      ↓
Child Components
      ↓
useContext()
      ↓
Access Shared Data
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Go to the project directory:

```bash
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## 🎯 Learning Goal

The main goal of this project is to understand how Context API can be used to share data and state between components without manually passing props through every component.

## 📚 What I Learned

Through this project, I learned:

1. How to create a Context.
2. How `createContext()` works.
3. How `Provider` shares data.
4. How `children` works inside a Provider.
5. How `useContext()` retrieves shared data.
6. How state and state update functions can be shared through Context.
7. How Context can help reduce prop drilling.

## 👨‍💻 Author

**Ridoy Kumar**

Aspiring Full-Stack Developer | React • Next.js • TypeScript

GitHub: [Ridoy-Kumar-133](https://github.com/Ridoy-Kumar-133)
