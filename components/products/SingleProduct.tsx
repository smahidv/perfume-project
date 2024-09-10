import React from 'react'
import Image from 'next/image'

type Props = {
    title: string
    description: string
    price: string
    imageSrc: string
};

const SingleProduct = (props: Props) => {
    return (
        <div className='space-y-3 flex-shrink-0 '>
            <div className='space-y-2'>
                <h5 className='text-lg font-semibold text-gray-800'>{props.title}</h5>
                <p className='font-notoSerifKhitan text-sm leading-6 text-gray-600 max-w-[50ch]'>
                    {props.description}
                </p>
            </div>
            <div>
                <p className='text-sm font-notoSerifKhitan text-gray-700'>As low as {props.price}</p>
            </div>
            <div
                className='relative h-[40vh] shadow-sm rounded-md '>
                <Image
                    src={props.imageSrc}
                    alt="Floral Essence"
                    fill
                />
            </div>

        </div>
    )
}

export default SingleProduct