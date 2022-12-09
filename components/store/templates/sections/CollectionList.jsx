import { HeadingH2, Collection } from '../elements';

export default function CollectionListSection({elements}) {

    const heading = elements.filter(e => e.component === "HeadingH2")[0];
    const collections = elements.filter(e => e.component !== "HeadingH2");

    return(
        <div className='flex flex-col gap-8 page-width'>
            <div>
                <HeadingH2 text={heading.value.text} />
            </div>
            <div className="grid-cols-3-media">
                {collections.map(e => (
                    <Collection name={e.value.name} media={e.value.media} aspectRatio={e.value.properties?.aspectRatio} />
                ))}
            </div>
        </div>
    )
}