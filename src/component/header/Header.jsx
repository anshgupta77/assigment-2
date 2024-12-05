// import React from 'react';
// import './Header.css'; // Link to the CSS file
// import bag from "./../../service/business_center_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png"
// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-container">
//         <div>
//             <img src={bag} alt="" />
//             <div className="logo">Explorin Solutions</div>
//         </div>
//         <div className="header-actions">
//           <button className="toggle-button">My Saved Jobs only</button>
//           <span className="notification-icon">🔔</span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import './Header.css'; // Link to the CSS file
import bag from "./../../service/WhatsApp Image 2024-12-05 at 17.48.29_f4e367db.jpg";
import notification from "./../../service/notification.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-container">
          <img src={bag} alt="Logo Icon" className="logo-icon" />
          <div className="logo">Explorin Solutions</div>
        </div>

        {/* Actions Section */}
        <div className="header-actions">
          <button className="toggle-button">My Saved Jobs only</button>
          <img src={notification} alt="" className='w-[24px] h-[24px]' />
        </div>
      </div>
    </header>
  );
};

export default Header;

