import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_LIMIT, INSTAGRAM_LIMIT } from "./Constants";

export default function Container() {
  const [text, setText] = useState("");
  const stats = {
    numberOfWords: text.split(" ").filter((c) => "" !== c).length,
    numberOfCharacters: text.length,
    numberOfInstagramCharacters: INSTAGRAM_LIMIT - text.length,
    numberOfFacebookCharacters: FACEBOOK_LIMIT - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
