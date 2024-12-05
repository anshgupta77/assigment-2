import JobCard from "./JobCard/JobCard";

const JobGrid = () => {
  const jobs = [
    { title: "Technical Support Specialist", type: "REMOTE", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh", bookmarked: false },
    { title: "Technical Support Specialist", type: "REMOTE", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh", bookmarked: false },
    { title: "Software Engineer", type: "REMOTE", salary: "$80,000 - $100,000", company: "Google Inc.", location: "New York, USA", bookmarked: false },
    { title: "Data Analyst", type: "REMOTE", salary: "$60,000 - $80,000", company: "Google Inc.", location: "London, UK", bookmarked: false },
    { title: "UX Designer", type: "REMOTE", salary: "$70,000 - $90,000", company: "Google Inc.", location: "Berlin, Germany", bookmarked: false },
    { title: "Product Manager", type: "REMOTE", salary: "$100,000 - $120,000", company: "Google Inc.", location: "Mountain View, USA", bookmarked: false },
    { title: "Cloud Solutions Architect", type: "REMOTE", salary: "$120,000 - $140,000", company: "Google Inc.", location: "Sydney, Australia", bookmarked: false },
    { title: "Marketing Specialist", type: "REMOTE", salary: "$50,000 - $60,000", company: "Google Inc.", location: "Toronto, Canada", bookmarked: false },
    { title: "Sales Engineer", type: "REMOTE", salary: "$75,000 - $90,000", company: "Google Inc.", location: "Paris, France", bookmarked: false },
    { title: "Business Intelligence Developer", type: "REMOTE", salary: "$95,000 - $115,000", company: "Google Inc.", location: "Singapore", bookmarked: false },
    { title: "DevOps Engineer", type: "REMOTE", salary: "$110,000 - $130,000", company: "Google Inc.", location: "Berlin, Germany", bookmarked: false },
    { title: "Mobile Developer", type: "REMOTE", salary: "$80,000 - $100,000", company: "Google Inc.", location: "Tokyo, Japan", bookmarked: false },
    { title: "Product Designer", type: "REMOTE", salary: "$75,000 - $90,000", company: "Google Inc.", location: "London, UK", bookmarked: false },
    { title: "Data Scientist", type: "REMOTE", salary: "$100,000 - $120,000", company: "Google Inc.", location: "Seoul, South Korea", bookmarked: false },
    { title: "Security Engineer", type: "REMOTE", salary: "$90,000 - $110,000", company: "Google Inc.", location: "San Francisco, USA", bookmarked: false },
    { title: "AI Researcher", type: "REMOTE", salary: "$120,000 - $140,000", company: "Google Inc.", location: "Zurich, Switzerland", bookmarked: false },
    { title: "Network Engineer", type: "REMOTE", salary: "$80,000 - $100,000", company: "Google Inc.", location: "Amsterdam, Netherlands", bookmarked: false },
    { title: "Full Stack Developer", type: "REMOTE", salary: "$90,000 - $110,000", company: "Google Inc.", location: "Bangalore, India", bookmarked: false },
    { title: "System Administrator", type: "REMOTE", salary: "$70,000 - $90,000", company: "Google Inc.", location: "Madrid, Spain", bookmarked: false },
    { title: "Front-End Developer", type: "REMOTE", salary: "$75,000 - $95,000", company: "Google Inc.", location: "Copenhagen, Denmark", bookmarked: false },
    { title: "Backend Developer", type: "REMOTE", salary: "$85,000 - $105,000", company: "Google Inc.", location: "Rome, Italy", bookmarked: false },
    { title: "Business Analyst", type: "REMOTE", salary: "$70,000 - $90,000", company: "Google Inc.", location: "Vienna, Austria", bookmarked: false },
    { title: "Game Developer", type: "REMOTE", salary: "$80,000 - $100,000", company: "Google Inc.", location: "Los Angeles, USA", bookmarked: false },
    { title: "Data Engineer", type: "REMOTE", salary: "$100,000 - $120,000", company: "Google Inc.", location: "Hong Kong", bookmarked: false },
    { title: "Operations Manager", type: "REMOTE", salary: "$90,000 - $110,000", company: "Google Inc.", location: "Dubai, UAE", bookmarked: false },
    { title: "Quality Assurance Engineer", type: "REMOTE", salary: "$70,000 - $90,000", company: "Google Inc.", location: "Moscow, Russia", bookmarked: false },
    { title: "HR Specialist", type: "REMOTE", salary: "$60,000 - $80,000", company: "Google Inc.", location: "Beijing, China", bookmarked: false },
    { title: "Legal Counsel", type: "REMOTE", salary: "$120,000 - $140,000", company: "Google Inc.", location: "Hong Kong", bookmarked: false },
    { title: "Video Content Producer", type: "REMOTE", salary: "$70,000 - $90,000", company: "Google Inc.", location: "São Paulo, Brazil", bookmarked: false },
    { title: "Sales Manager", type: "REMOTE", salary: "$90,000 - $110,000", company: "Google Inc.", location: "Mexico City, Mexico", bookmarked: false },
    { title: "Cloud Consultant", type: "REMOTE", salary: "$100,000 - $120,000", company: "Google Inc.", location: "Mumbai, India", bookmarked: false },
    { title: "Video Game Tester", type: "REMOTE", salary: "$50,000 - $60,000", company: "Google Inc.", location: "Toronto, Canada", bookmarked: false },
    { title: "Marketing Manager", type: "REMOTE", salary: "$80,000 - $100,000", company: "Google Inc.", location: "Singapore", bookmarked: false },
    { title: "Project Manager", type: "REMOTE", salary: "$110,000 - $130,000", company: "Google Inc.", location: "Los Angeles, USA", bookmarked: false },
    { title: "Product Marketing Manager", type: "REMOTE", salary: "$90,000 - $110,000", company: "Google Inc.", location: "San Francisco, USA", bookmarked: false },
    { title: "Salesforce Administrator", type: "REMOTE", salary: "$85,000 - $105,000", company: "Google Inc.", location: "Sydney, Australia", bookmarked: false },
    { title: "Customer Success Manager", type: "REMOTE", salary: "$70,000 - $90,000", company: "Google Inc.", location: "Paris, France", bookmarked: false },
    { title: "Web Designer", type: "REMOTE", salary: "$60,000 - $80,000", company: "Google Inc.", location: "New York, USA", bookmarked: false },
    { title: "SEO Specialist", type: "REMOTE", salary: "$50,000 - $70,000", company: "Google Inc.", location: "London, UK", bookmarked: false },
    { title: "Cybersecurity Analyst", type: "REMOTE", salary: "$90,000 - $110,000", company: "Google Inc.", location: "Berlin, Germany", bookmarked: false }
  ];
    
  


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-[50vh]">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default JobGrid;
