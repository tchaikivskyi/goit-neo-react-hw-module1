import type { FriendData } from "../../types";
import FriendListItem from "./FriendListItem";
import css from "./style.module.css";

function FriendsList({ data }: { data: FriendData[] }) {
  return (
    <ul className={css.friendList}>
      {data.map((friend: FriendData) => (
        <li key={friend.id} className={css.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
