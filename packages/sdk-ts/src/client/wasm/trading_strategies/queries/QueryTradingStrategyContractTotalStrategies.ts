import { BaseWasmQuery } from '../../BaseWasmQuery'
import { toBase64 } from '../../../../utils'

export declare namespace QueryTradingStrategyContractTotalStrategies {
  export interface Params {}
}

export class QueryTradingStrategyContractTotalStrategies extends BaseWasmQuery<QueryTradingStrategyContractTotalStrategies.Params> {
  toPayload() {
    const payload = toBase64({
      total_strategies: {},
    })

    return payload
  }
}
