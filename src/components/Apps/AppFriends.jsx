import friends from 'friends';
import {Friendlist} from '../FriendList/FriendList';

export const AppFriends = () => {
    return (
      <div 
      style={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
<Friendlist  friends={friends} />
      </div>
    );
  };
  