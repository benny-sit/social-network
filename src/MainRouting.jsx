import React from 'react'
import { Routes, Route, useMatch} from 'react-router-dom'
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import Messages from './Messages';

export default function MainRouting() {
  // let match = useMatch();
  // console.log(match);
  return (
    <Routes>
        <Route index path="/social-network/" element={<Home />} />
        <Route path="/social-network/search" element={<Search />} />
        <Route path="/social-network/profile" element={<Profile />} />
        <Route path="/social-network/messages" element={<Messages />} />
        
    </Routes>
  )
}
