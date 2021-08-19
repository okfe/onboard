import { extensionInstallMessage, mobileWalletInstallMessage } from '../content'
import { WalletModule, Helpers, CommonWalletOptions } from '../../../interfaces'

import okexIcon from '../wallet-icons/icon-okex.png'
import okexIcon2x from '../wallet-icons/icon-okex@2x.png'

function okex(
  options: CommonWalletOptions & { isMobile: boolean }
): WalletModule {
  const { preferred, label, iconSrc, svg, isMobile } = options

  return {
    name: label || 'OKEx wallet',
    iconSrc: iconSrc || okexIcon,
    iconSrcSet: iconSrc || okexIcon2x,
    svg,
    wallet: async (helpers: Helpers) => {
      const {
        createModernProviderInterface,
      } = helpers

      const provider =
        (window as any).okexchain
      return {
        provider,
        interface:
          provider && createModernProviderInterface(provider)
      }
    },
    type: 'injected',
    link: 'https://www.okex.com/wallet',
    installMessage: isMobile
      ? mobileWalletInstallMessage
      : extensionInstallMessage,
    desktop: true,
    mobile: false,
    preferred
  }
}

export default okex
