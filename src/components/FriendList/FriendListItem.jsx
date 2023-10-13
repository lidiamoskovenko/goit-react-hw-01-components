import css from '../FriendList/FriendList.module.css';


export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
<span className={css.status} style={{ backgroundColor: isOnline ? 'blue' : 'red' }}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
