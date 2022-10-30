import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import Messages from './Messages';

export default function MainRouting() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
    </Routes>
  )
}
