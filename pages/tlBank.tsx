import { Network, Alchemy } from 'alchemy-sdk'
import React, { useState, useEffect } from 'react'
import {
  bankTokenABI,
  TLBankTokenABI,
  bankToken,
  TLBankToken,
} from '../tlUtils/abi'
import { MAINNET_RPC_URL, GOERLI_RPC_URL, wallets } from '../tlUtils/config'
import Image from 'next/image'
import { getCurrentDate, formatWalletAddress } from '../tlUtils/tlUtil'
import { getUnlockDate, nFormatter, formatDateMm } from '../tlUtils/tlUtil'
import { getUnlockDateRaw, getNewUnlockDateRaw } from '../tlUtils/tlUtil'
import { IoWalletOutline } from 'react-icons/io5'
import { IoLockClosedOutline } from 'react-icons/io5'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'
import { FaEthereum } from 'react-icons/fa'
import { BiInfoCircle } from 'react-icons/bi'
import {
  VStack,
  Stack,
  Container,
  Flex,
  Text,
  Box,
  Icon,
  HStack,
  Button,
  Spacer,
  Heading,
  Divider,
  Input,
  SimpleGrid,
  FormControl,
  FormLabel,
  FormHelperText,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
} from '@chakra-ui/react'
import { init, useConnectWallet } from '@web3-onboard/react'
import { useSetChain } from '@web3-onboard/react'
import { BigNumber, ethers } from 'ethers'
import axios from 'axios'

const API = '9176eee3-12fa-431c-93c5-27d1f40d4c91'

const supportedChains = [
  {
    id: '0x5',
    token: 'ETH',
    label: 'Goerli Testnet',
    rpcUrl: GOERLI_RPC_URL,
  },
  {
    id: '0x1',
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: MAINNET_RPC_URL,
  },
]

init({
  apiKey: API,
  wallets: wallets,
  chains: supportedChains,
  connect: {
    autoConnectLastWallet: true,
  },
  appMetadata: {
    name: 'TLBANK',
    icon: '/images/bank-token.png',
    logo: '/images/bank-token.png',
    description: 'BanklessDao',
    recommendedInjectedWallets: [
      { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
      { name: 'MetaMask', url: 'https://metamask.io' },
    ],
  },
})

const settings = {
  apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
  network: Network.ETH_GOERLI,
}

const alchemy = new Alchemy(settings)

function TlBank() {
  const [tabUnlock, setTabUnlock] = useState(false)
  const [value, setValue] = useState(BigNumber.from('40000000000000000000000'))
  const [active, setActive] = useState('40k')
  const [lockDate, setLockDate] = useState('')
  const [unlockDate, setUnlockDate] = useState<any | null>(null)
  const [unlockDateRaw, setUnlockDateRaw] = useState<any | null>(null)
  const [totalHolders, setTotalHolders] = useState(0)
  const [totalLock, setTotalLock] = useState('')
  const [overallLocked, setOverallLocked] = useState('')
  const [walletBalance, setWalletBalance] = useState('')
  const [allowance, setAllowance] = useState(BigNumber.from(0))
  const [tokens, setToken] = useState([])
  const [data, setData] = useState([])
  const [selectToken, setSelectToken] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const [_, setChain] = useSetChain()

  const connectOrDisconnect = async () => {
    if (wallet) {
      disconnect(wallet)
      return
    }

    const [connected] = await connect()
    const [chain] = connected.chains
    if (!supportedChains.find(c => c.id === chain.id)) {
      await setChain({ chainId: supportedChains[0].id })
    }
  }

  // create an ethers provider
  let ethersProvider
  let ethersSigner
  let address

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')

    ethersSigner = ethersProvider.getSigner()

    address = wallet?.accounts[0].address
  }

  const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL)
  const BankTokenConDef = new ethers.Contract(bankToken, bankTokenABI, provider)

  const BankTokenContract = new ethers.Contract(
    bankToken,
    bankTokenABI,
    ethersSigner
  )

  const TLBankContract = new ethers.Contract(
    TLBankToken,
    TLBankTokenABI,
    ethersSigner
  )

  const handleButton = (bankVal: BigNumber, btn: string, duration: number) => {
    setValue(bankVal)
    setActive(btn)
    const startDate = new Date()
    const endDate = getUnlockDate('-', startDate, duration)
    const endDateRaw = getUnlockDateRaw(startDate, duration)
    setUnlockDateRaw(endDateRaw)
    setUnlockDate(endDate)
  }

  const handleTokenSelection = (
    tokenId,
    tokenNewUnlockDate,
    tokenUnlockDate,
    tokenLockDate,
    tokenAmount
  ) => {
    const newValue = {
      tokenId: tokenId,
      newUnlockDate: tokenNewUnlockDate,
      unlockDate: tokenUnlockDate,
      lockDate: tokenLockDate,
      amount: tokenAmount,
    }
    setSelectToken(newValue)
  }

  const fetchData = async tokenId => {
    try {
      const response = await axios.get(
        `https://d3lptqip2x2eaw.cloudfront.net/goerli/0x8e6e3b92e4f1818bc7ceee6b7b7228952aa41acb/${tokenId}`
      )
      return response
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const getUserTokens = async () => {
    const userNFTBalance = await TLBankContract.balanceOf(address)
    const tokens: any = []
    const allData: any = []
    for (let i = 0; i < userNFTBalance; i++) {
      const tokenId = await TLBankContract.tokenOfOwnerByIndex(address, i)
      const data = await fetchData(tokenId)
      if (data) {
        allData.push(data)
        tokens.push(tokenId._hex)
      }
    }
    setToken(tokens)
    setData(allData)
  }

  const checkAllowance = async (address: string): Promise<void> => {
    const allowance = await BankTokenConDef.allowance(address, TLBankToken)
    setAllowance(allowance)
  }

  const bootstrapWallet = async (address: string) => {
    const balanceRequest = BankTokenConDef.balanceOf(address)
    const lockBalanceRequest = TLBankContract.lockedBalances(address)
    const checkAllowanceRequest = checkAllowance(address)

    const [balance, lockBalance] = await Promise.all([
      balanceRequest,
      lockBalanceRequest,
      checkAllowanceRequest,
    ])

    setWalletBalance(ethers.utils.formatUnits(balance, 18).split('.')[0])
    setAllowance(allowance)
    setTotalLock(ethers.utils.formatUnits(lockBalance, 18).split('.')[0])
  }

  const bootstrapNonWallet = async () => {
    const ownersRequest = alchemy.nft.getOwnersForContract(TLBankToken)
    const allTimeLockedRequest = BankTokenConDef.balanceOf(TLBankToken)

    const [ownersResponse, allTimeLocked] = await Promise.all([
      ownersRequest,
      allTimeLockedRequest,
    ])

    setTotalHolders(ownersResponse.owners.length)
    setOverallLocked(ethers.utils.formatUnits(allTimeLocked, 18).split('.')[0])
  }

  useEffect(() => {
    const date = getCurrentDate()
    setLockDate(date)
    setUnlockDate(getUnlockDate('-', date, 6))
    bootstrapNonWallet()
    if (address) {
      bootstrapWallet(address).then(() => {
        getUserTokens()
      })
    }
  }, [address])

  const setLock = async () => {
    setLoading(true)
    try {
      if (allowance.lt(value)) {
        const approvalTransaction = await BankTokenContract.approve(
          TLBankToken,
          value
        )
        await approvalTransaction.wait()
      } else {
        const creationTransaction = await TLBankContract.createNFT(
          address,
          value,
          BigNumber.from(unlockDateRaw)
        )
        await creationTransaction.wait()
      }
      await checkAllowance(address)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const relock = async (tokenId, newUnlockTime) => {
    setLoading(true)
    try {
      const tx = await TLBankContract.relockNFT(tokenId, newUnlockTime)
      await tx.wait()
      await bootstrapWallet(address)
      await getUserTokens()
    } catch (err) {
      alert("You can't relock this token just yet! ")
    } finally {
      setLoading(false)
    }
  }

  const unlock = async () => {
    setLoading(true)
    try {
      const tx = await TLBankContract.redeemNFT(selectToken.tokenId)
      await tx.wait()
      await bootstrapWallet(address)
      await getUserTokens()
    } catch (err) {
      alert('Unlock date not reached')
    } finally {
      setLoading(false)
    }
  }

  function renderNfts(data) {
    if (data.length > 0) {
      return (
        <HStack pt={10}>
          {data.map((each, i) => (
            <Box
              bg='rgba(255, 255, 255, 0.1)'
              w='30%'
              // p={2}
              color='white'
              key={i}
              borderRadius={2}
              borderColor='#D02128'
              borderWidth={selectToken?.tokenId === tokens[i] ? '5px' : '0px'}
              _hover={{ bg: 'red.500' }}
              onClick={() =>
                handleTokenSelection(
                  tokens[i],
                  each.data.unlockDate,
                  each.data.unlockTimestamp,
                  each.data.date,
                  each.data.assetCurrency.amount
                )
              }>
              <img src={each.data.image} alt={each.title} />
            </Box>
          ))}
        </HStack>
      )
    } else {
      return (
        <div>
          <Text py={5} fontSize={{ base: '10px', md: '14px' }}>
            -You do not have any token Lock
          </Text>
        </div>
      )
    }
  }

  return (
    <Container maxW={'6xl'} mx='auto' p={0}>
      <Flex as='nav' py={'10px'}>
        <Spacer />
        <HStack>
          <Menu>
            <MenuButton as={Button}>
              <Icon as={FaEthereum} />{' '}
            </MenuButton>
            <MenuList bgColor={'black'} borderColor='red.500' color={'white'}>
              <MenuItem>
                <Icon as={FaEthereum} />
                <Text fontSize={{ base: '10px', md: '14px' }}>Ethereum</Text>
              </MenuItem>
              <MenuItem>
                <Text fontSize={{ base: '10px', md: '14px' }} as='del'>
                  Polygon
                </Text>
              </MenuItem>
              <MenuItem>
                <Text fontSize={{ base: '10px', md: '14px' }} as='del'>
                  Optimism
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            disabled={connecting}
            onClick={connectOrDisconnect}
            border='1px'
            borderColor='red.500'
            color={'white'}
            bgColor={'black'}>
            {connecting
              ? 'Connecting'
              : wallet
              ? 'Disconnect'
              : 'Connect a Wallet'}
          </Button>
          {/* ) : (
            <Button
              border='1px'
              borderColor='red.200'
              color={'white'}
              onClick={disconnect}
              bgColor={'black'}>connected
              {formatWalletAddress(account)}
            </Button>
           )} */}
        </HStack>
      </Flex>
      <Divider mb={10} />

      <Box as='section' display={'flex'} justifyContent={'space-between'}>
        <div>
          <Text fontSize={{ base: '8px', md: '12px' }}>
            Available on <Icon as={FaEthereum} /> Etherum Mainnet
          </Text>
          <HStack>
            <Image
              src='/images/bank-token-mobile.png'
              alt='bankToken'
              height={'50px'}
              width={'70px'}
            />
            <Text as='b' fontSize={{ base: '16px', md: '36px' }}>
              LOCK BANK
            </Text>
          </HStack>
        </div>
        <HStack>
          <VStack>
            <Heading
              fontSize={{ base: '10px', md: '14px' }}
              color='rgba(255, 255, 255, 0.7)'>
              Total BANK Locked
            </Heading>
            <Heading
              color='white'
              as='b'
              fontSize={{ base: '16px', md: '22px' }}>
              {overallLocked ? nFormatter(Number(overallLocked), 2) : '0 '} BANK
            </Heading>
          </VStack>
          <Divider orientation='vertical' />
          <VStack>
            <Heading
              fontSize={{ base: '10px', md: '14px' }}
              color='rgba(255, 255, 255, 0.7)'>
              Total BANK Holders
            </Heading>
            <Heading
              color='white'
              as='b'
              fontSize={{ base: '16px', md: '22px' }}>
              {totalHolders ? `${totalHolders} ` : '0 '}Holders
            </Heading>
          </VStack>
        </HStack>
      </Box>

      <SimpleGrid
        bg='rgba(1, 1, 1, 100.0)'
        columns={{ base: 1, lg: 2 }}
        gap={10}
        mt={10}>
        <div>
          <HStack
            spacing={0}
            border={'1px'}
            borderRadius={'5px'}
            borderColor={'gray.700'}
            maxW='fit-content'
            bgColor={'#111111'}
            marginY={2}
            p={'5px'}>
            <Button
              bgColor={!tabUnlock ? 'rgba(255, 255, 255, 0.3)' : '#111111'}
              onClick={() => setTabUnlock(false)}
              size='sm'
              borderRadius='md'>
              Lock
            </Button>
            <Button
              onClick={() => setTabUnlock(true)}
              bgColor={!tabUnlock ? '#111111' : 'rgba(255, 255, 255, 0.3)'}
              size='sm'
              borderRadius='md'>
              Unlock
            </Button>
          </HStack>
          {!tabUnlock ? (
            <Box
              maxW={'100%'}
              bgColor={'#111111'}
              p={5}
              border={'1px'}
              borderRadius={'5px'}
              borderColor={'gray.700'}>
              <Flex>
                <HStack>
                  <IoWalletOutline
                    fontSize={'24px'}
                    color='rgba(255, 255, 255, 0.7)'
                  />

                  <Text fontSize={'14px'} color='rgba(255, 255, 255, 0.7)'>
                    Wallet Balance
                  </Text>
                </HStack>
                <Spacer />
                <Text fontSize={'14px'} fontWeight='600'>
                  {walletBalance ? `${walletBalance} ` : '0.0 '}BANK
                </Text>
              </Flex>
              <Divider m={2} />

              <FormControl my='5'>
                <FormLabel fontSize={'14px'} color='rgba(255, 255, 255, 0.7)'>
                  You lock
                </FormLabel>
                <Input
                  color='white'
                  value={ethers.utils.formatEther(value)}
                  readOnly
                  borderRadius={0}
                  bgColor={'#232323'}
                  type='email'
                  placeholder='Enter Amount'
                />
                <FormHelperText color='white' fontSize={'14px'}>
                  Minimum: <span>40,000 BANK</span>
                </FormHelperText>
              </FormControl>

              <Box>
                <FormControl as='fieldset' gap={2}>
                  <FormLabel
                    as='legend'
                    color='rgba(255, 255, 255, 0.7)'
                    fontSize={'14px'}
                    my='2'>
                    Vesting term <Icon as={BiInfoCircle} />
                  </FormLabel>
                  <Stack
                    spacing='24px'
                    direction={{ base: 'column', md: 'column', xl: 'row' }}>
                    <Button
                      onClick={() =>
                        handleButton(
                          BigNumber.from('40000000000000000000000'),
                          '40k',
                          6
                        )
                      }
                      colorScheme='gray'
                      variant='outline'
                      color='white'
                      value='40k'
                      // fontSize={{ base: '8px', md: '14px' }}
                      fontSize={'14px'}
                      fontWeight={700}
                      w='full'
                      _hover={{ bg: 'none', svg: { fill: 'white' } }}>
                      {active === '40k' ? (
                        <IoMdRadioButtonOn />
                      ) : (
                        <IoMdRadioButtonOff />
                      )}{' '}
                      6 Months @ 40K BANK
                    </Button>
                    <Button
                      onClick={() =>
                        handleButton(
                          BigNumber.from('80000000000000000000000'),
                          '80k',
                          12
                        )
                      }
                      colorScheme='gray'
                      variant='outline'
                      color='white'
                      value='80k'
                      // fontSize={{ base: '8px', md: '12px' }}
                      fontSize={'14px'}
                      fontWeight={700}
                      w='full'
                      _hover={{ bg: 'none', svg: { fill: 'white' } }}>
                      {active === '80k' ? (
                        <IoMdRadioButtonOn />
                      ) : (
                        <IoMdRadioButtonOff />
                      )}{' '}
                      1 Year @ 80K BANK
                    </Button>
                  </Stack>
                </FormControl>
              </Box>
              {/* <Divider my={10} /> */}

              <Accordion allowToggle defaultIndex={0} py={10}>
                <AccordionItem>
                  <h2>
                    <AccordionButton border={'none'} outline='none'>
                      <Box
                        fontSize={'14px'}
                        as='span'
                        flex='1'
                        textAlign='left'
                        color='rgba(255, 255, 255, 0.7)'>
                        Summary
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} bg={'#232323'}>
                    <Flex>
                      <Text fontSize={'14px'} color='rgba(255, 255, 255, 0.7)'>
                        Lock Date
                      </Text>
                      <Spacer />
                      {/* <Text fontSize={'14px'} >2023-04-01 09:49</Text> */}
                      <Text fontSize={'14px'}>{lockDate}</Text>
                    </Flex>
                    <Flex>
                      <Text fontSize={'14px'} color='rgba(255, 255, 255, 0.7)'>
                        Unlock Date
                      </Text>
                      <Spacer />
                      {/* <Text fontSize={'14px'} >2023-04-01 09:49</Text> */}
                      <Text fontSize={'14px'}>{unlockDate}</Text>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
                <Divider />
              </Accordion>
              <Button
                disabled={loading}
                borderRadius={0}
                onClick={setLock}
                bg='red.500'
                _hover={{ bg: 'red.500' }}
                w={'100%'}>
                {loading ? (
                  <Spinner />
                ) : allowance.lt(value) ? (
                  'Approve'
                ) : (
                  'Confirm'
                )}
              </Button>
            </Box>
          ) : (
            <Box
              maxW={'100%'}
              bgColor={'#111111'}
              p={5}
              border={'1px'}
              borderRadius={'5px'}
              borderColor={'gray.700'}>
              <Flex>
                <HStack>
                  <IoWalletOutline
                    fontSize={'24px'}
                    color='rgba(255, 255, 255, 0.7)'
                  />

                  <Text fontSize={'14px'} color='rgba(255, 255, 255, 0.7)'>
                    Wallet Balance
                  </Text>
                </HStack>
                <Spacer />
                <Text fontSize={'14px'} fontWeight='600'>
                  {walletBalance ? `${walletBalance} ` : '0 '}BANK
                </Text>
              </Flex>
              <Divider m={2} />

              <Flex>
                <HStack>
                  <IoLockClosedOutline
                    fontSize={'24px'}
                    color='rgba(255, 255, 255, 0.7)'
                  />

                  <Text fontSize={'14px'} color='rgba(255, 255, 255, 0.7)'>
                    Locked Balance
                  </Text>
                </HStack>
                <Spacer />
                <Text fontSize={'14px'} fontWeight='600'>
                  {totalLock ? `${totalLock} ` : '0 '} BANK
                </Text>
              </Flex>
              {/* NFT SECTION */}
              {renderNfts(data)}

              <FormControl my='5'>
                <FormLabel fontSize={'14px'} color='rgba(255, 255, 255, 0.7)'>
                  Unlock
                </FormLabel>
                <Input
                  color='white'
                  value={selectToken?.amount}
                  readOnly
                  borderRadius={0}
                  bgColor={'#232323'}
                  type='number'
                  placeholder='Enter Amount'
                />
              </FormControl>

              <Accordion allowToggle defaultIndex={0} py={10}>
                <AccordionItem>
                  <h2>
                    <AccordionButton border={'none'} outline='none'>
                      <Box
                        fontSize={'14px'}
                        as='span'
                        flex='1'
                        textAlign='left'
                        color='rgba(255, 255, 255, 0.7)'>
                        Summary
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} bg={'#232323'}>
                    <Flex>
                      <Text fontSize={'14px'} color='rgba(255, 255, 255, 0.7)'>
                        Lock Date
                      </Text>
                      <Spacer />
                      <Text fontSize={'14px'}>
                        {selectToken == null || undefined
                          ? '-'
                          : formatDateMm(selectToken?.lockDate)}
                      </Text>
                    </Flex>
                    <Flex>
                      <Text fontSize={'14px'} color='rgba(255, 255, 255, 0.7)'>
                        Unlock Date
                      </Text>
                      <Spacer />
                      {/* <Text fontSize={'14px'} >2023-04-01 09:49</Text> */}
                      <Text fontSize={'14px'}>
                        {selectToken == null || undefined
                          ? '-'
                          : formatDateMm(selectToken?.unlockDate)}
                      </Text>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
                <Divider />
              </Accordion>
              <Stack>
                <Button
                  border={'1px'}
                  borderRadius={0}
                  _focus={{ _focus: 'none' }}
                  bg='rgba(208, 33, 40, 0.1)'
                  opacity={0.5}
                  borderColor='#D02128'
                  _hover={{ bg: 'red.500' }}
                  w={'100%'}
                  onClick={() =>
                    relock(
                      selectToken?.tokenId,
                      getNewUnlockDateRaw(selectToken?.unlockDate, 4)
                    )
                  }>
                  Relock for another {selectToken?.amount == 40000 ? 4 : 6}
                  months
                </Button>

                <Button
                  disabled={loading}
                  borderRadius={0}
                  variant='unstyled'
                  bg='red.500'
                  _hover={{ bg: 'red.500' }}
                  w={'100%'}
                  onClick={unlock}>
                  {loading ? <Spinner /> : 'Unlock'}
                </Button>
              </Stack>
            </Box>
          )}
        </div>
        <Hide below='lg'>
          <Box
            display='flex'
            justifyContent='center'
            bg='rgba(1, 1, 1, 100.0)'
            alignItems='center'>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              pl={70}
              bg='radial-gradient(at center, rgba(255, 27, 1, 0.3),rgba(255, 27, 1, 0.2), rgba(1, 1, 1, 100.0), rgba(1, 1, 1, 100.0));'>
              <Image
                src='/images/bank-token.png'
                alt='bankToken'
                height={422}
                width={402}
              />
            </Box>
          </Box>
        </Hide>
      </SimpleGrid>
    </Container>
  )
}

export default TlBank
