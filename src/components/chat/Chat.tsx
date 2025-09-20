import {
  AddCircleOutline,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@mui/icons-material";
import "./Chat.scss";
import { ChatHeader } from "./ChatHeader";
import ChatMessage from "./ChatMessage";

function Chat() {
  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chatInput */}
      <div className="chatInput">
        <AddCircleOutline />
        <form>
          <input type="text" placeholder="#Udemyへメッセージを送信" />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcard />
          <Gif />
          <EmojiEmotions />
        </div>
      </div>
    </div>
  );
}

export default Chat;
