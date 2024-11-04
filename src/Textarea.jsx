import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setShowWarning(true);
      setWarningText("No script tag allowed!");
    } else if (newText.includes("@")) {
      setShowWarning(true);
      setWarningText("No @ allowed!");
    } else {
      setWarningText("");
      setShowWarning(false);
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text here..."
        spellCheck="false"
      />
      {showWarning && <Warning warning={warningText} />}
    </div>
  );
}
