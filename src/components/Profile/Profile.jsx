import css from './Profile.module.css'  
export const Profile = ({avatar,username,tag,location,stats})=> {
    return (
        <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar}
            alt={username}
            className={css.avatar}
          />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
      
        <ul className={css.stats}>         
         <li>
            <span className={css.lable}>Followers</span>
            <span className={css.quantity}
            >{stats.followers}</span>
          </li>
          <li>
            <span className={css.lable}>Views</span>
            <span className={css.quantity}
            >{stats.views}</span>
          </li>
          <li>
            <span className={css.lable}>Likes</span>
            <span className={css.quantity}
            >{stats.likes}</span>
          </li>
        </ul>
      </div>);
  };
