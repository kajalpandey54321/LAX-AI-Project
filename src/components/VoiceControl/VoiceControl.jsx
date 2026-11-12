import "./VoiceControl.css";
import { useState } from "react";
import { Mic } from "lucide-react";

function VoiceControl() {
  const [listening, setListening] = useState(false);

  const handleVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onresult = (event) => {
      const transcript =
        event.results[0][0].transcript;

      console.log("Your voice:", transcript);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div className="voice-section">

      {/* Left Waveform */}

      <div className="waveform">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{
              "--i": i,
              "--h": `${12 + Math.abs(10 - i) * 4}px`
            }}
          />
        ))}
      </div>

      {/* Microphone */}

      <button
        className={`voice-mic ${listening ? "listening" : ""}`}
        onClick={handleVoice}
        aria-label="Start voice recording"
      >
        <Mic size={38} />
      </button>

      {/* Right Waveform */}

      <div className="waveform">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{
              "--i": i,
              "--h": `${12 + Math.abs(10 - i) * 4}px`
            }}
          />
        ))}
      </div>

    </div>
  );
}

export default VoiceControl;