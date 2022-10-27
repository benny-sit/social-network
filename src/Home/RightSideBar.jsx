import React from 'react'
import { IoLogoGithub } from 'react-icons/io5'
import { AboutSection, RightBar } from '../Components/RightBarComponents'
import ExploreSection from './ExploreSection'
import TrendingSection from './TrendingSection'

export default function RightSideBar() {
  return (
    <RightBar>
      <ExploreSection />
      <TrendingSection />
      
    </RightBar>
  )
}
