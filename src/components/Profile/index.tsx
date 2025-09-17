import css from "./style.module.css";

type UserData = {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
};

function Profile({ data }: { data: UserData }) {
  const { username, tag, location, avatar, stats } = data;

  return (
    <>
      <div className={css.profile}>
        <div className={css.profileContent}>
          <img src={avatar} alt="User avatar" className={css.profileImage} />
          <p className={css.profileName}>{username}</p> <p>@{tag}</p>{" "}
          <p>{location}</p>
        </div>
        <ul className={css.profileStats}>
          <li>
            <span>Followers</span> <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span> <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span> <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
