import React, { useContext, useEffect, useReducer } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import CategorySelection from "./components/CategorySelection"
import NewEntry from "./components/NewEntry"
import NotFound from "./components/NotFound"
import Nav from "./components/Nav"
import stateReducer, { stateContext } from "./stateReducer"
import Login from "./components/Login"

function App() {
  const [store, dispatch] = useReducer(stateReducer, {
    categories: [],
    entries: [],
    token: localStorage.getItem("token")
  })

  useEffect(async () => {
    if (!store.token) return
    const res = await fetch("http://localhost:4000/api/v1/categories")
    const data = await res.json()
    if (res.status === 200) {
      dispatch({
        type: "setCategories",
        categories: data,
      })
    } else {
      localStorage.setItem("token")
      dispatch({
        type: "setToken",
        data: { token: null },
      })
    }
  }, [store.token])

  useEffect(async () => {
    if (!store.token) return
    const res = await fetch("http://localhost:4000/api/v1/entries")
    const data = await res.json()
    dispatch({
      type: "setEntries",
      entries: data,
    })
  }, [store.token])

  return (
    <stateContext.Provider value={{ ...store, dispatch }}>
      {store.token ? <>
        <h1>Journal</h1>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/entry/new/:category_id" component={NewEntry} />
            <Route exact path="/category" component={CategorySelection} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </> : <Login />}
    </stateContext.Provider>
  )
}

export default App
