import React from 'react'
import Filters from './components/Filters'
import Profile from './components/Profile'
import RepoList from './components/RepoList'
import Search from './components/Search'
import Layout from './components/Layout'
import repoData from './components/repos-data'


/* const repoList=[
  {
    name:'mi primer proyecto con react',
    id:123,
  },
  {
    name:'mi segundo proyecto co react',
    id:122,
  },
] */

const App = () => {
  return (
    <div> 
     <Layout>
        <Profile/>
        <Filters/>
        <RepoList repoList={repoData} />
        <Search/>
      </Layout>
    
  </div>
  )
}

export default App