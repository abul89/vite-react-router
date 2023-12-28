import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart,Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Age 65+',
          male: 1000,
          female: 800,
          amt: 2400,
        },
        {
          name: 'Age 55+',
          male: 2000,
          female: 1000,
          amt: 2210,
        },
        {
          name: 'Age 45+',
          male: 3000,
          female: 2400,
          amt: 2290,
        },
        {
          name: 'Age 35+',
          male: 3800,
          female: 2400,
          amt: 2000,
        },
        {
          name: 'Age 25+',
          male: 4000,
          female: 3000,
          amt: 2181,
        },
        {
          name: 'Age 15+',
          male: 3500,
          female: 2500,
          amt: 2500,
        },
        {
          name: 'Age 10+',
          male: 500,
          female: 200,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

        <div className='charts'>

            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="male" fill="#8884d8" />
                <Bar dataKey="female" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>


        </div>
      
        <p>A comprehensive Customer Relationship Management (CRM) application with
seamless integration capabilities for popular social media platforms such as Instagram,
LinkedIn, and Facebook.</p>
    
    </main>
  )
}

export default Home