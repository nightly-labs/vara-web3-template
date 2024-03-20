import { ApiPromise, WsProvider } from '@polkadot/api'

let _api: ApiPromise | undefined
export const getApi = async () => {
  if (_api) return _api
  const provider = new WsProvider('wss://testnet.vara.network/')
  _api = await ApiPromise.create({
    provider,
  })
  return _api
}
