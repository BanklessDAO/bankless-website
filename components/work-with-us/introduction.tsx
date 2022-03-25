import { Box, Heading, Text, Stack, Image } from '@chakra-ui/react'

export default function IntroductionComponent() {
  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 10, md: 18 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'110%'}
          color={'white.100'}
        >
          Web3 products and services <br />
          <Text
            as={'span'}
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            color={'white.100'}
          >
            from crypto-native contributors
          </Text>
        </Heading>
        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'md' }}>
          BanklessDAO has multiple consulting, media, and development arms
          within its arsenal.
          <br />
          Commission BanklessDAO’s talent now:
        </Text>
      </Stack>
      <Image
        src='https://s3-alpha-sig.figma.com/img/0f18/3244/e837c8f46ec201516964fef09d67be10?Expires=1649030400&Signature=ci4FqcBv7OM7OU7FEjfQVyEITgrC7mel8HZWDf9hG~nGoR03MmFcfiFpKahD8wUd0-peecweyMdY9VblOZ3yAQIJLGRp6uc0pZnccK4LDdJh4Locpy08ErbRHVeu61nyW-USSFRmPc9Ymdgi7DKc~DkmzlZIty-bwGMaBKwaKskJfMCkpCxwYeH8RQibW4Kuyd9KDKBgnTVbeSYcAZ2BTjG3a~qTE3IyVTeFL4ZAOjQZnFcVYCro0pfxYw1JvfckD1D7Gv9JGWBanbYfip6VXNJAZGDckZj2OjiYWytC0wV8P0obP00bdhaDJnambeVRFDGplUPvzukuQNRj0-N0Vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        alt='Web3 products and services'
        height={{ sm: '27rem', lg: '31rem' }}
        width={'full'}
      />
    </>
  )
}
