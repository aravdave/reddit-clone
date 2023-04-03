import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

export default function Navbar({ children }: Props) {
  return (
    <Flex bg="white" height='44px' padding="6px 12px">
      <Flex>Logos</Flex>
    </Flex>
  )
}