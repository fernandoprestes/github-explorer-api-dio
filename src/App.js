import React from 'react'
import { Layout } from './components/layout'
import { NoSearch } from './components/no-search'
import { Profile } from './components/profile'
import { Repositories } from './components/repostories'
import { useGithub } from './hooks/github-hooks'

export const App = () => {
  const { githubState } = useGithub()
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  )
}
