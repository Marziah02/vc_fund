'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, TrendingUp, Calendar, Users, MapPin, Globe, X } from 'lucide-react';

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All Companies');
  const [selectedCompany, setSelectedCompany] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ['All Companies', 'AI/ML', 'FinTech', 'HealthTech', 'CleanTech'];

  const companies = [
    {
      name: 'TechFlow',
      description: 'Revolutionary platform for enterprise automation',
      fullDescription: 'TechFlow is transforming how enterprises handle automation with cutting-edge AI technology. Our platform enables businesses to automate complex workflows, reduce operational costs by up to 60%, and improve efficiency across all departments.',
      category: 'AI/ML',
      funding: '$2.5M SERIES A',
      growth: '+340%',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      founded: '2022',
      employees: '25-50',
      location: 'San Francisco, CA',
      website: 'https://techflow.com',
      metrics: {
        revenue: '$2.1M ARR',
        customers: '150+ Enterprise Clients',
        growth: '340% YoY Growth',
        retention: '98% Customer Retention'
      },
      founders: [
        { name: 'Alex Chen', role: 'CEO & Co-founder', background: 'Former Google AI Engineer' },
        { name: 'Sarah Kim', role: 'CTO & Co-founder', background: 'Ex-Microsoft Principal Engineer' }
      ],
      keyAchievements: [
        'Secured partnerships with 3 Fortune 500 companies',
        'Achieved SOC 2 Type II compliance',
        'Launched in 15+ countries',
        'Featured in TechCrunch and Forbes'
      ]
    },
    {
      name: 'GreenEnergy Co',
      description: 'Next-generation renewable energy solutions',
      fullDescription: 'GreenEnergy Co is pioneering sustainable energy solutions with innovative solar and wind technologies. Our advanced energy storage systems and smart grid integration are helping cities and businesses transition to 100% renewable energy.',
      category: 'CleanTech',
      funding: '$5.2M SERIES B',
      growth: '+180%',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      founded: '2021',
      employees: '75-100',
      location: 'Austin, TX',
      website: 'https://greenenergy.co',
      metrics: {
        revenue: '$8.5M ARR',
        customers: '200+ Municipal Clients',
        growth: '180% YoY Growth',
        retention: '95% Customer Retention'
      },
      founders: [
        { name: 'Michael Torres', role: 'CEO & Founder', background: 'Former Tesla Energy Director' },
        { name: 'Lisa Wang', role: 'COO & Co-founder', background: 'Ex-SolarCity Operations Lead' }
      ],
      keyAchievements: [
        'Deployed 500MW+ of renewable capacity',
        'Reduced energy costs by 40% for clients',
        'Winner of CleanTech Innovation Award 2024',
        'Carbon negative operations since 2023'
      ]
    },
    {
      name: 'HealthTech Pro',
      description: 'Digital health platform transforming patient care',
      fullDescription: 'HealthTech Pro is revolutionizing healthcare delivery through AI-powered diagnostics and telemedicine solutions. Our platform connects patients with healthcare providers seamlessly while providing real-time health monitoring and personalized treatment plans.',
      category: 'HealthTech',
      funding: '$3.8M SERIES A',
      growth: '+220%',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      founded: '2022',
      employees: '40-60',
      location: 'Boston, MA',
      website: 'https://healthtechpro.com',
      metrics: {
        revenue: '$3.2M ARR',
        customers: '50+ Healthcare Systems',
        growth: '220% YoY Growth',
        retention: '96% Customer Retention'
      },
      founders: [
        { name: 'Dr. Emily Rodriguez', role: 'CEO & Co-founder', background: 'Former Mayo Clinic Chief Digital Officer' },
        { name: 'James Park', role: 'CTO & Co-founder', background: 'Ex-Epic Systems Senior Architect' }
      ],
      keyAchievements: [
        'FDA approval for AI diagnostic tool',
        'Served 1M+ patients',
        'HIPAA compliant platform',
        'Partnership with top 10 health systems'
      ]
    },
    {
      name: 'FinanceAI',
      description: 'AI-powered financial analytics and insights',
      fullDescription: 'FinanceAI leverages advanced machine learning to provide real-time financial analytics and risk assessment for financial institutions. Our platform processes billions of transactions daily to deliver actionable insights and fraud detection capabilities.',
      category: 'FinTech',
      funding: '$4.1M SERIES A',
      growth: '+280%',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      founded: '2021',
      employees: '35-50',
      location: 'New York, NY',
      website: 'https://financeai.com',
      metrics: {
        revenue: '$4.8M ARR',
        customers: '80+ Financial Institutions',
        growth: '280% YoY Growth',
        retention: '99% Customer Retention'
      },
      founders: [
        { name: 'David Kumar', role: 'CEO & Co-founder', background: 'Former Goldman Sachs VP' },
        { name: 'Rachel Thompson', role: 'Chief Data Scientist', background: 'Ex-JPMorgan Quant Researcher' }
      ],
      keyAchievements: [
        'Prevented $50M+ in fraudulent transactions',
        'SOX compliance certification',
        'Processing 10B+ transactions monthly',
        'Featured in Wall Street Journal'
      ]
    },
  ];

  const filteredCompanies = activeFilter === 'All Companies' 
    ? companies 
    : companies.filter(company => company.category === activeFilter);

  const openModal = (company: any) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };
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
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => openModal(company)}>
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

      {/* Portfolio Company Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCompany && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    {selectedCompany.name}
                  </DialogTitle>
                  <Badge className="bg-blue-100 text-blue-800">
                    {selectedCompany.category}
                  </Badge>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Hero Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img 
                    src={selectedCompany.image} 
                    alt={selectedCompany.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{selectedCompany.name}</h3>
                    <p className="text-sm opacity-90">{selectedCompany.description}</p>
                  </div>
                </div>

                {/* Company Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Company Overview</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {selectedCompany.fullDescription}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">Founded: {selectedCompany.founded}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">Team Size: {selectedCompany.employees}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">Location: {selectedCompany.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-gray-400 mr-2" />
                        <a href={selectedCompany.website} className="text-blue-600 hover:underline">
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Revenue</div>
                        <div className="font-semibold text-gray-900">{selectedCompany.metrics.revenue}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Customers</div>
                        <div className="font-semibold text-gray-900">{selectedCompany.metrics.customers}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Growth</div>
                        <div className="font-semibold text-green-600">{selectedCompany.metrics.growth}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-sm text-gray-600">Retention</div>
                        <div className="font-semibold text-gray-900">{selectedCompany.metrics.retention}</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-blue-600 font-medium mb-1">Investment Round</div>
                      <div className="text-lg font-bold text-blue-900">{selectedCompany.funding}</div>
                    </div>
                  </div>
                {/* Founders */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Leadership Team</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedCompany.founders.map((founder: any, index: number) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-gray-900">{founder.name}</h5>
                        <p className="text-sm text-blue-600 mb-1">{founder.role}</p>
                        <p className="text-sm text-gray-600">{founder.background}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {selectedCompany.keyAchievements.map((achievement: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}