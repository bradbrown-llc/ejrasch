import hash from './hash'
import address from './address'
import quantity from './quantity'
const nsch = { type: 'null' } as const
export default {
    type: 'object',
    properties: {
        removed: { type: 'boolean' },
        logIndex: { any: [nsch, quantity] },
        transactionIndex: { any: [nsch, quantity] },
        transactionHash: { any: [nsch, hash] },
        blockHash: { any: [nsch, hash] },
        blockNumber: { any: [nsch, quantity] },
        address: address,
        data: { type: 'array', items: [hash] },
        topics: { type: 'array', items: [hash] }
    }
} satisfies Sch