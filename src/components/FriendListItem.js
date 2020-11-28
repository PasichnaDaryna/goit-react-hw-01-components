


const FriendListItem = ({ avatar, name, isOnline=true, id }) => {
    return (
        <li class="item" key={id}>
  <span class="status"></span>
  <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name }</p>
</li>
    )
    
}



export default FriendListItem