import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-900/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-yellow-400 font-extrabold">Funding the Future</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            We partner with visionary entrepreneurs to build tomorrow's most 
            impactful companies. From seed to scale, we provide capital, 
            expertise, and networks that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg">
              Apply for Funding
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}