import React from "react";
import "./App.css";
import { NewExpense } from "./components/new-expense/NewExpense";
import { Expenses } from "./components/expenses/Expenses";
import { useState } from "react";
import { Login } from "./components/login/Login";
import { Header } from "./components/header/Header";
import { useEffect } from "react";
import { Users } from "./components/user/Users";

function App() {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [user, setUser] = useState(false);
  console.log("isloggedIn", isloggedIn);

  function getLogin() {
    setIsloggedIn(true);
    localStorage.setItem("nurlan", !isloggedIn);
  }

  function closeLogin() {
    setIsloggedIn((prev) => !prev);
    setUser(false);

    localStorage.removeItem("nurlan");
  }

  useEffect(() => {
    const getLocal = localStorage.getItem("nurlan");
    setIsloggedIn(getLocal);
  }, []);

  function ExpensHandler() {
    setUser(false);
  }
  // !
  function UserMaps() {
    setUser(true);
  }

  const [newExpense, setNewExpense] = useState([
    {
      id: "1",
      title: "Рюкзак",
      price: 120,
      date: new Date("2023, 2, 9"),
    },
  ]);

  const addNewExpense = (data) => {
    setNewExpense([...newExpense, data]);
  };
  return (
    <div className="App">
      <Header
        onLogin={getLogin}
        closeLogin={closeLogin}
        UserMaps={UserMaps}
        isloggedIn={isloggedIn}
        expensHandler={ExpensHandler}
      />
      {isloggedIn ? (
        <>
          {user ? (
            <Users closeLogin={closeLogin} />
          ) : (
            <div>
              <NewExpense addNewExpense={addNewExpense} />
              <Expenses newExpense={newExpense} />
            </div>
          )}
        </>
      ) : (
        <Login getLogin={getLogin} />
      )}
    </div>
  );
}

export default App;
