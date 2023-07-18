import React from 'react'
import { useCreatePostMutation } from '../features/post';
import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md'

function AddPostPage() {

    const navigate = useNavigate()
    const [creatpost, postData] = useCreatePostMutation()

    console.log(postData);

    const formHandler = (e) => {
        e.preventDefault()
        console.log(e.target.title.value);
        console.log(e.target.message.value);

        creatpost({
            title: e.target.title.value,
            content: e.target.message.value
        })

    }

    if (postData.isSuccess) {
        navigate(`/${postData.data?.data?._id}`)
    }


    return (
        <div className='addpostpage' >

            <div className="container mx-auto bg-slate-300 rounded-md flex mb-4 p-4 justify-between">
                <div> <Link to={'/'}> <MdArrowBack className='w-7 h-7 cursor-pointer ' /></Link></div>
            </div>

            <div className="container mx-auto px-4 py-5 bg-slate-300 rounded-md">

                <form onSubmit={formHandler} >
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Title
                        </span>
                        <input type="text" name="title" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Title of the post" />
                    </label>

                    <div className="sm:col-span-2 my-10">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Message
                            </span>
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>

                    <button type="submit" className='bg-slate-500 py-3 px-8 rounded-md text-xl font-medium' >{postData.isLoading ? 'Posting ...' : 'Post'}</button>
                </form>
            </div>
        </div>
    )
}

export default AddPostPage
