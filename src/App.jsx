import Header from "./components/Header/Header";
import AboutUs from "./components/Section/AboutUs";
import Experience from "./components/Section/Experience";
import BuddhaBanner from "./components/Section/BuddhaBanner";
import Footer from "./components/Footer/footer";
import VideoPlayer from "./components/Section/VideoPlayer";
import DonateOnline from "./components/Footer/DonateOnline";

function App() {
  return (
    <div>
      <Header />
      <BuddhaBanner />
      <AboutUs />
      <Experience />
      <VideoPlayer />
      <DonateOnline />
      <Footer />
    </div>
  );
}

export default App;
