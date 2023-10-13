import {FriendListItem} from '../FriendList/FriendListItem'

export const Friendlist = ({ friends }) => (
  <ul className="friend-list">
    {friends.map((friend) => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
    ))}
  </ul>
);