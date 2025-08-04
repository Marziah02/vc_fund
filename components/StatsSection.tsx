import { Building2, DollarSign, TrendingUp, Globe } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Building2,
      number: '150+',
      label: 'Portfolio Companies',
    },
    {
      icon: DollarSign,
      number: '$2.5B',
      label: 'Assets Under Management',
    },
    {
      icon: TrendingUp,
      number: '12.5x',
      label: 'Average Return',
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Countries',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}