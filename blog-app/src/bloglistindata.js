// blogData.js
const blogs = [
  {
    id: 1,
    title: "The Art of Productivity: Mastering Time Management Techniques",
    image:
      "https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg?auto=compress&cs=tinysrgb&w=600", // Sample image URL
    writer: "John Doe",
    time: "1 hour ago",
  },
  {
    id: 2,
    title: "Exploring the Wonders of Deep Learning: A Beginner's Guide",
    image:
      "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=600", // Sample image URL
    writer: "Jane Smith",
    time: "2 hours ago",
  },
  {
    id: 3,
    title: "Unlocking Creativity: Strategies for Overcoming Writer's Block",
    image:
      "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=600", // Sample image URL
    writer: "James Brown",
    time: "3 hours ago",
  },
  {
    id: 4,
    title: "The Art of Productivity: Mastering Time Management Techniques",
    image:
      "https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg?auto=compress&cs=tinysrgb&w=600", // Sample image URL
    writer: "John Doe",
    time: "1 hour ago",
  },
  {
    id: 5,
    title: "Exploring the Wonders of Deep Learning: A Beginner's Guide",
    image:
      "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=600", // Sample image URL
    writer: "Jane Smith",
    time: "2 hours ago",
  },
  {
    id: 6,
    title: "Unlocking Creativity: Strategies for Overcoming Writer's Block",
    image:
      "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=600", // Sample image URL
    writer: "James Brown",
    time: "3 hours ago",
  },
  {
    id: 7,
    title: "Healthy Eating Habits: Nourishing Your Body for Optimal Well-being",
    image:
      "https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "John Doe",
    time: "1 hour ago",
  },
  {
    id: 8,
    title: "The Future of Renewable Energy: Harnessing Sustainable Solutions",
    image:
      "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "Jane Smith",
    time: "2 hours ago",
  },
  {
    id: 9,
    title: "Mindfulness in Daily Life: Finding Peace Amidst Chaos",
    image:
      "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "James Brown",
    time: "3 hours ago",
  },
  {
    id: 10,
    title: "Effective Time Management Strategies: Maximizing Productivity",
    image:
      "https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "John Doe",
    time: "1 hour ago",
  },
  {
    id: 11,
    title: "The Impact of Climate Change: Addressing Environmental Challenges",
    image:
      "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "Jane Smith",
    time: "2 hours ago",
  },
  {
    id: 12,
    title: "Stress Management Techniques: Coping with Life's Pressures",
    image:
      "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "James Brown",
    time: "3 hours ago",
  },
  {
    id: 13,
    title: "Healthy Sleeping Habits: Improving Sleep Quality for Better Health",
    image:
      "https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "John Doe",
    time: "1 hour ago",
  },
  {
    id: 14,
    title:
      "Advancements in Space Exploration: Unlocking the Mysteries of the Universe",
    image:
      "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-how-machine-learning-is-inspired-by-neuroscience-and-the-human-brain-it-was-created-by-novoto-studio-as-par.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "Jane Smith",
    time: "2 hours ago",
  },
  {
    id: 15,
    title:
      "Emotional Intelligence: Enhancing Relationships and Personal Growth",
    image:
      "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "James Brown",
    time: "3 hours ago",
  },
  {
    id: 16,
    title: "Talha Tanveer Blog",
    image:
      "https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "Talha Tanveer",
    time: "Few Minutes ago",
  },
  {
    id: 16,
    title: "Talha Tanveer Blog",
    image:
      "https://images.pexels.com/photos/295826/pexels-photo-295826.jpeg?auto=compress&cs=tinysrgb&w=600",
    writer: "Talha Tanveer",
    time: "Few Minutes ago",
  },
];

export default blogs;
