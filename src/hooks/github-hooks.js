import { useContext } from 'react'
import { GitHubContext } from '../providers/github-provider'

export const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStarred } = useContext(GitHubContext)

  return { githubState, getUser, getUserRepos, getUserStarred }
}
