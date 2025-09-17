import type { FriendData } from "../../types";
import css from "./style.module.css";

function FriendListItem({ avatar, name, isOnline }: Omit<FriendData, "id">) {
  return (
    <>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.frindName}>{name}</p>
        <p className={isOnline ? css.online : css.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
}

export default FriendListItem;
