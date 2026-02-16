import React from 'react';
import Layout from '../components/Layout/Layout';
import KeyTargets from '../components/Home/KeyTargets';
import ProgramAreas from '../components/Home/ProgramAreas';
import TeamSection from '../components/Home/TeamSection';
import PartnersSection from '../components/Home/PartnersSection';
import NewsEventsSection from '../components/Home/NewsEventsSection';
import HeroCarousel from '../components/Home/HeroCarousel';
import { Target, Users, GraduationCap } from 'lucide-react';

function HomePage() {
  return (
    <Layout><HeroCarousel />
      <section id="about" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Strategic Outcomes</h2>
            <p className="section-subtitle mx-auto text-center">
              Our 10-year initiative aims to achieve three interconnected strategic outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mb-6">
                <Users className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Expanded Work Opportunities</h3>
              <p className="text-gray-600 leading-relaxed font-opensans">
                Creating equal work opportunities for young women and men in the agricultural sector through skill development and entrepreneurship.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 flex items-center justify-center mb-6">
                <Target className="text-green-700" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Climate Adaptive Agriculture</h3>
              <p className="text-gray-600 leading-relaxed font-opensans">
                Improving climate adaptive agricultural production and productivity through innovative technologies and sustainable practices.
              </p>
            </div>
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 flex items-center justify-center mb-6">
                <GraduationCap className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Quality Education Outcomes</h3>
              <p className="text-gray-600 leading-relaxed font-opensans">
                Strengthening the quality of higher agricultural education outcomes in training, research, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <KeyTargets />
      <ProgramAreas />
      <TeamSection />
      <PartnersSection />
      <NewsEventsSection />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Involved?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Join us in transforming agriculture and empowering youth across Ethiopia. 
              Explore our programs, connect with our team, or become a partner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/partners" className="btn-secondary">
                Become a Partner
              </a>
              <a href="/programs" className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 transition duration-300">
                Explore Programs
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;