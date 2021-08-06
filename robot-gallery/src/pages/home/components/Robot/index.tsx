import React from 'react'
import './index.css'

interface RobotProps {
  id: number,
  name: string,
  email: string
}

const Robot: React.FC<RobotProps> = props => {
  console.log(props);
  const { id, name, email } = props
  const robohash = 'https://robohash.org'
  return (
    <div className="robot">
      <img src={`${robohash}/${id}`} alt="zzz" />
      <h3>{name}</h3>
      <span>{email}</span>
    </div>
  )
}

export default Robot
