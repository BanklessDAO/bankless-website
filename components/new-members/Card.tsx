import React from 'react'
import {
  Heading,
  Text,
  VStack,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react'
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

const CardBadge = ({ number }: { number: number }) => (
  <Grid
    as='figure'
    templateColumns='1fr'
    templateRows='1fr'
    bg='#D02128'
    borderRadius='50%'
    w='3rem'
    h='3rem'
    alignItems='center'>
    <GridItem rowSpan={1} colSpan={1}>
      <Text
        h='100%'
        w='100%'
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        color={'white'}
        textAlign={'center'}>
        {number + 1}
      </Text>
    </GridItem>
  </Grid>
)

export const Card = ({ card, index }: CardProps) => (
  <VStack
    flex='0 0 33%'
    key={ulid()}
    minHeight='34vw'
    padding={{ base: '1rem', md: '1.5rem' }}
    alignItems='start'
    justifyContent='start'
    backgroundColor='rgba(100, 100, 100, 0.26)'
    borderRadius={'1rem'}
    boxShadow={'0 0.5% 1% rgba(0,0,0,.6)'}
    backdropFilter='blur(4px)'
    zIndex={1}>
    <CardBadge number={index} />
    <Heading
      color={'gray.100'}
      fontSize={{ base: '2xl', md: '4xl', lg: '4xl' }}
      fontWeight={700}
      fontFamily='Clear Sans'
      pt='0.5rem'>
      {card.title}
    </Heading>
    <Text
      color={'gray.100'}
      fontSize={{ base: 'xl', md: 'xl' }}
      textOverflow='wrap'
      fontFamily='Clear Sans'
      lineHeight='1.4'>
      {card.text}
    </Text>
    {card.badges && (
      <Flex flexWrap={'wrap'} justifyContent={'flex-start'} mt={'1rem'}>
        {card.badges.map(badge => {
          return (
            <Text
              key={ulid()}
              color={'gray.100'}
              fontSize={{ base: 'xl', md: 'xl' }}
              textOverflow='wrap'
              fontFamily='Clear Sans'
              lineHeight='1.4'>
              {badge}
            </Text>
          )
        })}
      </Flex>
    )}
  </VStack>
)
