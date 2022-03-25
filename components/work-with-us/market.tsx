import {
  Box,
  Heading,
  Text,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'
import TabContentComponent from './Market/TabContent'

type MarketComponentProps = {
  width: number
}

export default function MarketComponent(props: MarketComponentProps) {
  const { width } = props

  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 3, md: 5 }}
        py={{ base: 10, md: 18 }}
        mt={{ base: 10, md: 16 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}
        >
          Sponsorships and Marketing
        </Heading>
        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'md' }}>
          Scale your presence in Web3
        </Text>
      </Stack>

      <Tabs
        align='center'
        variant='unstyled'
        colorScheme='green'
        py={{ base: 10, md: 14 }}
        orientation={width < 576 ? 'vertical' : 'horizontal'}
        flexDirection='column'
      >
        <TabList>
          <Tab
            color={'white.100'}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
          >
            NEWSLETTER SPONSORSHIPS
          </Tab>
          <Tab
            color={'white.100'}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
          >
            PODCAST SPONSORSHIPS
          </Tab>
          <Tab
            color={'white.100'}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
            fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
          >
            MARKETING SERVICES
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TabContentComponent />
          </TabPanel>
          <TabPanel>
            <TabContentComponent />
          </TabPanel>
          <TabPanel>
            <TabContentComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
