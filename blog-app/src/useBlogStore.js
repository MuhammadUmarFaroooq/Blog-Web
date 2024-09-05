import create from "zustand";
import blogs from "./blogData";

const useBlogStore = create((set) => ({
  blogs: [],
  addPost: (post) => set((state) => ({ blogs: [...state.blogs, post] })),
  getBlogs: () => blogs, // Getter method to return the current state of blogs array
}));
// console.log(blogs);

export default useBlogStore;
