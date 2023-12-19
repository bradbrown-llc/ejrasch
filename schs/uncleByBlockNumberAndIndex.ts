import pendingBlock from '../_lib/pendingBlock.ts'
import block from '../_lib/block.ts'
export default {
    any: [
        { type: 'null' },
        block,
        pendingBlock
    ]
} satisfies Sch