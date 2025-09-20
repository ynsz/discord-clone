import { Avatar } from "@mui/material";
import "./ChatMessage.scss";

const ChatMessage = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          shin code
          <span className="messageTimeStamp">2022/12/18</span>
        </h4>

        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
