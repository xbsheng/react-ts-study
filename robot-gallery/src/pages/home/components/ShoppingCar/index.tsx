import React, { Component } from 'react'

import style from './style.module.css'

interface Props {
}

interface State {
  isOpen: boolean
}

export default class index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    const { isOpen } = this.state
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      console.log(e)
      this.setState({ isOpen: !isOpen })
    }
    return (
      <div>
        <button onClick={handleClick}>
          <span>shopping-car</span>
        </button>
        <div className={style.shoppingCarListContainer}>
          {
            isOpen &&
            <ul className={style.shoppingCarList}>
              <li>111</li>
              <li>222</li>
              <li>333</li>
            </ul>
          }
        </div>
      </div>
    )
  }
}
