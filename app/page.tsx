import TypingAnimation from "./components/TypingAnimation";

export default function Home() {
  return (
    <div className="home-container font-mono">
      <div className="flex items-center justify-center min-h-screen">
        <div className="column text-center">
        <h1 className="name text-5xl font-bold">Sahil Saini</h1>
        <br/>
        <TypingAnimation/>
        </div>
    </div>
    </div>
  );
}
