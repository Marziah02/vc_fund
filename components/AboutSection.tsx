import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  const achievements = [
    'Stage: Series A & B (Occasional Seed)',
    'Check Size: $1M - $10M',
    'Focus: North America & Europe'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About VCFund.vc</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2015, VCFund.vc has established itself as a leading venture 
              capital firm focused on early-stage technology companies. We believe 
              in the power of innovation to solve the world's most pressing challenges 
              and support exceptional entrepreneurs building lasting businesses.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our investment thesis centers on transformative technologies that 
              have the potential to reshape industries and create significant value for 
              all stakeholders. We typically invest $1M-$10M in Series A and B 
              rounds, with occasional seed investments.
            </p>
            
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Companies Funded</div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-gray-900">Since 2015</div>
              <div className="text-gray-600">Building the Future</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}