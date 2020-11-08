import React from "react";

function Modify () {
    return (
        <div>
            <form>
                <h1>Modify Post</h1>
                <input type="text" placeholder="title" size="39" required />
                <br />
                <br />
                <textarea placeholder="content" rows="8" cols="41" required />
                <br />
                <br />
                <button>Update Post</button>
            </form>
        </div>
    )
}

export default Modify;