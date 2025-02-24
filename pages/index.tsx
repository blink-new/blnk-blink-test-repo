import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code2, Database, Layout, Sparkles, Smartphone } from "lucide-react";
import Head from "next/head";

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
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="hero-gradient absolute inset-0 z-0" />
          <div className="container mx-auto px-4 z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet <span className="gradient-text">Blink</span>
                <br />
                Your AI Full Stack Engineer
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 typing">
                Create beautiful websites and apps in seconds
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Start Creating <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 bg-background/95">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
              One AI Engineer, Endless Possibilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="w-8 h-8 text-primary" />,
                  title: "Beautiful UI Design",
                  description: "Create stunning user interfaces with modern design principles and smooth animations"
                },
                {
                  icon: <Database className="w-8 h-8 text-secondary" />,
                  title: "Full Stack Development",
                  description: "Handle everything from frontend to backend, databases, and APIs"
                },
                {
                  icon: <Smartphone className="w-8 h-8 text-accent" />,
                  title: "Mobile Apps",
                  description: "Build native mobile applications for iOS and Android platforms"
                }
              ].map((feature, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur border-primary/10 hover:border-primary/20 transition-all duration-300">
                  <div className="floating">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How <span className="gradient-text">Blink</span> Works
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Describe Your Vision",
                    description: "Tell Blink what you want to build - a website, web app, or mobile app"
                  },
                  {
                    step: "2",
                    title: "AI-Powered Development",
                    description: "Blink creates beautiful UI, writes clean code, and sets up your infrastructure"
                  },
                  {
                    step: "3",
                    title: "Launch Your Product",
                    description: "Get a production-ready application with all the features you need"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="hero-gradient absolute inset-0" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let Blink turn your ideas into reality
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Start Building <Sparkles className="ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  View Examples <Code2 className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}