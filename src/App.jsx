import { Suspense, lazy } from 'react'
import { Route } from 'wouter'

import './App.css.ts'

const InitGamePage = lazy(() => import('./pages/InitGamePage'))
const GamePage = lazy(() => import('./pages/GamePage'))

export default function App() {
  return (
    <>
      <Suspense fallback='Loading...'>
        <Route path='/' component={InitGamePage} />
        <Route path='/game' component={GamePage} />
      </Suspense>
    </>
  )
}
