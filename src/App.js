import React from 'react'
import { Layout } from './components/layout'
import { Profile } from './components/profile'
import { Repositories } from './components/repostories'
import { ResetCSS } from './global/resetCSS'

export const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  )
}
