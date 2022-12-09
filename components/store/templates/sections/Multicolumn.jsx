import { Column } from '../elements';

export default function MultiColumnSection({elements}) {
    return(
        <div className="grid lg:grid-cols-3 gap-8 page-width">
            {elements.map(e => (
                <Column heading={e.value.heading} description={e.value.description} />
            ))}
        </div>
    )
}