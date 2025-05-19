import React from 'react'
import { Routes, Route } from 'react-router'
import routes from './routes/routes'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          )
        })}
      </Routes >
    </>
  )
}
export default App
