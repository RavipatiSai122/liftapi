import { useEffect, useState } from "react";
import { ArrowUp, Phone, MessageCircle, Send, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import robotAnim from "../assets/robot.json"; // ⭐ Full robot animation here

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showGreeting, setShowGreeting] = useState(false);

  const navigate = useNavigate();

  // Scroll-to-top button logic
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ Greeting every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowGreeting(true);
      setTimeout(() => setShowGreeting(false), 1500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const openChat = () => setChatOpen(true);

  // Send message to FastAPI
  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const question = input;
    setInput("");

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      setMessages((prev) => [...prev, { sender: "bot", text: data.answer }]);

      // If backend sends "navigate": "/some-page"
      if (data.navigate) {
        setTimeout(() => navigate(data.navigate), 600);
      }

    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Server offline." }]);
    }
  };

  return (
    <>
      {/* CHAT WINDOW */}
      {chatOpen && (
        <div className="fixed bottom-32 right-4 w-80 sm:w-96 h-[430px]
          bg-white/90 backdrop-blur-xl shadow-2xl rounded-xl border border-gray-300
          flex flex-col z-[999] animate-popup">

          {/* CHAT HEADER */}
          <div className="bg-blue-600 text-white p-3 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Lottie animationData={robotAnim} style={{ width: 40, height: 40 }} />
              <h2 className="font-semibold">Lift Specialist Bot</h2>
            </div>
            <button onClick={() => setChatOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-xl text-sm max-w-[80%] ${
                  msg.sender === "user" ? "bg-blue-100 ml-auto" : "bg-gray-200"
                }`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* INPUT BOX */}
          <div className="p-3 border-t flex gap-2 bg-white/70">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded-lg px-3 py-2 text-sm outline-none"
              placeholder="Ask something..."
            />
            <button className="bg-blue-600 text-white px-3 rounded-lg shadow-md" onClick={sendMessage}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-4 flex flex-col items-end gap-4 z-[998]">

        {/* ⭐ Greeting Bubble appears every 2 seconds */}
        {showGreeting && (
          <div className="bg-blue-600 text-white px-3 py-2 text-sm rounded-lg shadow-xl animate-fade">
            👋 Hello! Need help?
          </div>
        )}

        {/* ⭐ FLOATING ROBOT ANIMATION BUTTON (NO ICON) */}
<button
  onClick={openChat}
  className="
    bg-white 
    rounded-full 
    shadow-xl 
    animate-float 
    flex 
    items-center 
    justify-center
    border-2 
    border-blue-500
    hover:scale-110 
    transition
  "
  style={{ width: 50, height: 50 }}
>
  <Lottie 
    animationData={robotAnim} 
    loop={true} 
    style={{ width: 55, height: 55 }}
  />
</button>


        {/* WhatsApp */}
        <a
          href="https://wa.me/916301932501"
          target="_blank"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <MessageCircle size={22} />
        </a>

        {/* Phone */}
        <a
          href="tel:+916301932501"
          className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <Phone size={22} />
        </a>

        {/* Scroll to Top */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            <ArrowUp size={22} />
          </button>
        )}
      </div>

      <style>{`
        @keyframes fade {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade { animation: fade .5s ease-out; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 2.8s infinite ease-in-out; }

        @keyframes popup {
          0% { opacity: 0; transform: scale(.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-popup { animation: popup .25s ease-out; }
      `}</style>
    </>
  );
}
