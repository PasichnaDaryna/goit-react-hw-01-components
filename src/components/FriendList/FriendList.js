
import FriendListItem from '../FriendList/FriendListItem'
import PropTypes from 'prop-types'
 import s from '../FriendList/FriendList.module.css';



const FriendList = ({friends}) => {
    return (
      <ul className={s.stats}>{friends.map(({ id, name, avatar, isOnline }) =>
        <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline = {isOnline}/>)}</ul>
    );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};


export default FriendList