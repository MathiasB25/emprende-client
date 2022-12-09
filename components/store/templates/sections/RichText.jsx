import { HeadingH2, Description, Button } from '../elements';

export default function RichTextSection({elements}) {

    return(
        <div className='flex flex-col gap-7 items-center page-width'>
            {elements.map(e => {
                switch (e.component) {
                    case "HeadingH2":
                        return <HeadingH2 text={e.value.text || "Talk about your brand"} />
                    case "Description":
                        return <Description maxWidth={"45rem"} text={e.value.text || "Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store."} />
                    case "Button":
                        return <Button text={e.value.text} />
                }
            })}
        </div>
    )
}