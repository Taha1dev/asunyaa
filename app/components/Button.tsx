import React from 'react'
interface ButtonProps {
  text: string,
  onClick?: () => void
}
export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className='bg-foreground text-white px-4 py-2 rounded font-semibold'>{props.text}</button>
  )
}
