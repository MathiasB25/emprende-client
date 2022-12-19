import randomId from '../../../../hooks/randomId';
import { HeadingH2, CollapsibleRow } from '../elements';

export default function CollapsibleContentSection({elements}) {

    const heading = elements.filter(e => e.component === "HeadingH2")[0];
    const rows = elements.filter(e => e.component !== "HeadingH2");

    return(
        <div className='flex flex-col gap-8 page-width'>
            {heading && Object.keys(heading).length != 0 (
                <div>
                    <HeadingH2 text={heading.value.text} />
                </div>
            )}
            <div className="flex flex-col divide-y border-b border-t">
                {rows.map(e => (
                    <CollapsibleRow key={randomId()} title={e.value.title} text={e.value.text} />
                ))}
            </div>
        </div>
    )
}