import React from 'react';
import blog1 from '../../../images/blog1.jpg';
import blog2 from '../../../images/blog2.jpg';
import blog3 from '../../../images/blog3.jpg';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';

const Blogs = () => {

    const blogData = [
        {
            title: 'This is an Image Post',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',

            img: blog1

        },
        {
            title: 'This is only Blog Post',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
            img: blog2


        },
        {
            title: 'Why you choose us for your Design',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
            img: blog3
        },
    ]
    return (

        <section className="blogs my-3">
            <div className="container">
                <div className="section-header text-center">
                    <span className="divider component-title">Blogs</span>
                </div>
                <h6 className='text-dark text-center'>RECENT POST</h6>
                <div className="card-deck row mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
                    }
                </div>
            </div>
        </section>

    );
};

export default Blogs;