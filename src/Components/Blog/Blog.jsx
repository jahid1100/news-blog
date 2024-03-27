import './Blog.css'
import { FaRegBookmark } from "react-icons/fa6";
const blog = ({ blog,handleBookMark,handleMarkAsRead }) => {
    // console.log(blog)

    const { cover, author, author_img, hashtags, id, posted_date,reading_time, title} = blog

    return (
        <div className='space-y-2'>
             
            <img className='cover-img' src={cover} alt="" />
           <div className='flex justify-between items-center'>
           <div className="flex justify-between items-center w-1/2">
                <img className="author-img" src={author_img} alt="" />
                <div className=''>
                    <h4 className='text-xl'>{author}</h4>
                    <p className='text-2xl'>{posted_date}</p>
                </div>
            </div>
            <div className='flex items-center w-1/2 justify-end space-x-3'>
                <p>{reading_time} minutes read</p>
                <button onClick={()=>handleBookMark(blog)}><FaRegBookmark /></button>
            </div>
           </div>
            <h3 className='text-3xl'>{title}</h3>
            <div className='space-x-2'>
            {
            
                hashtags.map(hashtag=><span className='text-indigo-700'><a href="">#{hashtag}</a></span>)
            }
                
            </div>
            <button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-lg underline'>Mark as read</button>
            <hr/>
        </div>
    );
};

export default blog;