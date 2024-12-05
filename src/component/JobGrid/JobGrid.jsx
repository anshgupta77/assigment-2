import JobCard from "./JobCard/JobCard";

const JobGrid = () => {
  const jobs = [
    { title: "Technical Support Specialist", type: "REMOTE", salary: "$20,000 - $25,000", company: "Google Inc.", location: "Dhaka, Bangladesh", bookmarked: false },
    // Add more job data here...
  ];

  return (
    <div className="job-grid">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default JobGrid;
