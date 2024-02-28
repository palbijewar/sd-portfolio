'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const coreCompetencies = [
  {
    name: 'Generative AI',
    title: 'Generative AI',
    quote: 'Developed innovative generative AI models to generate synthetic data and enhance predictive capabilities.',
  },
  {
    name: 'Computer Vision',
    title: 'Computer Vision',
    quote: 'Implemented computer vision algorithms to analyze and extract meaningful information from visual data.',
  },
  {
    name: 'Deep Learning',
    title: 'Deep Learning',
    quote: 'Utilized deep learning architectures and frameworks to build and train complex neural networks for various applications.',
  },
  {
    name: 'Natural Language Processing (NLP)',
    title: 'Natural Language Processing (NLP)',
    quote: 'Applied NLP techniques to process and analyze natural language data for sentiment analysis, text generation, and more.',
  },
  {
    name: 'Long-Term Evolution (LTE)',
    title: 'Long-Term Evolution (LTE)',
    quote: 'Designed and implemented LTE algorithms and protocols for wireless communication systems.',
  },
  {
    name: 'Model Optimization',
    title: 'Model Optimization',
    quote: 'Optimized machine learning and deep learning models for improved performance and efficiency.',
  },
  {
    name: 'Performance-Driven Strategies',
    title: 'Performance-Driven Strategies',
    quote: 'Developed performance-driven strategies to enhance the efficiency and effectiveness of machine learning models.',
  },
  {
    name: 'Machine Learning Techniques',
    title: 'Machine Learning Techniques',
    quote: 'Applied various machine learning techniques such as classification, regression, clustering, and reinforcement learning.',
  },
  {
    name: 'Model Evaluation and Metrics',
    title: 'Model Evaluation and Metrics',
    quote: 'Performed model evaluation using appropriate metrics to assess the performance and accuracy of machine learning models.',
  },
  {
    name: 'Data Analysis & Visualization',
    title: 'Data Analysis & Visualization',
    quote: 'Conducted in-depth data analysis and visualization to derive insights and support decision-making processes.',
  },
  {
    name: 'Reporting & Documentation',
    title: 'Reporting & Documentation',
    quote: 'Prepared comprehensive reports and documentation detailing project methodologies, findings, and recommendations.',
  },
  {
    name: 'Requirement Gathering',
    title: 'Requirement Gathering',
    quote: 'Gathered and documented project requirements through stakeholder interviews and analysis of business needs.',
  },
  {
    name: 'Predictive Modelling',
    title: 'Predictive Modelling',
    quote: 'Built predictive models using historical data and statistical techniques to forecast future trends and outcomes.',
  },
  {
    name: 'Cross-functional Collaboration',
    title: 'Cross-functional Collaboration',
    quote: 'Collaborated with cross-functional teams including data scientists, engineers, and domain experts to deliver successful projects.',
  },
];

  

function CoreCompetencies() {
    return (
      <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">My core competencies</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={coreCompetencies}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    );
  }
  
export default CoreCompetencies;
  
