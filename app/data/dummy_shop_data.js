import { unsplashBaseUrl } from "./dummy_service_data";

export const getUnsplashUrl = (shopName) => {
  const query = shopName.replace(/\s+/g, "-").toLowerCase();
  return `${unsplashBaseUrl}?${query}`;
};

export const shopList = [
  {
    cover: "/images/product-imgs/cake-shop.jpeg",
    shop_name: "Phnom Penh Cake",
    id: "ID_001",
    pf: "/images/product-imgs/pfbacker.jpeg",
    rating_point: 4.5,
    img_src: "/images/product-imgs/cake-shop.jpeg",
    description:
      "Phnom Penh Cake is the best cake shop and bakery.With great service and delicius cake",
    items: [
      {
        type: "service",
        product_name: "Birthday Cake",
        id: "ID_001",
        rating_point: 4.5,
        img_src:
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
        category: "Cake",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "This amazing gadget offers cutting-edge technology with a sleek design. Perfect for tech enthusiasts looking for the latest innovation.",
        more_imgs: [
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
      {
        type: "service",
        product_name: "Party Cake",
        id: "ID_001",
        rating_point: 4.5,
        img_src:
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Cake",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "This amazing gadget offers cutting-edge technology with a sleek design. Perfect for tech enthusiasts looking for the latest innovation.",
        more_imgs: [
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
      {
        type: "service",
        product_name: "Event Cake",
        id: "ID_001",
        rating_point: 4.5,
        img_src:
          "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Cake",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "This amazing gadget offers cutting-edge technology with a sleek design. Perfect for tech enthusiasts looking for the latest innovation.",
        more_imgs: [
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
      {
        type: "service",
        product_name: "Wedding Cake",
        id: "ID_001",
        rating_point: 4.5,
        img_src: "/images/cake_6.avif",
        category: "Cake",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "This amazing gadget offers cutting-edge technology with a sleek design. Perfect for tech enthusiasts looking for the latest innovation.",
        more_imgs: [
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
    ],
  },
  {
    cover: "/images/product-imgs/cvbaker.jpeg",
    shop_name: "Master Bakery",
    id: "ID_002",
    rating_point: 3.8,
    pf: "/images/product-imgs/pfbaker2.jpeg",

    img_src: "/images/cake_5.avif",
    description:
      "Our shop will provide you the best cake and best service in phnom penh",
    items: [
      {
        type: "service",
        product_name: "Birthday Cake",
        id: "ID_001",
        rating_point: 4.5,
        img_src: "/images/cake_6.avif",
        category: "Cake",
        stock: 120,
        discount: 10,
        price: 99.99,
        description:
          "This amazing gadget offers cutting-edge technology with a sleek design. Perfect for tech enthusiasts looking for the latest innovation.",
        more_imgs: [
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
      },
    ],
  },
  {
    cover: "/images/product-imgs/cvice.jpeg",
    shop_name: "IceCream World",
    id: "ID_003",
    pf: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating_point: 4.2,
    img_src: "/images/product-imgs/icecream.jpeg",
    description:
      "Our shop privide customer with lot of icecreams with many taste and many kind",
  },
  {
    cover: "/images/product-imgs/cvcoffee.jpeg",
    shop_name: "Happy Coffe and Tea",
    id: "ID_004",
    pf: "/images/product-imgs/pfcoffee.jpeg",
    rating_point: 4.9,
    img_src: "/images/product-imgs/coffee.jpeg",
    description:
      "Welcome to Happ Coffee and Tea, where happiness is brewed in every cup. Step into our welcoming space, where the aroma of freshly ground coffee beans and the soothing scent of fine teas blend harmoniously.",
  },
  // {
  //   shop_name: "Gourmet Delights",
  //   id: "ID_005",
  //   rating_point: 3.7,
  //   img_src: getUnsplashUrl("Gourmet Delights"),
  //   description:
  //     "Gourmet Delights offers a variety of premium food products, including artisanal cheeses, fine wines, and gourmet chocolates. Perfect for food lovers and special occasions.",
  // },
  // {
  //   shop_name: "Fitness First",
  //   id: "ID_006",
  //   rating_point: 4.1,
  //   img_src: getUnsplashUrl("Fitness First"),
  //   description:
  //     "Fitness First provides a range of fitness equipment and apparel to help you achieve your health goals. From yoga mats to dumbbells, we have everything you need for your workout.",
  // },
  // {
  //   shop_name: "Home Essentials",
  //   id: "ID_007",
  //   rating_point: 4.3,
  //   img_src: getUnsplashUrl("Home Essentials"),
  //   description:
  //     "Home Essentials offers a variety of household goods and décor items. Find everything you need to make your house a home, from kitchenware to bedding.",
  // },
  // {
  //   shop_name: "Pet Paradise",
  //   id: "ID_008",
  //   rating_point: 4.0,
  //   img_src: getUnsplashUrl("Pet Paradise"),
  //   description:
  //     "Pet Paradise provides a wide range of products for your furry friends. From pet food to toys and accessories, we have everything to keep your pets happy and healthy.",
  // },
  // {
  //   shop_name: "Toy Town",
  //   id: "ID_009",
  //   rating_point: 3.9,
  //   img_src: getUnsplashUrl("Toy Town"),
  //   description:
  //     "Toy Town offers a fun selection of toys and games for children of all ages. Discover the latest trends and classic favorites in our extensive collection.",
  // },
  // {
  //   shop_name: "Artistry Hub",
  //   id: "ID_010",
  //   rating_point: 4.8,
  //   img_src: getUnsplashUrl("Artistry Hub"),
  //   description:
  //     "Artistry Hub is a creative haven for artists and crafters. We offer a wide range of art supplies and craft materials to inspire your next masterpiece.",
  // },
  // {
  //   shop_name: "Gadget Galaxy",
  //   id: "ID_011",
  //   rating_point: 4.4,
  //   img_src: getUnsplashUrl("Gadget Galaxy"),
  //   description:
  //     "Gadget Galaxy provides the latest and greatest in electronic gadgets. From smart home devices to the newest smartphones, we have the tech you need.",
  // },
  // {
  //   shop_name: "Beauty Bliss",
  //   id: "ID_012",
  //   rating_point: 4.7,
  //   img_src: getUnsplashUrl("Beauty Bliss"),
  //   description:
  //     "Beauty Bliss offers a wide range of beauty and skincare products. Discover our selection of high-quality cosmetics and pamper yourself with our luxury items.",
  // },
  // {
  //   shop_name: "Sports Central",
  //   id: "ID_013",
  //   rating_point: 4.0,
  //   img_src: getUnsplashUrl("Sports Central"),
  //   description:
  //     "Sports Central is your destination for sports equipment and apparel. Whether you're a professional athlete or a weekend warrior, we have what you need to perform at your best.",
  // },
  // {
  //   shop_name: "Office Outfitters",
  //   id: "ID_014",
  //   rating_point: 4.5,
  //   img_src: getUnsplashUrl("Office Outfitters"),
  //   description:
  //     "Office Outfitters provides everything you need to set up or upgrade your office. From furniture to supplies, we help create productive and comfortable workspaces.",
  // },
  // {
  //   shop_name: "Outdoor Adventure",
  //   id: "ID_015",
  //   rating_point: 4.6,
  //   img_src: getUnsplashUrl("Outdoor Adventure"),
  //   description:
  //     "Outdoor Adventure offers gear and apparel for all your outdoor activities. Whether you're camping, hiking, or climbing, we have the equipment to keep you safe and prepared.",
  // },
  // {
  //   shop_name: "Bargain Mart",
  //   id: "ID_016",
  //   rating_point: 3.8,
  //   img_src: getUnsplashUrl("Bargain Mart"),
  //   description:
  //     "Bargain Mart is your go-to store for everyday low prices on a wide variety of products. From groceries to home goods, we offer unbeatable deals and savings.",
  // },
  // {
  //   shop_name: "Lux Jewelry",
  //   id: "ID_017",
  //   rating_point: 4.9,
  //   img_src: getUnsplashUrl("Lux Jewelry"),
  //   description:
  //     "Lux Jewelry offers a stunning collection of fine jewelry. From engagement rings to statement pieces, our selection of luxury jewelry is perfect for any occasion.",
  // },
  // {
  //   shop_name: "Healthy Harvest",
  //   id: "ID_018",
  //   rating_point: 4.3,
  //   img_src: getUnsplashUrl("Healthy Harvest"),
  //   description:
  //     "Healthy Harvest provides a variety of organic and health foods. We offer everything you need to maintain a healthy diet, including fresh produce, supplements, and snacks.",
  // },
  // {
  //   shop_name: "Kids' Corner",
  //   id: "ID_019",
  //   rating_point: 4.1,
  //   img_src: getUnsplashUrl("Kids' Corner"),
  //   description:
  //     "Kids' Corner is a specialty shop featuring clothes, toys, and accessories for children. From newborn to pre-teen, we have a wide selection of high-quality and fun products.",
  // },
  // {
  //   shop_name: "Vintage Finds",
  //   id: "ID_020",
  //   rating_point: 4.5,
  //   img_src: getUnsplashUrl("Vintage Finds"),
  //   description:
  //     "Vintage Finds offers a curated collection of vintage and antique items. Discover unique furniture, décor, and collectibles that add character and charm to your home.",
  // },
];
