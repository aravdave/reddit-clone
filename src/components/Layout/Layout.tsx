import React, { ReactNode } from 'react'
import Navbar from '../Navbar/Navbar'


type Props = {
  children?: ReactNode
}

export default function Layout({children, ...props}: Props) {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}