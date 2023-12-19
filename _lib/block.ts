import hash from './hash.ts'
import data from './data.ts'
import address from './address.ts'
import quantity from './quantity.ts'
const nsch = { type: 'null' } as const
export default {
    type: 'object',
    properties: {
        number: { any: [nsch, quantity] },
        hash: { any: [nsch, hash] },
        parentHash: hash,
        nonce: { any: [nsch, data] },
        sha3Uncles: hash,
        logsBloom: { any: [nsch, data] },
        transactionsRoot: hash,
        stateRoot: hash,
        receiptsRoot: hash,
        miner: address,
        difficulty: quantity,
        totalDifficulty: quantity,
        extraData: data,
        size: quantity,
        gasLimit: quantity,
        gasUsed: quantity,
        timestamp: quantity,
        transactions: { type: 'null' },
        uncles: { type: 'array', items: [hash] }
    }
} satisfies Sch