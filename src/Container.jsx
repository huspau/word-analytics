import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfWords: text.split(" ").filter((c) => "" !== c).length,
    numberOfCharacters: text.length,
    numberOfInstagramCharacters: 280 - text.length,
    numberOfFacebookCharacters: 2200 - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
