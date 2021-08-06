import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import logo from '../../assets/images/logo.svg'
import Robot from './components/Robot'
import ShoppingCar from './components/ShoppingCar'

const Home: React.FC = () => {
  const [robots, setRobots] = useState<any[]>([])
  useEffect(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      console.log(data)
      setRobots(data)
    })()
  }, [])
  return (
    <div>
      <h2 className={style.title}>
        <img className={style.logo} src={logo} alt="" />
        <span>home123</span>
      </h2>
      <hr />
      <ShoppingCar />
      <div className={style.robotContainer}>
        {robots.map(item => <Robot key={item.id} id={item.id} name={item.name} email={item.email} />)}
      </div>
    </div>
  )
}

export default Home
