import { unsplashBaseUrl } from "./dummy_service_data";

// Function to create Unsplash URL based on service provider name
const getUnsplashUrl = (serviceProviderName) => {
  const query = serviceProviderName.replace(/\s+/g, "-").toLowerCase();
  return `${unsplashBaseUrl}?${query}`;
};

export const serviceProviderList = [
  {
    service_provider_name: "Barber King",
    id: "ID_001",
    rating_point: 4.5,
    description:
      "Welcome to Barber King, where every haircut is fit for royalty. Step into our kingdom of style and sophistication, where skilled barbers craft works of art with every snip and trim. From classic cuts to modern styles, our team of professionals is dedicated to helping you look and feel your best. ",
    img_src: "/images/product-imgs/haircut.jpeg",
    items: [
      {
        type: "service",
        service_name: "Men Hair Cut",
        id: "I_001",
        rating_point: 4.5,
        picpf:
          "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Hair Cut ",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "Men's haircut styles encompass a diverse range, reflecting individual tastes, trends, and cultural influences. From timeless classics to contemporary fades, the options are vast. Traditional styles like the crew cut, characterized by short length all around, offer a neat and low-maintenance look.",
        more_imgs: [
          "https://images.unsplash.com/photo-1605497787865-e6d4762b386f?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
      {
        type: "service",
        service_name: "New Style",
        id: "I_001",
        rating_point: 4.5,
        picpf:
          "https://images.unsplash.com/photo-1593269233759-427ba69acca5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Hair Cut ",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "Men's haircut styles encompass a diverse range, reflecting individual tastes, trends, and cultural influences. From timeless classics to contemporary fades, the options are vast. Traditional styles like the crew cut, characterized by short length all around, offer a neat and low-maintenance look.",
        more_imgs: [
          "https://images.unsplash.com/photo-1593269233759-427ba69acca5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
      {
        type: "service",
        service_name: "Shaving beard",
        id: "I_001",
        rating_point: 4.5,
        picpf:
          "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Hair Cut ",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "Men's haircut styles encompass a diverse range, reflecting individual tastes, trends, and cultural influences. From timeless classics to contemporary fades, the options are vast. Traditional styles like the crew cut, characterized by short length all around, offer a neat and low-maintenance look.",
        more_imgs: [
          "https://images.unsplash.com/photo-1599351431618-317f6a5f9a6b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
      {
        type: "service",
        service_name: "Color Hair",
        id: "I_001",
        rating_point: 4.5,
        picpf:
          "https://images.unsplash.com/photo-1584906755281-5573edb70df0?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Hair Cut ",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "Men's haircut styles encompass a diverse range, reflecting individual tastes, trends, and cultural influences. From timeless classics to contemporary fades, the options are vast. Traditional styles like the crew cut, characterized by short length all around, offer a neat and low-maintenance look.",
        more_imgs: [
          "https://images.unsplash.com/photo-1584906755281-5573edb70df0?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
    ],
  },
  {
    service_provider_name: "Elegance Salon",
    id: "ID_002",
    rating_point: 3.8,
    description:
      "Welcome to our hair sanctuary, where beauty meets creativity at Elegance Salon. Step into a world of luxury and sophistication, where our talented stylists are dedicated to enhancing your natural beauty. ",
    img_src: "/images/product-imgs/salon.jpeg",
    items: [
      {
        type: "service",
        service_name: "Men Hair Cut",
        id: "I_001",
        rating_point: 4.5,
        picpf:
          "https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Cake",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "Men's haircut styles encompass a diverse range, reflecting individual tastes, trends, and cultural influences. From timeless classics to contemporary fades, the options are vast. Traditional styles like the crew cut, characterized by short length all around, offer a neat and low-maintenance look.",
        more_imgs: [
          "https://images.unsplash.com/photo-1605497787865-e6d4762b386f?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
    ],
  },
  {
    service_provider_name: "Tennis Arena",
    id: "ID_003",
    rating_point: 4.2,
    description:
      "Welcome to the heart of the game, where passion and precision collide at Tennis Arena. Step onto our courts and experience the thrill of competition in a vibrant and energetic atmosphere. ",
    img_src: "/images/product-imgs/tennis.jpeg",
  },
  {
    service_provider_name: "Pool Paradise",
    id: "ID_004",
    rating_point: 4.9,
    description:
      "Welcome to Pool Paradise, where relaxation and rejuvenation await in every shimmering ripple. Dive into a world of tranquility and serenity, where crystal-clear waters beckon you to escape the hustle and bustle of everyday life. ",
    img_src: "/images/product-imgs/swimming.jpeg",
  },
  // {
  //   service_provider_name: "Bright Electricians",
  //   id: "ID_005",
  //   rating_point: 3.7,
  //   description:
  //     "Bright Electricians delivers expert electrical services for residential and commercial properties. Our certified electricians handle installations, repairs, and maintenance with precision. We prioritize safety and efficiency, ensuring your electrical systems run smoothly.",
  //   img_src: getUnsplashUrl("Bright Electricians"),
  // },
  // {
  //   service_provider_name: "Tech Support Hub",
  //   id: "ID_006",
  //   rating_point: 4.1,
  //   description:
  //     "Tech Support Hub provides comprehensive tech support services for individuals and businesses. Our experts troubleshoot, repair, and optimize your devices and networks. We offer remote and on-site support, ensuring your technology functions seamlessly.",
  //   img_src: getUnsplashUrl("Tech Support Hub"),
  // },
  // {
  //   service_provider_name: "Garden Gurus",
  //   id: "ID_007",
  //   rating_point: 4.3,
  //   description:
  //     "Garden Gurus specializes in landscaping and garden maintenance services. Our team designs and maintains beautiful, sustainable gardens tailored to your preferences. We offer planting, pruning, and lawn care services. Let us transform your outdoor space.",
  //   img_src: getUnsplashUrl("Garden Gurus"),
  // },
  // {
  //   service_provider_name: "Home Plumbers",
  //   id: "ID_008",
  //   rating_point: 4.0,
  //   description:
  //     "Home Plumbers provides reliable plumbing services for residential and commercial properties. Our licensed plumbers handle leaks, clogs, installations, and repairs. We ensure your plumbing systems are efficient and problem-free. Count on us for quality service.",
  //   img_src: getUnsplashUrl("Home Plumbers"),
  // },
  // {
  //   service_provider_name: "Pet Sitters Co.",
  //   id: "ID_009",
  //   rating_point: 3.9,
  //   description:
  //     "Pet Sitters Co. offers trusted pet sitting and walking services. Our experienced caregivers provide loving attention to your pets, ensuring their comfort and safety. Whether you're at work or on vacation, we keep your pets happy and healthy.",
  //   img_src: getUnsplashUrl("Pet Sitters Co."),
  // },
  // {
  //   service_provider_name: "Tutor Experts",
  //   id: "ID_010",
  //   rating_point: 4.8,
  //   description:
  //     "Tutor Experts offers personalized tutoring services for students of all ages. Our qualified tutors provide one-on-one and group sessions in various subjects. We focus on enhancing understanding and improving grades. Achieve academic success with Tutor Experts.",
  //   img_src: getUnsplashUrl("Tutor Experts"),
  // },
  // {
  //   service_provider_name: "Fitness Trainers Inc.",
  //   id: "ID_011",
  //   rating_point: 4.6,
  //   description:
  //     "Fitness Trainers Inc. offers personalized fitness training sessions tailored to your goals. Our certified trainers guide you through effective workouts and provide nutritional advice. Achieve your fitness targets with our expert support.",
  //   img_src: getUnsplashUrl("Fitness Trainers Inc."),
  // },
  // {
  //   service_provider_name: "HealthCare Providers",
  //   id: "ID_012",
  //   rating_point: 4.2,
  //   description:
  //     "HealthCare Providers offers top-quality medical and healthcare services. Our team of professionals is dedicated to your well-being, providing comprehensive care and treatment plans. Trust us for all your health needs.",
  //   img_src: getUnsplashUrl("HealthCare Providers"),
  // },
  // {
  //   service_provider_name: "Event Planners Co.",
  //   id: "ID_013",
  //   rating_point: 4.7,
  //   description:
  //     "Event Planners Co. specializes in organizing unforgettable events. From weddings to corporate functions, we handle all the details to ensure a smooth and memorable occasion. Let us bring your vision to life.",
  //   img_src: getUnsplashUrl("Event Planners Co."),
  // },
  // {
  //   service_provider_name: "Auto Repair Experts",
  //   id: "ID_014",
  //   rating_point: 4.3,
  //   description:
  //     "Auto Repair Experts provides reliable automotive repair and maintenance services. Our skilled mechanics handle everything from oil changes to engine repairs. Trust us to keep your vehicle running smoothly.",
  //   img_src: getUnsplashUrl("Auto Repair Experts"),
  // },
  // {
  //   service_provider_name: "Home Decor Solutions",
  //   id: "ID_015",
  //   rating_point: 4.4,
  //   description:
  //     "Home Decor Solutions offers interior design and decoration services. Our experts create beautiful, functional spaces tailored to your style and needs. Enhance your home's appeal with our professional touch.",
  //   img_src: getUnsplashUrl("Home Decor Solutions"),
  // },
  // {
  //   service_provider_name: "Wellness Spa",
  //   id: "ID_016",
  //   rating_point: 4.5,
  //   description:
  //     "Wellness Spa provides a range of relaxing and rejuvenating spa services. From massages to facials, our experienced therapists help you unwind and revitalize. Experience tranquility and wellness at our spa.",
  //   img_src: getUnsplashUrl("Wellness Spa"),
  // },
  // {
  //   service_provider_name: "Photography Pros",
  //   id: "ID_017",
  //   rating_point: 4.8,
  //   description:
  //     "Photography Pros offers professional photography services for all occasions. Our skilled photographers capture stunning images that preserve your special moments. Trust us for high-quality photos that you'll cherish forever.",
  //   img_src: getUnsplashUrl("Photography Pros"),
  // },
  // {
  //   service_provider_name: "Legal Advisors Group",
  //   id: "ID_018",
  //   rating_point: 4.1,
  //   description:
  //     "Legal Advisors Group provides expert legal services and advice. Our experienced attorneys handle various legal matters, ensuring your interests are protected. Rely on us for professional and effective legal solutions.",
  //   img_src: getUnsplashUrl("Legal Advisors Group"),
  // },
  // {
  //   service_provider_name: "Travel Guides Co.",
  //   id: "ID_019",
  //   rating_point: 4.7,
  //   description:
  //     "Travel Guides Co. offers personalized travel planning and guiding services. Our knowledgeable guides help you explore new destinations and experiences. Enjoy a seamless and memorable travel experience with our expert assistance.",
  //   img_src: getUnsplashUrl("Travel Guides Co."),
  // },
  // {
  //   service_provider_name: "Child Care Center",
  //   id: "ID_020",
  //   rating_point: 4.3,
  //   description:
  //     "Child Care Center provides safe and nurturing child care services. Our qualified caregivers ensure your children are well-cared for and engaged in enriching activities. Trust us for quality child care you can depend on.",
  //   img_src: getUnsplashUrl("Child Care Center"),
  // },
];
