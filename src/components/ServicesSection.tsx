// src/components/ServicesSection.tsx
import { motion } from "framer-motion";
import { useSupabase } from "@/hooks/useSupabase";
import {
  Smartphone,
  Brain,
  Rocket,
  Code,
  Cloud,
  Shield,
} from "lucide-react";

// Service type matching Supabase table
interface Service {
  id: number; // primary key
  title: string;
  description: string;
  // icon name stored as a string (e.g., "Smartphone")
  icon: string;
}

// Map string icon names to Lucide React components
const iconMap: Record<string, any> = {
  Smartphone,
  Brain,
  Rocket,
  Code,
  Cloud,
  Shield,
};

export const ServicesSection = () => {
  // Animation variants for the container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const { data, loading, error } = useSupabase<Service>("services");

  if (loading) return <p className="text-center py-12">Loading services…</p>;
  if (error) return <p className="text-center text-red-500 py-12">Error: {error}</p>;

  // data is guaranteed non‑null here
  const services = data!;

  return (
    <section id="services" className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Services That <span className="gradient-text">Drive Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer comprehensive tech solutions designed to transform your business
            and keep you ahead in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Smartphone; // fallback
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};