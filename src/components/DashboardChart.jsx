import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

const data = [
  { name: 'Jan', words: 4000, content: 24 },
  { name: 'Feb', words: 3000, content: 13 },
  { name: 'Mar', words: 5000, content: 20 },
  { name: 'Apr', words: 2780, content: 18 },
  { name: 'May', words: 1890, content: 12 },
  { name: 'Jun', words: 7500, content: 28 },
  { name: 'Jul', words: 5200, content: 22 }
]

const DashboardChart = ({ darkMode }) => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorWords" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6e45e2" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#6e45e2" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorContent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#88d3ce" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#88d3ce" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            stroke={darkMode ? '#9ca3af' : '#6b7280'} 
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke={darkMode ? '#9ca3af' : '#6b7280'} 
            tickLine={false}
            axisLine={false}
          />
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke={darkMode ? '#374151' : '#e5e7eb'} 
            vertical={false}
          />
          <Tooltip 
            contentStyle={darkMode ? { 
              backgroundColor: '#1f2937', 
              borderColor: '#374151',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            } : { 
              backgroundColor: '#fff', 
              borderColor: '#e5e7eb',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
            itemStyle={darkMode ? { color: '#f9fafb' } : { color: '#111827' }}
          />
          <Area 
            type="monotone" 
            dataKey="words" 
            stroke="#6e45e2" 
            fillOpacity={1} 
            fill="url(#colorWords)" 
            strokeWidth={2}
          />
          <Area 
            type="monotone" 
            dataKey="content" 
            stroke="#88d3ce" 
            fillOpacity={1} 
            fill="url(#colorContent)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DashboardChart