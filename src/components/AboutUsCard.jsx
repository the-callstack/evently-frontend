import React from 'react'

export default function AboutUsCard({ img, alt, name, phone, email, github, linkedin }) {

    return (
        <div>
            <div className="container  mx-auto px-20">

                <div className='w-80  pt-16'
                // style={{ backgroundImage: 'background-color:rgb(255, 255, 255)' }}
                >

                    <div className="relative max-w-7xl py-8 px-2 mx-auto mb-8 text-purple-800 bg-white rounded-md shadow-2xl "
                    // style=  "cursor: auto;"
                    >
                        <div className="items-center text-center xs:flex xs:text-left xs:space-x-10 ">
                            <img className=" w-24 h-full rounded-full mx-auto mb-4 -mt-12 transform -translate-y-2 xs:mb-0 xs:mt-0 xs:mx-none md:w-36" src={img} alt={alt} height="122" width="116" />
                            <div className="flex-1 leading-chillaxed ">
                                <div className="mb-4">
                                    <strong className="block text-lg">{name}</strong>Web Developer
                                </div>
                                <ul>
                                    <li>
                                        <a href="tel:+31620842105" className="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline">
                                            <svg className="inline-block w-4 h-4 mr-3 opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>{phone}
                                        </a>
                                    </li>
                                    <li>
                                        <svg className="inline-block w-4 h-4 mr-3 opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        <a className="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline" href="mailto:john@doe.com">{email}</a>
                                    </li>
                                    <li>
                                        <svg className="inline-block w-4 h-3 mr-3 -mt-1 opacity-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                                        </svg>
                                        <a className="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline" href="#" target="_blank" rel="noreferrer noopener">{linkedin}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
