
import React, { Fragment } from 'react'

const TinTuc = () => {
    return (
        <Fragment>
            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="https://cybersoft.edu.vn/wp-content/uploads/2019/01/IMG_3078.jpg"
                        alt=""
                    />
                </div>
                <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl ">
                    <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            CYBERSOFT
                        </p>
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Giới thiệu
                            <br className="hidden md:block" />
                            về{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                CYBERSOFT
                            </span>
                        </h2>
                        <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                            Đào tạo cho mọi đối tượng từ người trái ngành, người mới bắt đầu, sinh viên công nghệ thông tin đến các bạn đã có có nghề lập trình. Đào tạo ra những lập trình viên tài năng, phát huy tố chất, tư duy lập trình, có định hướng để trở thành những lập trình chuyên nghiệp. Giáo trình được may đo và biên soạn dành riêng cho các bạn học lập trình.
                        </p>

                    </div>
                </div>
            </div>
            <div className="py-16 mt-12">
                <div className="container m-auto px-6">
                    <div className="lg:flex justify-between items-center">
                        <div className="lg:w-6/12 lg:p-0 p-7">
                            <h1 className="text-4xl font-bold leading-tight mb-5 capitalize"> ĐỘI NGŨ GIẢNG VIÊN </h1>
                            <p className="text-xl"> CyberSoft tuyển chọn các giảng viên đến từ các doanh nghiệp, có nhiều năm kinh nghiệm trong việc xây dựng các dự án lớn tại các tập đoàn trong và ngoài nước. Có kinh nghiệm trong việc chia sẻ kiến thức, phân tích dự án, tận tâm và hỗ trợ hết mình để học viên luôn học hỏi được các kinh nghiệm thực chiến, học tập kiến thức mới nhất từ thực tế, áp dụng ngay vào công việc ngay sau khóa học. Các giảng viên được tham gia khóa huấn luyện đào tạo tích hợp do đại học Arizona - ASU - Mỹ và tập đoàn Intel tài trợ để áp dụng các phương pháp giảng dạy hiện đại trong đào tạo nghề chất lượng cao. </p>
                           
                        </div>
                        <div className="lg:w-5/12 order-2">
                            <img src="https://cybersoft.edu.vn/wp-content/uploads/2017/08/IMG_0920.jpg" style={{ transform: 'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)' }} alt className="rounded" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto p-4 mb-6 mt-16 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Điểm ưu việt chỉ có tại CyberSoft</h2>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-4 bg-retro-primary rounded-xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-retro-beige">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold text-retro-beige">Học theo lộ trình, có định hướng
                        </h3>
                        <div className="space-y-1 leading-tight text-retro-beige">
                            <p className='mt-5 '>CyberSoft sẽ định hướng và đưa ra các lộ trình học tập cho nghề bạn theo đuổi. Phát triển năng lực và niềm đam mê cảm hứng lập trình của bạn.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-retro-primary rounded-xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-retro-beige">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold text-retro-beige">Nền tảng, tư duy, cốt lõi trong lập trình
                        </h3>
                        <div className="space-y-1 leading-tight text-retro-beige">
                            <p className='mt-5 '>CyberSoft cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-retro-primary rounded-xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-retro-beige">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold text-retro-beige">Mài giũa bạn qua kinh nghiệm, dự án thực tế
                        </h3>
                        <div className="space-y-1 leading-tight text-retro-beige">
                            <p className='mt-5 '>Đội ngũ Giảng viên và các Mentor là những người dày dạn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-retro-primary rounded-xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-retro-beige">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold text-retro-beige">Teamwork, Scrum - Agile. Mentor tận tâm
                        </h3>
                        <div className="space-y-1 leading-tight text-retro-beige">
                            <p className='mt-5 '>Bạn sẽ được giao dự án và làm theo Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong qui trình Scrum, Agile. Được Mentor hỗ trợ tân tâm, nhiệt tình.</p>

                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-retro-primary rounded-xl ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-retro-beige">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold text-retro-beige">Công nghệ mới, chuyên sâu, thực tế
                        </h3>
                        <div className="space-y-1 leading-tight text-retro-beige">
                            <p className='mt-5 '>Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.</p>

                        </div>
                    </div>

                    <div className="flex flex-col items-center p-4 bg-retro-primary rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-retro-beige">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-3xl font-semibold text-retro-beige ">Trao tay chìa khóa thành công toàn diện</h3>
                        <div className="space-y-1 leading-tight">
                            <p className='text-retro-beige'>Hướng dẫn viết CV, phỏng vấn. Kết nối doanh nghiệp, gặp gỡ doanh nghiệp, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.</p>

                        </div>
                    </div>
                </div>
            </section>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80"
                        src="https://cybersoft.edu.vn/wp-content/uploads/2019/02/cybersoft-lap-trinh-.jpg"
                        alt=""
                    />
                    <a
                        href="https://www.youtube.com/watch?v=kcSEsljlges"
                        aria-label="Play Video"
                        className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
                    >
                        <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
                            <svg
                                className="w-10 text-gray-900"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        The quick, brown fox jumps over a very sad and{' '}
                        <span className="inline-block text-deep-purple-accent-400">
                            lazy dog
                        </span>
                    </h2>
                    <p className="mb-5 text-base text-gray-700 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                    <div className="flex items-center md:justify-center">
                        <a
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Get started
                        </a>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default TinTuc