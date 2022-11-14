import React from 'react'
import { useNavigate } from 'react-router'
import { DoubleLeftOutlined } from '@ant-design/icons'

const ButtonBack = () => {
    const navigate = useNavigate()
    return (
        <div x-show="open" class="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">
            <div className=" text-sm w-full md:rounded flex justify-start">

                <button className="text-left p-3 w-full hover:bg-retro-beige bg-retro-primary hover:text-retro-primary text-retro-beige " onClick={() => {
                    navigate(-1)
                }} >
                    <div className='flex justify-start items-center'>
                        
                            <DoubleLeftOutlined className='mr-1'/>
                        
                        <div>
                            Trở về
                        </div>
                    </div>

                </button>
            </div>
        </div>
    )
}

export default ButtonBack