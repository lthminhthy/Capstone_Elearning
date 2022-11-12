import React, { Fragment } from 'react'

const LienHe = () => {
    return (
        <Fragment>
            <div className="dark:bg-gray-800 dark:text-gray-100">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold sm:text-4xl">Văn phòng</h2>
                        <p className="mt-4 text-lg dark:text-gray-400">Liên hệ</p>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cơ sở 1 - Trụ sở chính:</dt>
                                <dd className="mt-2 dark:text-gray-400">112 Cao Thắng, Quận 3, TPHCM</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cơ sở 2: </dt>
                                <dd className="mt-2 dark:text-gray-400">Lầu 2 - 459 Sư Vạn Hạnh, Quận 10, TPHCM (Ngay ĐH Y Dược Phạm Ngọc Thạch)</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cơ sở 3:</dt>
                                <dd className="mt-2 dark:text-gray-400">117 Tân Cảng, Bình Thạnh, TPHCM</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cơ sở 4:</dt>
                                <dd className="mt-2 dark:text-gray-400">110 Đường số 10 nội bộ khu CityLand Phan Văn Trị - Gò Vấp, TPHCM</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cơ sở 5:</dt>
                                <dd className="mt-2 dark:text-gray-400">56 Lê Cảnh Tuân, Tân Phú, TPHCM</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cơ sở 6:</dt>
                                <dd className="mt-2 dark:text-gray-400">6C Đường số 8, Linh Tây, Thủ Đức, TPCHM (gần ĐH Cảnh Sát)</dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <div className="ml-3">
                                <dt className="text-lg font-medium">Cơ sở 7:</dt>
                                <dd className="mt-2 dark:text-gray-400"> 103 Nguyễn Hữu Dật, Hải Châu, Đà Nẵng</dd>
                            </div>
                        </div>

                    </dl>
                </div>
            </div>
            <div className='bg-retro-third'>
                <div className="container m-auto px-6 py-16 ">
                <div className="flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-2xl rounded-lg p-8 bg-retro-beige">
                    <div className="w-8/12 text-2xl">
                        {/* <img alt="quote" className="float-left mr-1" src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg" /> */}
                        <span className="flex">Chúng tôi sẽ tư vấn miễn phí bạn toàn bộ chương trình, lộ trình để thành công trong lĩnh vực lập trình với thời gian và chi phí tối ưu nhất.</span>
                    </div>
                    <div className="relative shadow-md font-medium my-5 py-2 px-4 text-retro-beige cursor-pointer bg-retro-primary hover:bg-retro-second hover:text-retro-primary rounded text-lg text-center w-48">
                        <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full  bg-retro-second">
                        </span>
                        <a className=' text-retro-beige hover:text-retro-primary ' href="https://www.facebook.com/lophocviet/">Tư vấn</a> 
                    </div>
                </div>
            </div>

            </div>
            
        </Fragment>


    )
}

export default LienHe