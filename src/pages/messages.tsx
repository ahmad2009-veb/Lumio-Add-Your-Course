import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Phone,
  Video,
  MoreVertical,
  Smile,
  Paperclip,
  Mic,
  Send,
  Check,
  CheckCheck,
  PhoneOff,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Course } from "@/reducers/coursesSlice";

const Messages = () => {
  const [showStickers, setShowStickers] = useState(false);
  const [message, setMessage] = useState("");

  const stickers = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😆",
    "😊",
    "😇",
    "🙂",
    "🙃",
    "😉",
    "😌",
    "😍",
    "🥰",
    "😘",
    "😗",
    "😙",
    "😚",
    "❤️",
    "💖",
    "💘",
    "💕",
    "💞",
    "💓",
    "💗",
    "😠",
    "😡",
    "🤬",
    "😤",
    "🤗",
    "🤭",
    "🤫",
    "🤔",
    "🤨",
    "🫠",
    "🤥",
    "😴",
    "🤤",
    "😪",
    "😫",
    "🏓",
    "👻",
    "💩",
    "🤖",
    "🎃",
    "🧸",
    "🦄",
    "🎵",
    "🎶",
    "🎧",
    "🎤",
    "🎸",
    "🎹",
    "🚗",
    "🚕",
    "🚙",
    "🛵",
    "🏍️",
    "🚀",
    "✈️",
    "💻",
    "📱",
    "🖱️",
    "⌨️",
    "🖥️",
    "💰",
    "💵",
    "💸",
    "💳",
    "🎁",
    "🎀",
    "🎄",
    "🛍️",
    "🫶",
    "🩷",
    "🫡",
    "🙃",
    "🤪",
    "😇",
  ];

  const { id } = useParams();

  const [info, setinfo] = useState<Course>([]);

  async function getInof() {
    try {
      const { data } = await axios.get(`http://localhost:3002/data/${id}`);
      setinfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getInof();
  }, [id]);

  const [messages, setMessages] = useState([]);

  function addSticker(sticker: string) {
    setMessage((prev) => prev + " " + sticker);
    setShowStickers(false);
  }

  const api = "http://localhost:3002/messageDB";

  async function GetChat() {
    try {
      const { data } = await axios.get(api);
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    GetChat();
  }, []);

  function handleSend() {
    if (!message.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sent: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: false,
    };

    AddMessage(newMessage);
    setMessage("");
  }

  async function AddMessage(mesage) {
    try {
      await axios.post(api, mesage);
      setMessages((prev) => [...prev, mesage]);
    } catch (error) {
      console.log(error);
    }
  }

  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = async () => {
    setShowCamera(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera access denied:", err);
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border bg-card px-4 py-3 shadow-sm">
        <Link to={`/instructor/${info?.instructorId}`}>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={info?.image} alt="Sarah Anderson" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                {info?.instructor}
              </h2>
              <p className="text-xs text-message-timestamp">Active now</p>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Phone className="h-5 w-5" />
          </Button>
          <Button
            onClick={handleVideoClick}
            variant="ghost"
            size="icon"
            className="h-9 w-9"
          >
            <Video className="h-5 w-5" />
          </Button>
          {showCamera && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-4 rounded-lg">
                <video
                  style={{
                    "-webkit-transform": " scaleX(-1)",
                    transform: "scaleX(-1)",
                  }}
                  ref={videoRef}
                  autoPlay
                  className="w-96 h-72 rounded-lg"
                />
                <button
                  onClick={() => setShowCamera(false)}
                  className="mt-2 text-white px-3 py-1 rounded"
                >
                  <PhoneOff size={28} color="#ff0000" />
                </button>
              </div>
            </div>
          )}
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <ScrollArea className="flex-1 px-4 py-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sent ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[70%] gap-2 ${
                  message.sent ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {!message.sent && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={info?.image} alt="Sarah" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                )}
                <div className="flex flex-col gap-1">
                  <div
                    className={`rounded-2xl px-4 py-2 shadow-sm transition-all hover:shadow-md ${
                      message.sent
                        ? "rounded-br-sm bg-message-sent text-message-sent-foreground"
                        : "rounded-bl-sm bg-message-received text-message-received-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <div
                    className={`flex items-center gap-1 px-2 ${
                      message.sent ? "justify-end" : "justify-start"
                    }`}
                  >
                    <span className="text-xs text-message-timestamp">
                      {message.time}
                    </span>
                    {message.sent &&
                      (message.read ? (
                        <CheckCheck className="h-3 w-3 text-primary" />
                      ) : (
                        <Check className="h-3 w-3 text-message-timestamp" />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="px-4 py-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={info?.image} alt="Sarah" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1 rounded-full bg-message-received px-3 py-2">
            <div className="h-2 w-2 animate-bounce rounded-full bg-message-timestamp [animation-delay:-0.3s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-message-timestamp [animation-delay:-0.15s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-message-timestamp"></div>
          </div>
        </div>
      </div>

      <div className="relative">
        {showStickers && (
          <div
            className="absolute bottom-16 left-[1300px] w-56
                  bg-card border border-border shadow-xl 
                  rounded-xl p-3
                  grid grid-cols-4 gap-2 
                  max-h-48 overflow-y-auto 
                  animate-in fade-in-50
                  z-20"
          >
            {stickers.map((s, i) => (
              <button
                key={i}
                onClick={() => addSticker(s)}
                className="text-xl h-10 w-10 flex items-center justify-center
                   hover:bg-secondary rounded-lg transition"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="border-t border-border bg-card px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
              <Paperclip className="h-5 w-5" />
            </Button>

            <div className="relative flex-1">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="h-10 rounded-full border-input bg-secondary pr-10 focus-visible:ring-1"
              />
              <Button
                onClick={() => setShowStickers(!showStickers)}
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2"
              >
                <Smile className="h-5 w-5" />
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
              <Mic className="h-5 w-5" />
            </Button>
            <Button
              onClick={handleSend}
              size="icon"
              className="h-10 w-10 shrink-0 rounded-full"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
