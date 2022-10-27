import { useState } from 'react'
import { Container } from './Components/Container'
import {GlobalStyle} from './Components/Styles/Global'
import LeftSideBar from './Home/LeftSideBar'
import RightSideBar from './Home/RightSideBar'
import UserFeed from './Home/UserFeed'
import NavBottom from './NavBottom'

function App() {

  return (
    <>
    <GlobalStyle />
    <NavBottom />
    <main>
      <Container>
        <LeftSideBar />
        <UserFeed />
        <RightSideBar/>
      </Container>
    </main>
    </>
  )
}

export default App
