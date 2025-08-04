'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, TrendingUp } from 'lucide-react';

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All Companies');

  const filters = ['All Companies', 'AI/ML', 'FinTech', 'HealthTech', 'CleanTech'];

  const companies = [
    {
      name: 'TechFlow',
      description: 'Revolutionary platform for enterprise automation',
      category: 'AI/ML',
      funding: '$2.5M SERIES A',
      growth: '+340%',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'GreenEnergy Co',
      description: 'Next-generation renewable energy solutions',
      category: 'CleanTech',
      funding: '$5.2M SERIES B',
      growth: '+180%',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'HealthTech Pro',
      description: 'Digital health platform transforming patient care',
      category: 'HealthTech',
      funding: '$3.8M SERIES A',
      growth: '+220%',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'FinanceAI',
      description: 'AI-powered financial analytics and insights',
      category: 'FinTech',
      funding: '$4.1M SERIES A',
      growth: '+280%',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const filteredCompanies = activeFilter === 'All Companies' 
    ? companies 
    : companies.filter(company => company.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to back exceptional founders building category-defining companies 
            across multiple sectors.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className={activeFilter === filter ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredCompanies.map((company, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {company.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                  <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                </div>
                <p className="text-gray-600 mb-4">{company.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-blue-600">{company.funding}</span>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-sm font-semibold">{company.growth}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}