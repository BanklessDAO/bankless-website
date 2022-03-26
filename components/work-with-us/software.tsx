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
import SoftwareTabContentComponent from './Software/TabContent'

type SoftwareComponentProps = {
  width: number
}

export default function SoftwareComponent(props: SoftwareComponentProps) {
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
          Software and DAO tooling
        </Heading>
        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'md' }}>
          Level-up your organization with cutting-edge tooling
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
            fontSize={{ base: '0.6rem', sm: 'xs', md: 'sm' }}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
          >
            DEGEN
          </Tab>
          <Tab
            color={'white.100'}
            fontSize={{ base: '0.6rem', sm: 'xs', md: 'sm' }}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
          >
            BOUNTY BOARD
          </Tab>
          <Tab
            color={'white.100'}
            fontSize={{ base: '0.6rem', sm: 'xs', md: 'sm' }}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
          >
            DAO DASH
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SoftwareTabContentComponent />
          </TabPanel>
          <TabPanel>
            <SoftwareTabContentComponent />
          </TabPanel>
          <TabPanel>
            <SoftwareTabContentComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
