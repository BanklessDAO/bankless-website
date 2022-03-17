import React from "react"
import { Box, Image } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
        <Image
          src='/icons/bankless-logo.png'
          height={56}
          width={56}
          alt='dao-logo'
        />
    </Box>
  )
}