import { useState } from "react";
import Warning from "./Warning";

export default function Textarea() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleChange = (e) => {
    let newText = e.target.value;
    setShowWarning(newText.includes("<script>"));
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
      {showWarning && <Warning />}
    </div>
  );
}
