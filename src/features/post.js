import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NODE_ENV === "production" ? 'https://codesaver-backend.onrender.com' : 'http://localhost:5000', }),
    endpoints: (builder) => ({

        getBlogs: builder.query({
            query: () => {
                return '/api/post/'
            }
        }),

        getSinglePost: builder.query({
            query: (id) => {
                return `api/post/${id}`
            }
        }),

        createPost: builder.mutation({
            query: (data) => {
                console.log(data);
                return ({
                    url: '/api/post',
                    method: "POST",
                    body: data,
                    'mode': 'cors',
                    'headers': {
                        'accept': 'application/json, text/plain, */*', 'content-type': 'application/json'
                    }
                })
            }
        }),

        deletePost: builder.mutation({
            query: (id) => {
                return ({
                    url: `/api/post/${id}`,
                    method: "DELETE"
                })
            }
        })

    })
})


export const { useCreatePostMutation, useGetBlogsQuery, useGetSinglePostQuery, useDeletePostMutation } = postApi
export default postApi;