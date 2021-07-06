import React, { useEffect, useReducer } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./components/Home"
import CategorySelection from './components/CategorySelection'
import NewEntry from './components/NewEntry'
import NotFound from './components/NotFound'
import Nav from './components/Nav'
import stateReducer, { stateContext } from './stateReducer'

function App() {
  const [store, dispatch] = useReducer(stateReducer, {
    categories: [],
    entries: []
  })

  useEffect(async () => {
    const res = await fetch("http://localhost:4000/api/v1/categories")
    const data = await res.json()
    console.log(data)
    dispatch({
      type: "setCategories",
      categories: data
    })
  }, [])

  return (
    <stateContext.Provider value={{...store, dispatch}}>
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
    </stateContext.Provider>
  )
}

export default App
