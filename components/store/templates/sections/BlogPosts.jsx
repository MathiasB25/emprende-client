import randomId from '../../../../hooks/randomId';
import { HeadingH2, Blog } from '../elements';

export default function BlogPostsSection({elements}) {
    const heading = elements.filter(e => e.component === "HeadingH2")[0];
    const blogPosts = elements.filter(e => e.component === "Blog");

    return(
        <div className='flex flex-col gap-8 py-14 page-width'>
            <div><HeadingH2 text={heading.value.text} /></div>
            <div className='grid-cols-3-media'>
                {blogPosts.map(e => (
                    <Blog key={randomId()} heading={e.value.heading} description={e.value.description} media={e.value.media} />
                ))}
            </div>
        </div>
    )
}