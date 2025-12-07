import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "01",
    title: "Share Your Vision",
    description: "Tell us about your project idea, goals, and requirements.",
  },
  {
    step: "02",
    title: "Get a Custom Plan",
    description: "We'll create a tailored roadmap with timeline and budget.",
  },
  {
    step: "03",
    title: "Development Begins",
    description: "Our expert team brings your vision to life with regular updates.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your app and provide ongoing maintenance and support.",
  },
];

const benefits = [
  "Free initial consultation",
  "Transparent pricing",
  "Agile development process",
  "24/7 dedicated support",
];

export const StartProjectSection = () => {
  return (
    <section id="start-project" className="section-padding bg-gradient-to-b from-primary/5 via-transparent to-transparent">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Start Your Project</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Build <span className="gradient-text">Something Great?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's turn your idea into a powerful, scalable application. Here's how we work together.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 border border-primary/30 p-8 md:p-12"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Let's Get Started</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-muted-foreground max-w-xl mb-6">
                Schedule a free consultation with our team to discuss your project requirements and get a custom quote.
              </p>
              
              {/* Benefits */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                No commitment required
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
