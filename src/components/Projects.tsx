import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Presale Website",
      description: "platform that combines blockchain technology, artificial intelligence, and social media specifically designed for influencers and the fashion industry.",
      // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/presale.png",
      tags: ["React", "TypeScript", "Redux", "Solidity", "Ether.js", "hardhat"],
      // liveUrl: "https://kachabazar-store-nine.vercel.app/",
      liveUrl: "https://app.insoblokai.io/",
      githubUrl: "https://github.com/angrybee7/presale"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A dynamic portfolio website that allows developers to create and customize their professional portfolios with ease. Features theme customization, project showcasing, and real-time preview.",
      // image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      image: "/images/portfolio-website.png",
      tags: ["React", "TypeScript", "TailwindCSS"],
      liveUrl: "https://darkmoonportfolio.vercel.app/",
      githubUrl: "https://github.com/angrybee7/dev-portfolio"
    },
    {
      id: 3,
      title: "AI-agent Platform",
      description: "It operates by identifying valuable content and allowing users to tip creators with cryptocurrency. ",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/0xsimulation.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS", "AI-agent"],
      liveUrl: "https://0xsim.ai/",
      githubUrl: "https://github.com/angrybee7/0xsim-terminal-website"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "A productivity tool for managing tasks, projects, and team collaboration with drag-and-drop functionality.",
      // image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      image: "/images/task-management.png",
      tags: ["React", "Javascript", "Redux"],
      liveUrl: "https:/dk-task-management.com",
      githubUrl: "https://github.com/angrybee7/Task-Management-System"
    },
    {
      id: 5,
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.",
      // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/ecommerce-haru-fashion.png",
      tags: ["React", "TypeScript", "Redux"],
      // liveUrl: "https://kachabazar-store-nine.vercel.app/",
      liveUrl: "https://haru-fashion.vercel.app/",
      githubUrl: "https://github.com/angrybee7/haru-trending-site"
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A modern blog platform with markdown support, categories, search functionality, and a clean reading experience.",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/blog-platform.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
      liveUrl: "https://ten-blog.vercel.app/",
      githubUrl: "https://github.com/angrybee7/nextjs-blog"
    },
    {
      id: 7,
      title: "TradingView Chart",
      description: "Implemented the tradingview chart using websocket and tradingview.",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/tradingview-ohlcv.png",
      tags: [ "TradingView", "Next.js", "TypeScript", "MongoDB", "TailwindCSS",  "Websocket.io"],
      liveUrl: "/",
      githubUrl: "https://github.com/angrybee7/tradingview_chart_homa"
    },
    {
      id: 8,
      title: "crypto trading bot - Falcon",
      description: "Telegram trading bot that enables users to execute trades instantly within the app. Users can fund their wallet with ETH or SOL and start trading immediately. ",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/falcon.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS", "Node.js/Express"],
      liveUrl: "https://falcon.bot/",
      githubUrl: "https://github.com/angrybee7/falcon"
    },
    {
      id: 9,
      title: "Social Smart Wallet & Dynamic NFT Protocol - Bonuz",
      description: "It functions as a social smart wallet and dynamic NFT protocol, positioning itself as a Web2.5 revolution that bridges traditional web experiences with blockchain technology ",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/bonuz.png",
      tags: ["Next.js", "React-Native", "MongoDB", "TailwindCSS", "Solidity", "Web3.js", "hardhat"],
      liveUrl: "https://bonuz.market/",
      githubUrl: "https://github.com/angrybee7/bonuz"
    },
    {
      id: 10,
      title: "Token launchpad",
      description: "platform focused on cryptocurrency token creation and management. ",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/safetokenx.png",
      tags: ["Next.js", "MongoDB", "TailwindCSS", "Solidity", "Web3.js", "Rust", "ancho-framework", "hardhat"],
      liveUrl: "https://safetokenx.vercel.app/",
      githubUrl: "https://github.com/angrybee7/launchpad-safetokenx"
    },
    {
      id: 11,
      title: "Solana Swap Platform",
      description: "The platform combines features of both centralized exchanges (CEX) and decentralized exchanges (DEX) to create what they call a hybrid trading experience",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/biokript.png",
      tags: ["React", "TailwindCSS", "MongoDB", "Node.js", "rust", "ancho-framework", "Web3.js", "hardhat"],
      liveUrl: "https://swap.biokript.com/",
      githubUrl: "https://github.com/angrybee7/swap-biokript"
    },
    {
      id: 12,
      title: "NFT Marketplace",
      description: "The platform combines features of both centralized exchanges (CEX) and decentralized exchanges (DEX) to create what they call a hybrid trading experience",
      // image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      image: "/images/ghost.png",
      tags: ["React", "TailwindCSS", "Node.js/Express.js", "MongoDB", "solidity", "Web3.js", "hardhat"],
      liveUrl: "https://ghostmarket.io/",
      githubUrl: "https://github.com/angrybee7/NFT_marketplace_etherem"
    },

  ];

  const filters = ['all', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'MongoDB', 'Redux', 'Next.js', 'TailwindCSS', 'Socket.io'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Recently Projects</h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work. These projects showcase my skills and experience.
          </p>
        </div>
        
        {/* Filter Buttons */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div> */}
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex space-x-3">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-indigo-300 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:text-indigo-300 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
