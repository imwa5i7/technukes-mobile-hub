import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Expert team with 10+ years of combined experience",
  "Agile development methodology for faster delivery",
  "Transparent communication throughout the project",
  "Post-launch support and maintenance included",
  "Cutting-edge tech stack and best practices",
  "100% client satisfaction guarantee",
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              We Build Products That{" "}
              <span className="gradient-text">Users Love</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Technukes, we don't just write code – we craft digital experiences.
              Our passion for innovation and commitment to excellence drives us to
              deliver solutions that exceed expectations and stand the test of time.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-4 rounded-3xl card-gradient border border-border p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  {/* Stat Cards */}
                  {[
                    { number: "150+", label: "Happy Clients" },
                    { number: "50+", label: "Apps Launched" },
                    { number: "5★", label: "Average Rating" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <span className="text-3xl font-bold gradient-text">{stat.number}</span>
                      <span className="text-muted-foreground">{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
