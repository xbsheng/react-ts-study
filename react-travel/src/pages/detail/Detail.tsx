import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface Params {
  id: string
}

export const Detail = (props: RouteComponentProps<Params>) => {
  console.log(props)
  return (
    <div>
      <h2>detail---{props.match.params.id}</h2>
    </div>
  )
}
