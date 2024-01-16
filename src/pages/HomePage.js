import React, { useEffect } from 'react'
import { useGetBlogsQuery } from '../features/post'
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom';

function HomePage() {

    const getPosts = useGetBlogsQuery()
    console.log(getPosts);
    useEffect(() => {

    }, [])

    return (
        <div className='homepage'>


            <div className="fixed bottom-4 right-4 bg-slate-500 rounded-full p-3 cursor-pointer"><Link to='/add' > <MdAdd className='w-10 h-10' /></Link></div>

            <div className="bg-slate-700 h-full">
                <div className="mx-auto  px-2 lg:px-8">

                    <div className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 pb-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                        {
                            getPosts.isLoading ?
                                'Loading'
                                :
                                getPosts.isSuccess &&
                                getPosts.data?.data.map((item, index) => {

                                    return (
                                        <article key={index} className=" overflow-hidden bg-slate-300  flex max-w-xl flex-col items-start justify-between p-5 rounded-md">
                                            <div className="flex items-center gap-x-4 text-xs">
                                                <time className="text-gray-500">
                                                    {item.createdAt.slice(0, 10)}
                                                </time>
                                                <time className="text-gray-500">
                                                    {item.createdAt.slice(11, 19)}
                                                </time>

                                            </div>
                                            <div className="group relative">
                                                <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 font-bold group-hover:text-gray-900 text-left">
                                                    <Link to={item._id}>
                                                        <span className="absolute inset-0" />
                                                        {item.title.slice(0, 30)}
                                                    </Link>
                                                </h3>
                                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 text-left">{item.content.slice(0, 150)
                                                } </p>
                                            </div>

                                        </article>
                                    )

                                })

                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
