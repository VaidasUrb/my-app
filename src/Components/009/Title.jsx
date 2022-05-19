function Title({ title, index }) {
    return (
        <div>
            <span style={{ textDecoration: index % 2 ? 'none' : 'underline' }}>{title.title}</span>
        </div >
    )
}

export default Title;