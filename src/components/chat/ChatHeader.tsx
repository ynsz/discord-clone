import {
  Help,
  Notifications,
  PeopleAlt,
  PushPin,
  Search,
  Send,
} from "@mui/icons-material";
import "./ChatHeader.scss";

export const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderHash">#</span>
          Udemy
        </h3>
      </div>

      <div className="chatHeaderRight">
        <Notifications />
        <PushPin />
        <PeopleAlt />
        <div className="chatHeaderSrarch">
          <input type="text" placeholder="検索" />
          <Search />
        </div>
        <Send />
        <Help />
      </div>
    </div>
  );
};
