import hash from './hash'
import data from './data'
import address from './address'
import quantity from './quantity'
import log from './log'
const nsch = { type: 'null' } as const
export default {
    type: 'object',
    properties: {
        transactionHash: hash,
        transactionIndex: quantity,
        blockHash: hash,
        blockNumber: quantity,
        from: address,
        to: { any: [nsch, address] },
        cumulativeGasUsed: quantity,
        effectiveGasPrice: quantity,
        gasUsed: quantity,
        contractAddress: { any: [nsch, address] },
        logs: { type: 'array', items: [log] },
        logsBloom: data,
        type: quantity,
        status: { type: 'integer' }
    }
} satisfies Sch