import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Bookmarks from "../Bookmarks/Bookmarks";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    // console.log(blogs)

    const [markedRead, setMarkRead] = useState([])

    const handleBookMark = (blog) => {
        // console.log(blog)
        const isExist = markedRead.find(read => read.id == blog.id)
        if (!isExist) {
            const newBookMark = [...markedRead, blog]
            setMarkRead(newBookMark)
        }else{
            alert('already read')
        }

    }
    // console.log(markedRead)


    const [markAsRead,setMarkAsRead]=useState(0)
    const handleMarkAsRead=(time,id)=>{

        const newMarkTime = markAsRead + time;
        setMarkAsRead(newMarkTime)

        const remainingBookmarks = markedRead.filter(bookmark=>bookmark.id!=id)
        setMarkRead(remainingBookmarks)
    }

    return (
        <div className="flex p-4 space-x-2">

            <div className="w-2/3 space-y-10">

                {
                    blogs.map((blog, idx) => (<Blog
                        key={idx}
                        blog={blog}
                        handleBookMark={handleBookMark}
                        handleMarkAsRead={handleMarkAsRead}
                    ></Blog>))
                }
            </div>
            <div className="w-1/3 p-6 bg-lime-500">
                <div className="shadow-md p-4 text-amber-700">
                    <h4 className="text-2xl h-10">Reding Time : {markAsRead} </h4>
                    <p className="text-2xl">Bookmarked Blogs : {markedRead.length}</p>
                </div>
                <div>
                    {
                        markedRead.map((read, idx) => (
                            <Bookmarks
                                key={idx}
                                read={read}
                            ></Bookmarks>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;