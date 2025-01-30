import React from "react"
import { Hero, LayoutSidebar, New, Recommend, Treading } from "../router"

export const Home = () => {
  return (
    <>
      <Hero />
      <LayoutSidebar>
        <Treading />
        <New />
        <Recommend />
      </LayoutSidebar>
    </>
  )
}

