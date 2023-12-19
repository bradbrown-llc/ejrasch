import pendingBlock from '../_lib/pendingBlock'
import block from '../_lib/block'
export default {
    any: [
        { type: 'null' },
        block,
        pendingBlock
    ]
} satisfies Sch