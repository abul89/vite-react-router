import React, { useState } from 'react'
import Mainlayout from '../Layout/Mainlayout'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Instagram = () => {

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
      title: 'Send your Instagram photos and videos to Slack as messages',
      para: "With this automation, photos and videos on your Instagram posts will be retrieved by Make and sent to Slack for your convenience."
    },
    {
      title: 'Save new Instagram posts to Airtable',
      para: "Every time you add a new Instagram post, it will be saved to Airtable. "
    },
    {
      title: 'Save new Instagram photos to Google Drive',
      para: "Every time you upload a new photo to Instagram, Make will automatically save that photo to a selected Google Drive folder."
    },
    {
      title: 'Post new Instagram photos to Slack',
      para: "Every time a new photo is added to Instagram, Make will automatically send that photo as a file to Slack."
    },


  ]);

  return (

    
    <Mainlayout >
      <h3>INSTAGRAM</h3>
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
          <h3>Instagram : Contribution</h3>
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

  );
}

export default Instagram;
