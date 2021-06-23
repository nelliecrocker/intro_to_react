function Post({date, title, content}) {
    return (
        <div>
            <div>
                Date: {date}
            <br />
                Title: {title}
            </div>
            <p>
                Content: {content}
            </p>
        </div>
    )
}

export default Post