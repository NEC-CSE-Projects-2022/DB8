import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ArrowRight, Shield, Zap, Brain, Database, Activity, Target } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const Home = () => {
  const navigate = useNavigate();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const carouselSlides = [
    {
      title: 'Early Detection Saves Lives',
      description: 'AI-powered analysis helps identify lung cancer in early stages when treatment is most effective',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=500&fit=crop',
      icon: Target
    },
    {
      title: 'MobileNetV2 Architecture',
      description: 'Lightweight deep learning model with attention mechanisms for accurate classification',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=500&fit=crop',
      icon: Brain
    },
    {
      title: '96% Classification Accuracy',
      description: 'Trained on Kaggle Chest CT-Scan dataset with validated performance across 4 cancer types',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=500&fit=crop',
      icon: Shield
    },
    {
      title: 'Advanced Preprocessing',
      description: 'CLAHE enhancement, white balancing, and normalization for optimal image analysis',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1200&h=500&fit=crop',
      icon: Zap
    },
    {
      title: 'Explainable AI',
      description: 'Grad-CAM and LIME visualizations help understand model decisions and build trust',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=1200&h=500&fit=crop',
      icon: Activity
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Detection',
      description: 'Advanced MobileNetV2 architecture with attention mechanisms for accurate classification'
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'Lightweight model optimized for quick analysis while maintaining high accuracy'
    },
    {
      icon: Shield,
      title: '96% Accuracy',
      description: 'Trained on Kaggle Chest CT-Scan dataset with validated performance metrics'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/50 via-cyan-50/30 to-white pt-0">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 md:py-16">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Educational Research Project
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Lung Cancer Detection
              <span className="block mt-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Using AI Technology
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Advanced deep learning system utilizing lightweight attention-enhanced MobileNetV2 for early detection of lung cancer from CT scans and X-ray images.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/test')}
                data-testid="cta-test-now"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all"
              >
                Test Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/about')}
                data-testid="cta-learn-more"
                className="rounded-full px-8 h-12 text-base font-semibold border-2 hover:bg-slate-100 transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="mt-12">
            <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef} data-testid="home-carousel">
              <div className="flex">
                {carouselSlides.map((slide, index) => {
                  const Icon = slide.icon;
                  return (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                      <div className="relative h-[400px] sm:h-[500px]">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 text-white">
                          <div className="max-w-3xl">
                            <div className="w-14 h-14 bg-teal-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 border border-teal-400/30">
                              <Icon className="w-8 h-8 text-teal-300" />
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-bold mb-3">{slide.title}</h3>
                            <p className="text-lg text-slate-200">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Key Features
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Combining cutting-edge AI with medical imaging for reliable cancer detection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-slate-200 bg-slate-50/50 hover:shadow-lg hover:border-teal-300 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};