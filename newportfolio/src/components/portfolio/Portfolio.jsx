import React from 'react'
import './portfolio.css'
import { Card } from '../card/Card'
import { Footer } from '../footer/Footer'

export const Portfolio = () => {
  return (
    <div >
      <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
      <Footer />
    </div>
  )
}
