
import saved from "./../../../service/insta saved.png";
import bag from "./../../../service/business_center_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png"
const JobCard = ({ title, type, salary, company, location, bookmarked }) => {
    return (
      <div className="bg-white border border-gray-200 shadow-md rounded-md p-3 flex flex-col gap-2 w-[400px] mx-auto relative hover:shadow-lg transition duration-300">
        {/* Job Title */}
        <h3 className="text-base font-semibold text-gray-800 text-left">{title}</h3>
  
        {/* Badge and Salary */}
        <div className="flex gap-3">
          {/* Remote Badge */}
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              type === "REMOTE" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
            }`}
          >
            {type}
          </span>
  
          {/* Salary */}
          <p className="text-sm text-gray-500">Salary: {salary}</p>
        </div>
  
        {/* Company Info */}
        <div className="flex items-center gap-3">
          {/* Company Logo */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png" // Replace with the actual company logo URL
            alt="Company Logo"
            className="w-8 h-8 object-contain"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{company}</p>
  
            {/* Location with Icon */}
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png" // Location Icon URL
                alt="Location Icon"
                className="w-3 h-3"
              />
              <span>{location}</span>
            </div>
          </div>
        </div>
  
        {/* Instagram-Style Save Logo at Bottom */}
        <div className="absolute bottom-3 right-3">
          <img
            src={
              saved
                 // Outline Instagram Save Icon
            }
            alt="Save Icon"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
    );
  };
  
  export default JobCard;
  
  