import { Text } from '../elements';

export default function AnnounceBarSection({elements}) {
    return(
        <div className='py-2 text-center border-b'>
            <Text text={elements[0].value.text} size={elements[0].value.size} />
        </div>
    )
}