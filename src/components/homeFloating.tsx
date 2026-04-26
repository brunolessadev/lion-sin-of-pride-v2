import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/homeFloating.css';

export default function FloatingCharacter() {
  const navigate = useNavigate()

  const messages = [
    "Tem códigos novos disponíveis!",
    "Clique aqui",
    "Explore Britannia comigo!",
    "Você não vai querer perder isso...",
  ];

  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [message, setMessage] = useState("");

  function triggerMessage() {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setMessage(random);
    setShowBubble(true);

    setTimeout(() => {
      setShowBubble(false);
    }, 5000);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
      triggerMessage();

      if (!localStorage.getItem("seenCharacter")) {
        triggerMessage();
        localStorage.setItem("seenCharacter", "true");
      }
    }, );

    return () => clearTimeout(timeout); // 🔥 evita bugs
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`floating-character ${showBubble ? "show" : ""}`}
      onClick={() => navigate('/codes')}
      onMouseEnter={triggerMessage}
    >
      <div className="speech-bubble">{message}</div>

      <img
        src="https://res.cloudinary.com/dsmwi4i94/image/upload/v1777015027/2-merlin-flutuante_t0vywt.png"
        className="character-img"
        alt="Floating character"
      />
    </div>
  );
}