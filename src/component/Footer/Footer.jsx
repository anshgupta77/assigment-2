import instagram from "./../../service/instagram.png";
import facebook from "./../../service/facebook.png";
import youtube from "./../../service/Youtube.jpg";
import twitter from "./../../service/twitter.png"
const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-4 bg-orange-500 rounded-lg text-white mb-2">
 
      <div className="w-[80%] mx-auto flex justify-between">

      <p>© 2024 ExplorIn, All Rights Reserved</p>

      <div className="flex gap-4">
        <img src={instagram} alt="Instagram" className="w-6 h-6" />
        <img src={facebook} alt="Facebook" className="w-6 h-6" />
        <img src={twitter} alt="Facebook" className="w-6 h-6" />
        <img src={youtube} alt="Facebook" className="w-6 h-6" />
      </div>
      </div>
    </footer>
  );
};

export default Footer;

  