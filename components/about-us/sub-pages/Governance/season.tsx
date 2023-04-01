import { Box, Heading, Text, Stack, Flex, Button } from '@chakra-ui/react'
import { FiArrowUpRight } from 'react-icons/fi'

import Link from 'next/link'

const SeasonButton = ({ season, url }) => {
  return (
    <Link href={url} passHref>
      <Button
        minWidth={{ base: '8rem', md: '12rem' }}
        mt={'1rem'}
        bg={'#2B2B2B'}
        color={'white'}
        _hover={{
          bg: 'red',
        }}
        _focus={{
          border: 'none',
        }}
      >
        <Flex direction={'row'} alignItems={'center'} gap={'4px'}>
          <Text fontSize={{ base: 'sm', md: 'md' }}>Season {season}</Text>
          <FiArrowUpRight size={18} />
        </Flex>
      </Button>
    </Link>
  )
}

export default function GovernanceSeasonComponent() {
  return (
    <>
      <Stack
        as={Box}
        spacing={{ base: 4, md: 6 }}
        mt={'4rem'}
        background={'#220001'}
        padding={'2.5rem'}
        borderRadius={'1rem'}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          lineHeight={'110%'}
          color={'white.100'}
        >
          SEASONS
        </Heading>
        <Text color={'grey'} fontSize={{ sm: 'sm', md: 'md' }}>
          A Season at bDAO is similar to a corporate quarter and generally lasts
          three months. They provide funding landmarks for bDAO coordinators and
          the Grants Committee. Each season has a fixed amount of BANK allocated
          to pay contributors in the DAO.
        </Text>

        <Text color={'white.100'} fontSize={{ sm: 'sm', md: 'md' }} mt={'2rem'}>
          Read our Seasonal Specifications on Mirror:
        </Text>

        <Flex
          direction={{ base: 'column', xl: 'row' }}
          justify={{ base: 'center', md: 'space-between' }}
        >
          <SeasonButton
            season={1}
            url={
              'https://banklessdao.mirror.xyz/6i468DL59XhCAyfPoY3UA3h2uEDkkqWeiryuKkXOmBI'
            }
          />
          <SeasonButton
            season={2}
            url={
              'https://banklessdao.mirror.xyz/Q3pMMBLblRHub5DW7wjsFhflqzlVLlBIhEjd9JwUjhk'
            }
          />
          <SeasonButton
            season={3}
            url={
              'https://banklessdao.mirror.xyz/Ot8KDnNHZhN9-ZIp0hWUSblyPs83HfdMr7Kfp3HVoxw'
            }
          />
          <SeasonButton
            season={4}
            url={'https://season4.bankless.community/'}
          />
        </Flex>
      </Stack>
    </>
  )
}
