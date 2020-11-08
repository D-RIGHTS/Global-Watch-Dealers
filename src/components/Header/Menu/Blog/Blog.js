import React from "react";
import "./styles.scss";
import DisplayAllPosts from "./CreateNewBlog/DisplayAllPosts";




function Blog () {
    return(
        <div>
            <div className="Blog">
               <DisplayAllPosts />
            </div>
        </div>
    )
}

export default Blog;