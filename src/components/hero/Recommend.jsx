import React from "react"
import { recommend, treading } from "../assets/data/data"
import { Card_sm } from "../common/Card_sm"
import { Title } from "../common/Title"

export const Recommend = () => {
  return (
    <>
      <section className='treading hero mt-7 pb-16 md:pb-24 lg:pb-32'>
        {/* <Title title='Recommend for you' /> */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5'>
          {/* {recommend.map((item, i) => (
            <Card_sm 
              key={i}
              cover={item.cover} 
              name={item.name} 
              tag={item.tag} 
              i={i} 
            />
          ))} */}
        </div>
      </section>
    </>
  )
}