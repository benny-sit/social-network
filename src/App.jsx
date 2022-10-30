import { useState } from 'react'
import { Container } from './Components/Container'
import {GlobalStyle} from './Components/Styles/Global'
import LeftSideBar from './Home/LeftSideBar'
import RightSideBar from './Home/RightSideBar'
import UserFeed from './Home/UserFeed'
import NavBottom from './NavBottom'
import Home from './Home'
import MainRouting from './MainRouting'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle />
    <NavBottom />
      <main>
        <Container>
          <MainRouting />
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App
