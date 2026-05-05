import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LiveEvents from "../components/LiveEvents";

function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <LiveEvents />
    </div>
  );
}

export default Home;