import Header from "../../components/Header";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import HomeCard from "../../components/HomeCard";
import RecentPublication from "../../components/RecentPublication";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(214,188,250,0.35),_transparent_45%),#f8f5ff]">
        <Body />
        <HomeCard />
        <RecentPublication />
      </div>
    </>
  );
};

export default Home;
