import useBlogStore from "./useBlogStore";
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
  // Add more blog objects as needed
];
const getBlogs = useBlogStore.getState.getBlogs;
console.log(getBlogs);

export default blogs;
