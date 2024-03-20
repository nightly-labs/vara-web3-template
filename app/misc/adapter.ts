import { NightlyConnectAdapter } from '@nightlylabs/wallet-selector-polkadot'

let _adapter: NightlyConnectAdapter | undefined
export const getAdapter = async (persisted = true) => {
  if (_adapter) return _adapter
  _adapter = await NightlyConnectAdapter.build(
    {
      appMetadata: {
        name: 'Vara Template',
        description: 'Vara Template',
        icon: 'https://docs.nightly.app/img/logo.png',
      },
      network: 'Vara',
    },
    persisted
  )
  return _adapter
}
