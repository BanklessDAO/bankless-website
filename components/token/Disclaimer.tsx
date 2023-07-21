import React from 'react'
import { Flex, Container, VStack } from '@chakra-ui/react'

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
          <h1>Disclaimer</h1>
          <p>Last updated: July 21, 2023</p>
          <h1>Interpretation and Definitions</h1>
          <h2>Interpretation</h2>
          <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          <h2>Definitions</h2>
          <p>For the purposes of this Disclaimer:</p>
          <ul>
            <li><strong>DAO</strong> (referred to as either &quot;the DAO&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Disclaimer) refers to BanklessDAO.</li>
            <li><strong>You</strong> means the individual accessing the Website, or the DAO, or other legal entity on behalf of which such individual is accessing or using the Website, as applicable.</li>
            <li><strong>Website</strong> refers to the BanklessDAO Website , accessible from <a href="www.bankless.community" rel="external nofollow noopener" target="_blank">www.bankless.community</a></li>
            <li><strong>Content</strong>strong> refers to content of the Website.</strong></li>
          </ul>
          <h1>Disclaimer</h1>
          <p>The information contained on the Website is for general information purposes only.</p>
          <p>The DAO assumes no responsibility for errors or omissions in the contents of the Website.</p>
          <p>In no event shall the Website be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Website or the contents of the Website. The DAO reserves the right to make additions, deletions, or modifications to the contents on the Website at any time without prior notice. This Disclaimer has been created with the help of the <a href="https://www.termsfeed.com/disclaimer-generator/" target="_blank">Disclaimer Generator</a>.</p>
          <p>The DAO does not warrant that the Website is free of viruses or other harmful components.</p>
          <h1>No Investment Advice Disclaimer</h1>
          <p>The information contained on the Website is for general information purposes only. You should not construe any such information or other material as legal, tax, investement or other advice. Nothing contained on the Website constitutes solicitation, recommendation, endorsement, or offer by BanklessDAO or any third party service provider to buy or sell any securities or other financial instruments in this or in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction.</p>
          <p>All Content on this site is information of a general nature and does not address the circumstances of any particular individual or entity. Nothing in the Website constitues professional and/or financial advice, nor does any information on the Website constitute a comprehensive or complete statement of the matters discussed or the law relating thereto. BanklessDAO is not a fiduciary by virtue of any person's use of or access to the Website or Content. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other Content on the Website before making any decisions based on such information or other Content. In exchange for using the Website, you agree not to hold BanklessDAO, it's affiliates or any third party service provider liable for any possible claim for damages arising from any decision you make based on information or other Content made available to you thorugh the Website.</p>
          <h1>Investment Risks</h1>
          <p>There are risks associated with investing in cryptocurrency. Investing in tokens and using smart contracts involves risk of loss. Loss of principal is possible. Some high risk investments may use leverage, which will accentuate gains & losses. Foreign investing involves special risks, including a greater volatility and political, economic and currency risks and differences in accounting methods. A tokens past investment performance is not a guarantee or predictor of future investment performance.</p>
          <h1>External Links Disclaimer</h1>
          <p>The Website may contain links to external websites that are not provided or maintained by or in any way affiliated with the DAO.</p>
          <p>Please note that the DAO does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
          <h1>Errors and Omissions Disclaimer</h1>
          <p>The information given by the Website is for general guidance on matters of interest only. Even if the DAO takes every precaution to ensure that the content of the Website is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Website.</p>
          <p>The DAO is not responsible for any errors or omissions, or for the results obtained from the use of this information.</p>
          <h1>No Responsibility Disclaimer</h1>
          <p>The information on the Website is provided with the understanding that the DAO is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.</p>
          <p>In no event shall the DAO or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Website.</p>
          <h1>&quot;Use at Your Own Risk&quot; Disclaimer</h1>
          <p>All information in the Website is provided &quot;as is&quot;, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.</p>
          <p>The DAO will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Website or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>
          <h1>Contact Us</h1>
          <p>If you have any questions about this Disclaimer, You can contact Us:</p>
          <ul>
            <li>By visiting Our Discord: <a href="https://discord.com/invite/bankless" rel="external nofollow noopener" target="_blank">https://discord.com/invite/bankless</a></li>
          </ul>
        </VStack>
      </Flex>
    </Container>
  )
}

export default Disclaimer