'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">VCFund.vc</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Home
              </a>
              <a href="#portfolio" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Portfolio
              </a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                About
              </a>
              <a href="#team" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Team
              </a>
              <a href="#blog" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                Blog
              </a>
              <a href="#contact">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Contact
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#portfolio" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
              Portfolio
            </a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#team" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
              Team
            </a>
            <a href="#blog" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer" onClick={() => setIsOpen(false)}>
              Blog
            </a>
            <div className="px-3 py-2">
              <a href="#contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Contact
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}