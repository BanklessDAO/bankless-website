import React from 'react'
import Image from 'next/image'

import {
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
} from '@chakra-ui/react'

class Section1 extends React.Component {
  render() {
    return (
      <Flex flexDir='column' justifyContent='center' alignItems='center'>
        <Image
          src='/icons/bankless-square.jpg'
          height={250}
          width={250}
          alt='bankless-logo'
        />
        <Text fontSize='6xl' className='banner-text'>
          Media and Social DAO Onboarding 1 billion people to crypto
        </Text>

        <div className='banner-underline'>&nbsp;</div>

        <InputGroup width={400} className='join-us-group'>
          <Input
            // pr='4.5rem'
            type='text'
            placeholder={`We're Headed West`}
          />
          <InputRightElement width={150}>
            <Button
              size='sm'
              width='100%'
              margin='8px'
              bg='#FF1A1A'
              onClick={() => null}>
              Join Us
            </Button>
          </InputRightElement>
        </InputGroup>

        <Image
          src='https://s3-alpha-sig.figma.com/img/0d4d/fb58/54a73a14f7a41a09c96399acb634a29d?Expires=1646006400&Signature=IH8AXlx7ICC~PgYQIzFVNAUpOIeST-pImvgQEKnewMIn-LF1s-E0Y6rCAFltjbjwb1u4JBgVh8lvMzIxcZ0nEvKHM58qB4JxXR~naGC8AntEZoOqLS-1bIfqrsFEvkMs-uRzCeHoJKH5YBtTdRD6-rRF7ZlmUqkB0az11R3jUG4FnlKhIEvyoZAyGbIyF-xxZXIJWDBgfx5OAdo44Iv1IOuKq7XG80Bh-uSBPCgo-UjJ-pbJY942LLAxmmo8uSWmTHPMwnRl8326sANGRDL~YjN-~fvOAQTEf3bGlfiSEp38xCGcQUmT8QHOS79N9dLiLhpabmJQYLzKgQUnBiyrlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
          height='600'
          width='800'
          alt='bankless-gif'
        />
      </Flex>
    )
  }
}

export default Section1
