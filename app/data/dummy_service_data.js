export const unsplashBaseUrl = "https://source.unsplash.com/featured/";

const getUnsplashUrl = (category, serviceName) => {
  const query = `${category},${serviceName}`.replace(/\s+/g, "-").toLowerCase();
  return `${unsplashBaseUrl}?${query}`;
};

// Mapping object for categories
const categories = {
  "Web Development": "IT Services",
  "Graphic Design": "Design Services",
  "SEO Optimization": "Digital Marketing",
  "Digital Marketing": "Marketing Services",
  "Content Writing": "Writing Services",
  "App Development": "IT Services",
  "Social Media Management": "Marketing Services",
  "IT Support": "IT Services",
  "Data Analysis": "Business Services",
  "Cloud Computing": "IT Services",
  Cybersecurity: "IT Services",
  "Network Administration": "IT Services",
  "UI/UX Design": "Design Services",
  "Database Management": "IT Services",
  "Technical Writing": "Writing Services",
  "Project Management": "Business Services",
  "Business Consulting": "Business Services",
  "Customer Support": "Support Services",
  "E-commerce Solutions": "IT Services",
  "Quality Assurance": "Business Services",
};

export const serviceList = [
  {
    service_name: "Web Development",
    id: "ID_001",
    rating_point: 4.5,
    img_src: getUnsplashUrl("IT Services", "Web Development"),
    category: categories["Web Development"],
    discount: 10,
    description:
      "Professional web development services to create responsive and user-friendly websites.",
    price: 1200,
  },
  {
    service_name: "Graphic Design",
    id: "ID_002",
    rating_point: 3.8,
    img_src: getUnsplashUrl("Design Services", "Graphic Design"),
    category: categories["Graphic Design"],
    discount: 15,
    description:
      "Creative graphic design solutions to enhance your brand's visual identity.",
    price: 800,
  },
  {
    service_name: "SEO Optimization",
    id: "ID_003",
    rating_point: 4.2,
    img_src: getUnsplashUrl("Digital Marketing", "SEO Optimization"),
    category: categories["SEO Optimization"],
    discount: 5,
    description:
      "Effective SEO optimization to improve your website's search engine rankings.",
    price: 600,
  },
  {
    service_name: "Digital Marketing",
    id: "ID_004",
    rating_point: 4.9,
    img_src: getUnsplashUrl("Marketing Services", "Digital Marketing"),
    category: categories["Digital Marketing"],
    discount: 20,
    description:
      "Comprehensive digital marketing services to boost your online presence and engagement.",
    price: 1000,
  },
  // {
  //   service_name: "Content Writing",
  //   id: "ID_005",
  //   rating_point: 3.7,
  //   img_src: getUnsplashUrl("Writing Services", "Content Writing"),
  //   category: categories["Content Writing"],
  //   discount: 10,
  //   description:
  //     "High-quality content writing services for blogs, articles, and websites.",
  //   price: 400,
  // },
  // {
  //   service_name: "App Development",
  //   id: "ID_006",
  //   rating_point: 4.1,
  //   img_src: getUnsplashUrl("IT Services", "App Development"),
  //   category: categories["App Development"],
  //   discount: 12,
  //   description:
  //     "Custom app development services for mobile and web applications.",
  //   price: 1500,
  // },
  // {
  //   service_name: "Social Media Management",
  //   id: "ID_007",
  //   rating_point: 4.3,
  //   img_src: getUnsplashUrl("Marketing Services", "Social Media Management"),
  //   category: categories["Social Media Management"],
  //   discount: 8,
  //   description:
  //     "Effective social media management to enhance your brand's online presence.",
  //   price: 700,
  // },
  // {
  //   service_name: "IT Support",
  //   id: "ID_008",
  //   rating_point: 4.0,
  //   img_src: getUnsplashUrl("IT Services", "IT Support"),
  //   category: categories["IT Support"],
  //   discount: 15,
  //   description:
  //     "Reliable IT support services to ensure smooth and efficient technology operations.",
  //   price: 500,
  // },
  // {
  //   service_name: "Data Analysis",
  //   id: "ID_009",
  //   rating_point: 3.9,
  //   img_src: getUnsplashUrl("Business Services", "Data Analysis"),
  //   category: categories["Data Analysis"],
  //   discount: 5,
  //   description:
  //     "Comprehensive data analysis services to help you make informed business decisions.",
  //   price: 900,
  // },
  // {
  //   service_name: "Cloud Computing",
  //   id: "ID_010",
  //   rating_point: 4.8,
  //   img_src: getUnsplashUrl("IT Services", "Cloud Computing"),
  //   category: categories["Cloud Computing"],
  //   discount: 20,
  //   description:
  //     "Scalable cloud computing solutions to enhance your business's efficiency and flexibility.",
  //   price: 2000,
  // },
  // {
  //   service_name: "Cybersecurity",
  //   id: "ID_011",
  //   rating_point: 4.7,
  //   img_src: getUnsplashUrl("IT Services", "Cybersecurity"),
  //   category: categories["Cybersecurity"],
  //   discount: 18,
  //   description:
  //     "Comprehensive cybersecurity services to protect your business from digital threats.",
  //   price: 1100,
  // },
  // {
  //   service_name: "Network Administration",
  //   id: "ID_012",
  //   rating_point: 4.4,
  //   img_src: getUnsplashUrl("IT Services", "Network Administration"),
  //   category: categories["Network Administration"],
  //   discount: 7,
  //   description:
  //     "Expert network administration services to maintain and secure your network infrastructure.",
  //   price: 750,
  // },
  // {
  //   service_name: "UI/UX Design",
  //   id: "ID_013",
  //   rating_point: 3.6,
  //   img_src: getUnsplashUrl("Design Services", "UI/UX Design"),
  //   category: categories["UI/UX Design"],
  //   discount: 6,
  //   description:
  //     "Innovative UI/UX design services to create intuitive and engaging user experiences.",
  //   price: 950,
  // },
  // {
  //   service_name: "Database Management",
  //   id: "ID_014",
  //   rating_point: 4.6,
  //   img_src: getUnsplashUrl("IT Services", "Database Management"),
  //   category: categories["Database Management"],
  //   discount: 10,
  //   description:
  //     "Efficient database management services to ensure your data is organized and accessible.",
  //   price: 1000,
  // },
  // {
  //   service_name: "Technical Writing",
  //   id: "ID_015",
  //   rating_point: 3.5,
  //   img_src: getUnsplashUrl("Writing Services", "Technical Writing"),
  //   category: categories["Technical Writing"],
  //   discount: 5,
  //   description:
  //     "Professional technical writing services to create clear and concise documentation.",
  //   price: 300,
  // },
  // {
  //   service_name: "Project Management",
  //   id: "ID_016",
  //   rating_point: 4.0,
  //   img_src: getUnsplashUrl("Business Services", "Project Management"),
  //   category: categories["Project Management"],
  //   discount: 12,
  //   description:
  //     "Expert project management services to ensure your projects are completed on time and within budget.",
  //   price: 1300,
  // },
  // {
  //   service_name: "Business Consulting",
  //   id: "ID_017",
  //   rating_point: 4.3,
  //   img_src: getUnsplashUrl("Business Services", "Business Consulting"),
  //   category: categories["Business Consulting"],
  //   discount: 8,
  //   description:
  //     "Professional business consulting services to help you achieve your business goals.",
  //   price: 1400,
  // },
  // {
  //   service_name: "Customer Support",
  //   id: "ID_018",
  //   rating_point: 3.8,
  //   img_src: getUnsplashUrl("Support Services", "Customer Support"),
  //   category: categories["Customer Support"],
  //   discount: 15,
  //   description:
  //     "Reliable customer support services to assist your customers and improve satisfaction.",
  //   price: 400,
  // },
  // {
  //   service_name: "E-commerce Solutions",
  //   id: "ID_019",
  //   rating_point: 4.9,
  //   img_src: getUnsplashUrl("IT Services", "E-commerce Solutions"),
  //   category: categories["E-commerce Solutions"],
  //   discount: 20,
  //   description:
  //     "Comprehensive e-commerce solutions to help you set up and manage your online store.",
  //   price: 1600,
  // },
  // {
  //   service_name: "Quality Assurance",
  //   id: "ID_020",
  //   rating_point: 4.2,
  //   img_src: getUnsplashUrl("Business Services", "Quality Assurance"),
  //   category: categories["Quality Assurance"],
  //   discount: 5,
  //   description:
  //     "Thorough quality assurance services to ensure your products meet the highest standards.",
  //   price: 800,
  // },
];
