/** @jsx h */
import { h } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div>
      <img src="/logo.svg" height="400px" alt="the fresh logo: a sliced lemon dripping with juice" />
      <p>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={10} />
    </div>
  );
}
