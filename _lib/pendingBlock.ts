import hash from './hash'
import data from './data'
import address from './address'
import quantity from './quantity'
const nsch = { type: 'null' } as const
export default {
    type: 'object',
    properties: {
        number: { any: [nsch, ] },
        hash: nsch,
        parentHash: hash,
        nonce: nsch,
        sha3Uncles: hash,
        logsBloom: nsch,
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