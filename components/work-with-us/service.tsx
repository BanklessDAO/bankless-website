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
import TabContentComponent from './Service/TabContent'

type ServiceComponentProps = {
  width: number
}

export default function ServiceComponent(props: ServiceComponentProps) {
  const { width } = props

  return (
    <>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 3, md: 5 }}
        py={{ base: 10, md: 18 }}
        mt={{ base: 10, md: 16 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          lineHeight={'110%'}
          color={'white.100'}>
          Creative Services
        </Heading>
        <Text color={'white.200'} fontSize={{ sm: 'sm', md: 'md' }}>
          Tell your story and reach a new audience
        </Text>
      </Stack>

      <Tabs
        align='center'
        variant='unstyled'
        colorScheme='green'
        py={{ base: 10, md: 14 }}
        orientation={width < 576 ? 'vertical' : 'horizontal'}
        flexDirection='column'>
        <TabList>
          <Tab
            color={'white.100'}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
            fontSize={{ base: '0.6rem', sm: 'xs', md: 'sm' }}>
            AUDIO/VISUAL SERVICES
          </Tab>
          <Tab
            color={'white.100'}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
            fontSize={{ base: '0.6rem', sm: 'xs', md: 'sm' }}>
            CUSTOM ARTICLES
          </Tab>
          <Tab
            color={'white.100'}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
            fontSize={{ base: '0.6rem', sm: 'xs', md: 'sm' }}>
            STATE OF THE DAOS NEWSLETTER FEATURE
          </Tab>
          <Tab
            color={'white.100'}
            _selected={{ borderBottom: '2px solid red' }}
            _focus={{ boxShadow: 'none' }}
            fontSize={{ base: '0.6rem', sm: 'xs', md: 'sm' }}>
            CUSTOM DESIGNS
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
          <TabPanel>
            <TabContentComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
