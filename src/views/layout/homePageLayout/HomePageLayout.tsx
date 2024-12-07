import LightDarkButton from '@/components/Mode/LightDarkButton'
import HomePageHeader from '@/composites/homePageHeader/HomePageHeader'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const HomePageLayout = (props: Props) => {
  return (
    <>
    <HomePageHeader>
        
    </HomePageHeader>

            <Outlet/>
    </>
  )
}

export default HomePageLayout