import hash from './hash'
import data from './data'
import address from './address'
import quantity from './quantity'
const nsch = { type: 'null' } as const
export default {
    type: 'object',
    properties: {
        blockHash: { any: [nsch, hash] },
        blockNumber: { any: [nsch, quantity] },
        from: address,
        gas: quantity,
        gasPrice: quantity,
        hash: hash,
        input: data,
        nonce: quantity,
        to: { any: [nsch, address] },
        transactionIndex: { any: [nsch, quantity] },
        value: quantity,
        v: quantity,
        r: quantity,
        s: quantity,
    }
} satisfies Sch