export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  { id: "skydiving", name: "Skydiving / Para Jump", description: "Freefall from altitude with expert tandem masters.", image: "/images/skydiving.jpg" },
  { id: "wingsuit", name: "Wingsuit Flying", description: "Glide through the air with futuristic flight suits.", image: "/lars-mott-SKpTWM5xWUY-unsplash.jpg" },
  { id: "paragliding", name: "Paragliding", description: "Soar peacefully on thermals with breathtaking views.", image: "/juliette-g-bmBLu_oAEj8-unsplash.jpg" },
  { id: "hanggliding", name: "Hang Gliding", description: "Harness wind power for an elegant flight.", image: "/jeffrey-eisen-Gu6ed8ODN7k-unsplash.jpg" },
  { id: "balloon", name: "Hot Air Balloon Adventure", description: "Serene sunrise flights with panoramic landscapes.", image: "/images/balloon.jpg" },
  { id: "bungee", name: "Bungee Jumping", description: "Leap from platforms with elastic thrill.", image: "/laurynas-me-Z2h10lcXXfU-unsplash.jpg" },
  { id: "heliski", name: "Heli-Skiing", description: "Remote powder runs accessed by helicopter.", image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=800&auto=format&fit=crop" },
  { id: "zipline", name: "Zip Lining", description: "High-speed canopy rides across stunning terrains.", image: "/andy-vult-zANlRVOmnv8-unsplash.jpg" },
  { id: "paramotor", name: "Paramotoring", description: "Powered paragliding for extended aerial tours.", image: "/paramotor-5334991.jpg" },
  { id: "basejump", name: "Base Jumping", description: "Pure gravity from cliffs and structures.", image: "/istockphoto-594464198-2048x2048.jpg" },
];

export const featured = [
  {
    id: "para-jump",
    title: "Para Jump Experience",
    description: "Tandem freefall with cinematic filming options.",
    price: 199,
    image: "/images/skydiving.jpg",
  },
  {
    id: "hot-air-balloon",
    title: "Hot Air Balloon Adventure",
    description: "Sunrise flight with champagne landing.",
    price: 149,
    image: "/images/balloon.jpg",
  },
];
