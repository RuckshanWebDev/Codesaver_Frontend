import React, { useEffect } from 'react'
import { useDeletePostMutation, useGetSinglePostQuery } from '../features/post'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { BsFolderSymlink } from 'react-icons/bs'
import { AiOutlineCopy, AiFillDelete } from 'react-icons/ai'


function PostPage() {

    const { id } = useParams()
    const navigate = useNavigate()
    const getSinglePost = useGetSinglePostQuery(id)
    const [deletePost, deleteData] = useDeletePostMutation()
    console.log(getSinglePost);

    const deleteHandler = () => {
        deletePost(id)
    }

    const copyContentHandler = () => {
        navigator.clipboard.writeText(getSinglePost.data?.data?.content);
    }

    const copyLinkHandler = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    if (deleteData.isSuccess) {
        navigate('/')
    }


    useEffect(() => {

    }, [])

    return (
        <div className='postpage' >

            <div className="container mx-auto bg-slate-300 rounded-md flex mb-4 p-4 justify-between">

                <div> <Link to={'/'}> <MdArrowBack className='w-7 h-7 cursor-pointer ' /></Link></div>

                <div className='flex gap-8' >
                    <BsFolderSymlink className='w-7 h-7 cursor-pointer ' onClick={copyLinkHandler} />
                    <AiOutlineCopy className='w-7 h-7 cursor-pointer ' onClick={copyContentHandler} />
                    <AiFillDelete className='w-7 h-7 cursor-pointer ' onClick={deleteHandler} />
                </div>

            </div>


            <div className="container mx-auto px-4 py-5 bg-slate-300 rounded-md">
                {
                    getSinglePost.isLoading ?
                        "Loading" :
                        getSinglePost.isSuccess && <>
                            <time className="text-gray-500">
                                {getSinglePost.data?.data.createdAt.slice(0, 10)}
                            </time>
                            <time className="text-gray-500">
                                {getSinglePost.data?.data.createdAt.slice(11, 19)}
                            </time>
                            <h1 className='text-3xl	 sm:text-4xl font-bold antialiased' >{getSinglePost.data?.data.title}</h1>

                            <p className='my-5 font-medium text-md antialiased' >{getSinglePost.data?.data.content}</p>
                        </>
                }
            </div>

        </div>
    )
}

export default PostPage
