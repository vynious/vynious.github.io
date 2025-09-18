// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "the kitchen where i attempt to cook",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "please hire me :,)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-maximizing-client-throughput-async-vs-threads-adaptive-rate-limiting-and-queue-resilience",
        
          title: "Maximizing Client Throughput — Async vs Threads, Adaptive Rate Limiting, and Queue Resilience...",
        
        description: "Review and optimization of a high-throughput Python client under server rate limits — benchmarking, adaptive buffering, DLQ, and async vs threading trade-offs.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/optimise-throughput/";
          
        },
      },{id: "projects-cafe-management-system",
          title: 'cafe management system',
          description: "full stack app for cafe resource management",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cafe_management/";
            },},{id: "projects-crypto-tracker",
          title: 'crypto tracker',
          description: "crypto portfolio tracker",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crypto_tracker/";
            },},{id: "projects-go-travel",
          title: 'go travel',
          description: "travel diary app",
          section: "Projects",handler: () => {
              window.location.href = "/projects/go_travel/";
            },},{id: "projects-gym-daddy",
          title: 'gym daddy',
          description: "virtual queuing + class booking for busy gyms",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gym_daddy/";
            },},{id: "projects-loyalty-point-system",
          title: 'loyalty point system',
          description: "serverless multi-tenancy system for loyalty points tracking",
          section: "Projects",handler: () => {
              window.location.href = "/projects/loyalty_point_system/";
            },},{id: "projects-match-maker",
          title: 'match maker',
          description: "tournament management system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/match_maker/";
            },},{id: "projects-spare-net",
          title: 'spare net',
          description: "p2p networking sharing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spare_net/";
            },},{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
