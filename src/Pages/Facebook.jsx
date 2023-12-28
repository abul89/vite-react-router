import React, { useState } from 'react'
import Mainlayout from '../Layout/Mainlayout'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Facebook = () => {
    const data = [
        {
          name: '2017',
          uv: 1000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: '2018',
          uv: 1500,
          pv: 1398,
          amt: 2210,
        },
        {
          name: '2019',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: '2020',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: '2021',
          uv: 3000,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '2022',
          uv: 3500,
          pv: 3800,
          amt: 2500,
        },
        {
          name: '2023',
          uv: 4000,
          pv: 4300,
          amt: 2100,
        },
      ];
      
    
      const [cards] = useState([
        {
          title: 'Business Tools',
          para: "Build and scale your business across multiple interactive touch points."
        },
        {
          title: 'Open Source',
          para: "Empowering community through open source technology. "
        },
        {
          title: 'Gaming',
          para: "Access a suite of innovative gaming platforms and services."
        },
        {
          title: 'Social Integrations',
          para: "Explore tools and resources to help you grow your audiences on Facebook, Instagram, and beyond."
          
        },
    
    
      ]);
  return (
    <Mainlayout >
        <h3>FACEBOOK</h3>
    <div className='instagram'>
    <section>
      <div className='containe'>
        <div className='cardss'>
          {
            cards.map((card, i) => (
              <div key={i} className='cardsss'>
                <h3>{card.title}</h3>
                <p>{card.para}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
    <article>
      <div className='chartss'>
        <h3>Facebook : Contribution</h3>
      <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
      </div>
    </article>
    </div>
    
  </Mainlayout>
  )
}

export default Facebook