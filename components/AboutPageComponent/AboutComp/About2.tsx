import React from 'react'

const About2 = () => {
  const stats = [
    {
      number: '50+',
      label: 'Satisfied Clients'
    },
    {
      number: '50+',
      label: 'Projects Completed'
    },
    {
      number: '30+',
      label: 'Innovative Employees'
    },
    {
      number: '7+',
      label: 'Awards Taken'
    }
  ]

  return (
    <div className="text-white py-16 px-8" style={{ backgroundColor: '#5a3d99' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {stat.number}
              </h2>
              <p className="text-lg md:text-xl font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About2