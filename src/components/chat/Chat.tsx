import {
  AddCircleOutline,
  CardGiftcard,
  EmojiEmotions,
  Gif,
} from "@mui/icons-material";
import "./Chat.scss";
import { ChatHeader } from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import { useAppSelecter } from "../../app/hocks";
import { useState } from "react";

function Chat() {
  const [inputText, setInputText] = useState<string>("");
  const channelName = useAppSelecter((state) => state.channel.channelName);

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div className="chat">
      {/* chatHeader */}
      <ChatHeader channelName={channelName} />
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
          <input
            type="text"
            placeholder="#Udemyへメッセージを送信"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
          />
          <button
            type="submit"
            className="chatInputButton"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              sendMessage(e)
            }
          >
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
