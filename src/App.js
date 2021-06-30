import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from "./components/Home"
import CategorySelection from './components/CategorySelection'
import NewEntry from './components/NewEntry'
import NotFound from './components/NotFound'
import Nav from './components/Nav'

function App() {
  const defaultCategories = ["food", "coding", "tv", "other"]
  const [categories, setCategories] = useState(defaultCategories)
  const [entries, setEntries] = useState([])
  const history = useHistory()

  const addEntry = (category_id, text) => {
    const entry = { category: category_id, text: text }
    // const newEntries = entries.slice()
    // newEntries.push(entry)
    // setEntries(newEntries)
    setEntries([...entries, entry])
  }

  return (
    <>
      <h1>Journal</h1>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home {...{ categories, entries }} />
          </Route>
          <Route exact path="/entry/new/:category_id">
            <NewEntry {...{ categories, addEntry }} />
          </Route>
          <Route exact path="/category">
            <CategorySelection {...{ categories }} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
