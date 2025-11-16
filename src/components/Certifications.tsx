import { useInView } from "react-intersection-observer";
import { Award } from "lucide-react";

const certificationsData = [
  {
    title: "Fullstack-Web Development MERN",
    issuer: "Udemy (By Hitesh sir)",
    year: "2025",
     link: "https://atharvdashpute.github.io/Ai-Enhanced-Carrier-Guidelnce-System/",
  },
  {
    title: "J.P. Morgan - Software Engineering Job Simulation ",
    issuer: "Forage",
    year: "October 2025",
  },
  {
    title: "Java Development Internship",
    issuer: "OCTANET",
    year: "September 2024 ",
  },
  {
    title: "Artificial Intelligence Machine Learning",
    issuer: "YBI FOUNDATION",
    year: "October 2024 ",
  },
  {
    title: "Web Development",
    issuer: "Prodigy Infotech",
    year: " Jully2024",
  },
  {
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Forage",
    year: " May 2024",
    
  },
  
  {
    title: "Basic Python Course",
    issuer: "Udemy",
    year: "2023",
  },
  {
    title: "Carreer Edge - Young Professional",
    issuer: "TCS ION",
    year: "September 2023",
    link:"https://drive.google.com/drive/folders/1DAEoxCY5vlPrql0AfngXSxCfzVAE0ZVj",
  },
];

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div
        ref={ref}
        className={`container max-w-5xl mx-auto transition-all duration-700 ${
          inView ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className ="bg-card rounded-lg p-6 shadow-medium border border-border hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
            >
              <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
                  >
                  View Certificate
            </a>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-accent/20 rounded-full mb-4 border border-accent/30">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                <span className="text-sm text-accent font-medium">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
