import Dogs from "@/Dogs";
import Memes from "@/Memes";
import Rick from "./Rick";
import Beer from "./Beer";

export default function Home() {
  return (
    <div>
      <h1>Can you catch them all?</h1>
      <Dogs />
      <hr />
      <Memes />
      <hr />
      <Rick />
      <hr />
      <Beer />
    </div>
  );
}
