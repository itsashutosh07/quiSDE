import React from "react";

const recentSubjects = [
  {
    icon: "https://img.icons8.com/ios-filled/d83131/database",
    title: "Database Management Systems",
    last: "35 secs ago",
    score: "92%",
  },
  {
    icon: "https://img.icons8.com/external-flatart-icons-outline-flatarticons/d83131/external-computer-networking-digital-economy-business-flatart-icons-outline-flatarticons",
    title: "Computer Networks",
    last: "16 mins ago",
    score: "85%",
  },
  {
    icon: "https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/d83131/external-programming-website-development-yogi-aprelliyanto-glyph-yogi-aprelliyanto",
    title: "Design & Analysis of Algorithms",
    last: "5 hours ago",
    score: "90%",
  },
  {
    icon: "https://img.icons8.com/ios-filled/d83131/genealogy",
    title: "Data Structures & Algorithms",
    last: "18 hours ago",
    score: "82%",
  },
  {
    icon: "https://img.icons8.com/external-solidglyph-m-oki-orlando/d83131/external-Neural-Network-artificial-intelligence-solidglyph-m-oki-orlando",
    title: "Deep Learning",
    last: "2 days ago",
    score: "96%",
  },
  {
    icon: "https://img.icons8.com/ios-filled/d83131/cloud-computing",
    title: "Cloud Computing",
    last: "5 days ago",
    score: "92%",
  },
  {
    icon: "https://img.icons8.com/ios-filled/d83131/windows-logo",
    title: "Operating Systems",
    last: "2 weeks ago",
    score: "92%",
  },
  {
    icon: "https://img.icons8.com/glyph-neue/d83131/laptop-coding",
    title: "Object Oriented Programming",
    last: "12 weeks ago",
    score: "100%",
  },
];

const RecentSubjects: React.FC = () => (
  <section className="recent-subjects">
    <h2>Recent Subjects:</h2>
    <div className="subject-card-container">
      {recentSubjects.map((subj, idx) => (
        <div className="subject-card" key={idx}>
          <div className="subject-card-content">
            <div className="subject-card-title">
              <div className="subject-card-icon">
                <img src={subj.icon} alt={subj.title} />
              </div>
              <h3>{subj.title}</h3>
            </div>
            <div className="subject-card-text">
              <p>
                <span>Last: {subj.last}</span>
                <span className="separator-dot">•</span>
                <span>Score: {subj.score}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default RecentSubjects;
