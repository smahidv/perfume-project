import React from 'react'
import Image from 'next/image'

type Props = {
    title: string
    description: string
    price: string
    imageSrc: any
};

const SingleProduct = (props: Props) => {
    return (
        <div className='space-y-3 flex-shrink-0 --font-roboto'>
            <div className='space-y-2'>
                <h5 className='text-lg font-semibold text-gray-800'>{props.title}</h5>
                <p className=' text-sm leading-6 text-gray-600 max-w-[40ch]'>
                    {props.description}
                </p>
            </div>
            <div>
                <p className='text-xs bg-black p-[.4em] rounded-lg font-medium w-fit  text-white '>As low as {props.price}</p>
            </div>
            <div
                className='relative aspect-square shadow-sm rounded-md '>
                <Image
                    src={props.imageSrc}
                    alt="Floral Essence"
                    fill
                    sizes="313px"
                    placeholder='blur'
                />
            </div>

        </div>
    )
}

export default SingleProduct