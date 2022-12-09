import { Title } from '../elements';

export default function EmailSignupSection({elements}) {

    const heading = elements?.filter(e => e.component === "Title")[0];

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className='flex flex-col gap-4'>
            <div className='text-center sm:text-left'>
                { heading && <Title text={heading?.value?.text} /> }
            </div>
            <div className="w-full mx-auto sm:w-96 sm:mx-0">
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='flex border border-zinc-600'>
                        <input className='text-sm sm:text-base w-full outline-none h-11 pl-3' placeholder='Tu email'></input>
                        <button type="submit" className='h-11 w-11 cursor-pointer'>
                            <i className="fa-light fa-arrow-right-long"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}