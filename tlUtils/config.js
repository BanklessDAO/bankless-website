export const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`
export const GOERLI_RPC_URL = `https://goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_PROJECT_ID}`

//WALLETS
import infinityWalletModule from '@web3-onboard/infinity-wallet'
import gnosisModule from '@web3-onboard/gnosis'
import keepkeyModule from '@web3-onboard/keepkey'
import ledgerModule from '@web3-onboard/ledger'
import sequenceModule from '@web3-onboard/sequence'
import dcentModule from '@web3-onboard/dcent'
import tahoModule from '@web3-onboard/sequence'
import trustModule from '@web3-onboard/trust'
import frontierModule from '@web3-onboard/frontier'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import walletConnectModule from '@web3-onboard/walletconnect'

import injectedModule from '@web3-onboard/injected-wallets'

function buildWallets() {
  const injected = injectedModule()
  const coinbaseWalletSdk = coinbaseWalletModule()
  const wcProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
  if (!wcProjectId) {
    // Ledger / WalletConnect modules require a WC Cloud projectId at init time.
    return [injected, coinbaseWalletSdk]
  }

  const walletConnect = walletConnectModule({
    version: 2,
    projectId: wcProjectId,
    requiredChains: [1],
  })
  const dcent = dcentModule()
  const infinityWallet = infinityWalletModule()
  const ledger = ledgerModule()
  const keepkey = keepkeyModule()
  const gnosis = gnosisModule()
  const sequence = sequenceModule()
  const taho = tahoModule() // Previously named Tally Ho wallet
  const trust = trustModule()
  const frontier = frontierModule()

  return [
    injected,
    coinbaseWalletSdk,
    walletConnect,
    infinityWallet,
    keepkey,
    sequence,
    injected,
    trust,
    frontier,
    taho,
    ledger,
    dcent,
    gnosis,
  ]
}

export const wallets = buildWallets()
