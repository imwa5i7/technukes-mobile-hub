import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Mobile App Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the mobile app development landscape.",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "How AI is Transforming Business Operations",
    excerpt: "Discover how artificial intelligence is revolutionizing the way businesses operate and compete.",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Building Scalable Products: A Complete Guide",
    excerpt: "Learn the essential strategies for building products that can scale with your business growth.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "Product Building",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Top 10 Tech Trends to Watch This Year",
    excerpt: "Stay ahead of the curve with our analysis of the most impactful technology trends.",
    date: "Dec 1, 2024",
    readTime: "6 min read",
    category: "Tech Trends",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Why User Experience Matters More Than Ever",
    excerpt: "Understanding the critical role of UX design in creating successful digital products.",
    date: "Nov 28, 2024",
    readTime: "4 min read",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Cloud Computing: Best Practices for Startups",
    excerpt: "Essential cloud strategies every startup should implement for optimal performance.",
    date: "Nov 25, 2024",
    readTime: "8 min read",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
            Insights & <span className="text-gradient">Updates</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Stay updated with the latest trends, insights, and news from the world of technology and innovation.
          </p>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 container-custom section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-primary font-medium text-sm group/btn">
                  Read More
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
