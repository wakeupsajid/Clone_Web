import { useEffect, useState } from "react";
import BackgroundContent from "./BackgroundContent";
import Footer from "./Fooer";


const BackgroundPage = () => {
  const [pages, setPages] = useState([1]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 200) {
        setLoading(true);

        setTimeout(() => {
          setPages((prev) => [...prev, prev.length + 1]);
          setLoading(false);
        }, 500);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [loading]);
  return (
    <>
      {pages.map((_, index) => (

        <BackgroundContent key={index} />

      ))}
      {loading && (
        <div className="py-10 text-center text-lg font-semibold">
          Loading....
        </div>
      )}
<Footer/>


    </>
  );
};
export default BackgroundPage;