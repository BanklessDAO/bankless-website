import React from 'react'
import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import { ulid } from 'ulid'

type ICard = {
  title: string
  text: string
  badges?: Array<string>
}

type CardProps = {
  card: ICard
  index: number
}

export const Card = ({ card, index }: CardProps) => (
  <Box key={ulid()}>
    <Box
      boxShadow={'2xl'}
      borderRadius='10px'
      background='#222020'
      maxWidth={'330px'}
      minHeight={{ base: '450px', md: '500px' }}
      padding='1.5rem'
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}>
      <Heading
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        color={'white'}
        background={'red'}
        textAlign={'center'}
        borderRadius={'50%'}
        padding={'0.3rem 0.9rem'}
        width='min-content'>
        {index + 1}
      </Heading>
      <Heading
        fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}
        color={'white'}
        mt={'1rem'}>
        {card.title}
      </Heading>
      <Text fontSize={{ base: 'sm', lg: 'md' }} color={'white'} mt={'1rem'}>
        {card.text}
      </Text>
      {card.badges && (
        <Flex flexWrap={'wrap'} justifyContent={'flex-start'} mt={'1rem'}>
          {card.badges.map(badge => {
            return (
              <Text
                key={ulid()}
                fontSize={{ base: 'sm' }}
                whiteSpace={'nowrap'}
                color={'red'}
                paddingRight={'0.7rem'}>
                {badge}
              </Text>
            )
          })}
        </Flex>
      )}
    </Box>
  </Box>
)
