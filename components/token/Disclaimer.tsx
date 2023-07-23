import React from 'react'
import { Flex, Container, Link, VStack, Text, UnorderedList, ListItem } from '@chakra-ui/react'

function Disclaimer() {
  return (
    <Container maxW={'6xl'} p={0}>
      <Flex
        justifyContent={{ base: 'center', sm: 'center', xl: 'space-between' }}
        direction={{ base: 'column', xl: 'row' }}
        alignItems={'center'}
        py={10}
      >
        <VStack h='full' pt={10} spacing={10} align='flex'>
          <Text fontSize='5xl'>Disclaimer</Text>
          <Text fontSize='lg'>Last updated: July 21, 2023</Text>
          <Text fontSize='4xl'>Interpretation and Definitions</Text>
          <Text fontSize='3xl'>Interpretation</Text>
          <Text fontSize='lg'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</Text>
          <Text fontSize='3xl'>Definitions</Text>
          <Text fontSize='lg'>For the purposes of this Disclaimer:</Text>
          <UnorderedList size="xl">
            <ListItem color="white">
              <Text fontSize='lg' as='b'>DAO</Text><Text fontSize='lg' as='span'> (referred to as either &quot;the DAO&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Disclaimer) refers to BanklessDAO.</Text>
            </ListItem>
            <ListItem color="white">
              <Text fontSize='lg' as='b'>You</Text><Text fontSize='lg' as='span'> means the individual accessing the Website, or the DAO, or other legal entity on behalf of which such individual is accessing or using the Website, as applicable.</Text>
            </ListItem>
            <ListItem color="white">
              <Text fontSize='lg' as='b'>Website</Text><Text fontSize='lg' as='span'> refers to the BanklessDAO Website , accessible from <Link href="www.bankless.community" isExternal>www.bankless.community</Link></Text>
            </ListItem>
            <ListItem color="white">
              <Text fontSize='lg' as='b'>Content</Text><Text fontSize='lg' as='span'> refers to content of the Website.</Text>
            </ListItem>
          </UnorderedList>
          <Text fontSize='4xl'>General Disclaimer</Text>
          <Text fontSize='lg'>The information contained on the Website (the &quot;Website&quot;) is for general information purposes only.</Text>
          <Text fontSize='lg'>The DAO assumes no responsibility for errors or omissions in the contents of the Website.</Text>
          <Text fontSize='lg'>In no event shall the DAO be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Website or the contents of the Website. The DAO reserves the right to make additions, deletions, or modifications to the contents on the Website at any time without prior notice. This Disclaimer has been created with the help of the <Link href="https://www.termsfeed.com/disclaimer-generator/" isExternal>Disclaimer Generator</Link>.</Text>
          <Text fontSize='lg'>The DAO does not warrant that the Website is free of viruses or other harmful components.</Text>
          <Text fontSize='4xl'>External Links Disclaimer</Text>
          <Text fontSize='lg'>The Website may contain links to external websites that are not provided or maintained by or in any way affiliated with the DAO.</Text>
          <Text fontSize='lg'>Please note that the DAO does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</Text>
          <Text fontSize='4xl'>No Investment Advice</Text>
          <Text fontSize='lg'>The information contained on the Website is for general information purposes only. You should not construe any such information or other material as legal, tax, investement or other advice. Nothing contained on the Website constitutes solicitation, recommendation, endorsement, or offer by BanklessDAO or any third party service provider to buy or sell any securities or other financial instruments in this or in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction.</Text>
          <Text fontSize='lg'>All Content on this site is information of a general nature and does not address the circumstances of any particular individual or entity. Nothing in the Website constitues professional and/or financial advice, nor does any information on the Website constitute a comprehensive or complete statement of the matters discussed or the law relating thereto. BanklessDAO is not a fiduciary by virtue of any person&apos;s use of or access to the Website or Content. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other Content on the Website before making any decisions based on such information or other Content. In exchange for using the Website, you agree not to hold BanklessDAO, it&apos;s affiliates or any third party service provider liable for any possible claim for damages arising from any decision you make based on information or other Content made available to you thorugh the Website.</Text>
          <Text fontSize='4xl'>Investment Risks</Text>
          <Text fontSize='lg'>There are risks associated with investing in cryptocurrency. Investing in tokens and using smart contracts involves risk of loss. Loss of principal is possible. Some high risk investments may use leverage, which will accentuate gains & losses. Foreign investing involves special risks, including a greater volatility and political, economic and currency risks and differences in accounting methods. A token&apos;s past investment performance is not a guarantee or predictor of future investment performance.</Text>
          <Text fontSize='4xl'>Errors and Omissions Disclaimer</Text>
          <Text fontSize='lg'>The information given by the Website is for general guidance on matters of interest only. Even if the DAO takes every precaution to ensure that the content of the Website is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Website.</Text>
          <Text fontSize='lg'>The DAO is not responsible for any errors or omissions, or for the results obtained from the use of this information.</Text>
          <Text fontSize='4xl'>No Responsibility Disclaimer</Text>
          <Text fontSize='lg'>The information on the Website is provided with the understanding that the DAO is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.</Text>
          <Text fontSize='lg'>In no event shall the DAO or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Website.</Text>
          <Text fontSize='4xl'>&quot;Use at Your Own Risk&quot; Disclaimer</Text>
          <Text fontSize='lg'>All information in the Website is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</Text>
          <Text fontSize='lg'>The DAO will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Website or for any consequential, special or similar damages, even if advised of the possibility of such damages.</Text>
          <Text fontSize='4xl'>Contact Us</Text>
          <Text fontSize='lg'>If you have any questions about this Disclaimer, You can contact Us by visiting Our Discord: <Link href="https://discord.com/invite/bankless" isExternal>https://discord.com/invite/bankless</Link></Text>
        </VStack>
      </Flex>
    </Container>
  )
}

export default Disclaimer