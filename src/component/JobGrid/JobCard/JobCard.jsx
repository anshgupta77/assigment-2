
import saved from "./../../../service/insta saved.png";
import bag from "./../../../service/business_center_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 (1).png"
const JobCard = ({ title, type, salary, company, location, bookmarked }) => {
    return (
      <div className="bg-white border border-gray-200 shadow-md rounded-md p-3 flex flex-col gap-2 w-[400px] mx-auto relative hover:shadow-lg transition duration-300">
   
        <h3 className="text-base font-semibold text-gray-800 text-left">{title}</h3>
  
      
        <div className="flex gap-3">
       
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              type === "REMOTE" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
            }`}
          >
            {type}
          </span>
  
 
          <p className="text-sm text-gray-500">Salary: {salary}</p>
        </div>
  
     
        <div className="flex items-center gap-3">
         
          <img
            src="https://cdn-icons-png.flaticon.com/512/281/281764.png" 
            alt="Company Logo"
            className="w-8 h-8 object-contain"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{company}</p>
  
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png" 
                alt="Location Icon"
                className="w-3 h-3"
              />
              <span>{location}</span>
            </div>
          </div>
        </div>
  
   
        <div className="absolute bottom-3 right-3">
          <img
            src={
              saved
               
            }
            alt="Save Icon"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
    );
  };
  
  export default JobCard;
  
  