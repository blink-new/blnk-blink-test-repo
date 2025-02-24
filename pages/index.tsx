import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Database, Layout, Sparkles, Smartphone, Star, Zap } from "lucide-react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blink - AI Full Stack Engineer</title>
        <meta name="description" content="Create beautiful websites and apps instantly with Blink - The world's #1 AI full stack engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="hero-gradient absolute inset-0 z-0" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 z-10"
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  Meet <span className="gradient-text">Blink</span>
                  <br />
                  Your AI Full Stack Engineer
                </h1>
              </motion.div>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 typing">
                Create beautiful websites and apps in seconds
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                  Start Creating <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <section className="py-32 bg-background/95">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 gradient-text">
              One AI Engineer, Endless Possibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="w-10 h-10 text-primary" />,
                  title: "Beautiful UI Design",
                  description: "Create stunning user interfaces with modern design principles and smooth animations"
                },
                {
                  icon: <Database className="w-10 h-10 text-secondary" />,
                  title: "Full Stack Development",
                  description: "Handle everything from frontend to backend, databases, and APIs"
                },
                {
                  icon: <Smartphone className="w-10 h-10 text-accent" />,
                  title: "Mobile Apps",
                  description: "Build native mobile applications for iOS and Android platforms"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 glass-card card-hover">
                    <div className="feature-icon floating">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mt-6 mb-4">{feature.title}</h3>
                    <p className="text-gray-400 text-lg">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-32 bg-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              How <span className="gradient-text">Blink</span> Works
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "1",
                    icon: <Star className="w-6 h-6" />,
                    title: "Describe Your Vision",
                    description: "Tell Blink what you want to build - a website, web app, or mobile app"
                  },
                  {
                    step: "2",
                    icon: <Zap className="w-6 h-6" />,
                    title: "AI-Powered Development",
                    description: "Blink creates beautiful UI, writes clean code, and sets up your infrastructure"
                  },
                  {
                    step: "3",
                    icon: <Sparkles className="w-6 h-6" />,
                    title: "Launch Your Product",
                    description: "Get a production-ready application with all the features you need"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-lg">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="hero-gradient absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 relative z-10"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Let Blink turn your ideas into reality
              </p>
              <div className="flex gap-6 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 px-8 py-6 text-lg">
                    Start Building <Sparkles className="ml-2" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                    View Examples <Code2 className="ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}