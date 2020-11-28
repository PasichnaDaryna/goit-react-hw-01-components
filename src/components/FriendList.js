
import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types'
 import s from './FriendList.module.css';



const FriendList = ({friends}) => {
    return (
        <ul className={s.stats}>{friends.map(FriendListItem)}</ul>
    );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};


export default FriendList