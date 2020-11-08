import React from "react";
import "./styles.scss"

const CreateNewPost = props => {
    return (
        <div>
            <form onSubmit={props.savePost} className="FormStyles">
                <h1>Create Your Fake Post</h1>
                <input
                type="text"
                onChange={props.savePostTitleToState}
                placeholder="title"
                size="39"
                required
                ref={props.getTitle}
                />
                <br />
                <br />
                <textarea
                onChange={props.savePostContentToState}
                placeholder="content"
                rows="8"
                cols="41"
                required
                ref={props.getContent}
                />
                <br />
                <br />
                <button>Save My Post</button>
            </form>
        </div>
    )
}

export default CreateNewPost;