
import PropTypes from 'prop-types'
 import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline = true }) => {
    return (
          <li className={s.item}>
      <span className={isOnline ? `${s.isOnline}` : `${s.isOffline}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
    )
    
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};


export default FriendListItem