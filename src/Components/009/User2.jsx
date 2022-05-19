function User2({ user2s }) {
    return (
        <div>
            <span>{user2s.firstName}</span><img src={user2s.image.slice(0, user2s.image.indexOf('?'))}></img>
        </div>
    )
}

export default User2;