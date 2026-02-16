import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { 
  Image, 
  Video, 
  Play, 
  Download, 
  Camera,
  X
} from 'lucide-react';

interface Photo {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  thumbnail: string;
  fullSize: string;
  photographer?: string;
  location?: string;
}

interface Video {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  views: number;
}

const MediaPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const photos: Photo[] = [
    {
      id: 1,
      title: 'GTA Students Orientation 2024',
      description: 'Newly admitted Graduate Training Assistantship students at Haramaya University',
      date: 'March 2024',
      category: 'Events',
      thumbnail: '/images/gallery/photo1.jpg',
      fullSize: '/images/gallery/photo1-full.jpg',
      photographer: 'TAGDev 2.0 Media Team',
      location: 'Haramaya University'
    },
    {
      id: 2,
      title: 'Climate-Smart Agriculture Field Day',
      description: 'Farmers learning about drought-tolerant crop varieties at demonstration site',
      date: 'February 2024',
      category: 'Field Activities',
      thumbnail: '/images/gallery/photo2.jpg',
      fullSize: '/images/gallery/photo2-full.jpg',
      photographer: 'Dr. Abebech Demissie',
      location: 'Dire Dawa'
    },
    {
      id: 3,
      title: 'Youth Entrepreneurship Workshop',
      description: 'Young agripreneurs pitching their business ideas',
      date: 'January 2024',
      category: 'Training',
      thumbnail: '/images/gallery/photo3.jpg',
      fullSize: '/images/gallery/photo3-full.jpg',
      photographer: 'Ato Solomon Girma',
      location: 'Haramaya University'
    },
    {
      id: 4,
      title: 'Tree Planting Campaign',
      description: 'Community members planting indigenous tree seedlings',
      date: 'December 2023',
      category: 'Community Engagement',
      thumbnail: '/images/gallery/photo4.jpg',
      fullSize: '/images/gallery/photo4-full.jpg',
      location: 'Harar'
    },
    {
      id: 5,
      title: 'Research Symposium',
      description: 'Graduate students presenting their research findings',
      date: 'November 2023',
      category: 'Events',
      thumbnail: '/images/gallery/photo5.jpg',
      fullSize: '/images/gallery/photo5-full.jpg',
      location: 'Haramaya University'
    },
    {
      id: 6,
      title: 'Women in Agriculture',
      description: 'Women farmers learning about improved poultry management',
      date: 'October 2023',
      category: 'Training',
      thumbnail: '/images/gallery/photo6.jpg',
      fullSize: '/images/gallery/photo6-full.jpg',
      photographer: 'W/ro Hiwot Assefa',
      location: 'Harar'
    }
  ];

  const videos: Video[] = [
    {
      id: 1,
      title: 'TAGDev 2.0 Program Overview',
      description: 'An introduction to the TAGDev 2.0 initiative at Haramaya University',
      date: 'March 2024',
      duration: '4:32',
      thumbnail: '/images/videos/thumb1.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example1',
      views: 1245
    },
    {
      id: 2,
      title: 'Climate-Smart Agriculture in Action',
      description: 'Demonstration of water harvesting and conservation agriculture techniques',
      date: 'February 2024',
      duration: '8:15',
      thumbnail: '/images/videos/thumb2.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example2',
      views: 892
    },
    {
      id: 3,
      title: 'Youth Entrepreneurship Success Stories',
      description: 'Interviews with young agripreneurs supported by TAGDev 2.0',
      date: 'January 2024',
      duration: '6:45',
      thumbnail: '/images/videos/thumb3.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example3',
      views: 1567
    },
    {
      id: 4,
      title: 'Partnership Launch Event',
      description: 'Highlights from the official launch of TAGDev 2.0 at Haramaya University',
      date: 'December 2023',
      duration: '3:50',
      thumbnail: '/images/videos/thumb4.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=example4',
      views: 2103
    }
  ];

  const categories: string[] = ['all', 'Events', 'Field Activities', 'Training', 'Community Engagement'];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const Lightbox: React.FC = () => {
    if (!selectedPhoto) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <button
          onClick={() => setSelectedPhoto(null)}
          className="absolute top-6 right-6 text-white hover:text-[#f8921e] transition-colors"
          aria-label="Close lightbox"
          type="button"
        >
          <X size={32} />
        </button>
        
        <div className="max-w-6xl w-full">
          <img 
            src={selectedPhoto.fullSize} 
            alt={selectedPhoto.title}
            className="w-full h-auto max-h-[70vh] object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/1200x800?text=Image+Not+Found';
            }}
          />
          
          <div className="mt-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
            <p className="text-gray-300 mb-4">{selectedPhoto.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {selectedPhoto.date && <span>📅 {selectedPhoto.date}</span>}
              {selectedPhoto.location && <span>📍 {selectedPhoto.location}</span>}
              {selectedPhoto.photographer && <span>📷 {selectedPhoto.photographer}</span>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="/images/media-hero.jpg" 
            alt="TAGDev 2.0 Media" 
            className="hero-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.className = 'hero-background bg-gradient-to-r from-blue-800 to-green-700';
              }
            }}
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="max-w-3xl">
            <h1 className="hero-title">
              Media Gallery
            </h1>
            <p className="hero-subtitle">
              Photos and videos documenting our journey in agricultural transformation
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'photos'
                    ? 'bg-[#155a90] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                type="button"
              >
                <Image size={20} className="mr-2" />
                Photos ({photos.length})
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'videos'
                    ? 'bg-[#155a90] text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                type="button"
              >
                <Video size={20} className="mr-2" />
                Videos ({videos.length})
              </button>
            </div>
          </div>

          
          {activeTab === 'photos' && (
            <>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#155a90] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    type="button"
                  >
                    {category === 'all' ? 'All Photos' : category}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedPhoto(photo);
                      }
                    }}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                      <img
                        src={photo.thumbnail}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://via.placeholder.com/600x400?text=Photo+Not+Found';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white font-semibold text-lg mb-1">{photo.title}</p>
                          <p className="text-gray-200 text-sm">{photo.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPhotos.length === 0 && (
                <div className="text-center py-16">
                  <Image size={64} className="mx-auto text-gray-300 mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No photos found</h3>
                  <p className="text-gray-600">Try selecting a different category</p>
                </div>
              )}
            </>
          )}

          
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <div key={video.id} className="group">
                  <div className="relative overflow-hidden rounded-xl shadow-lg aspect-video">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/800x450?text=Video+Thumbnail';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-[#155a90] rounded-full flex items-center justify-center">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 text-white text-xs rounded-full">
                      {video.duration}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{video.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{video.date}</span>
                      <span>{video.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedPhoto && <Lightbox />}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
              <Download className="text-[#155a90]" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Download Media Resources</h2>
            <p className="text-lg text-gray-700 mb-8">
              High-resolution photos, b-roll footage, and media kits are available for journalists and partners.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-[#155a90] hover:bg-[#0f3d66] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Request Media Access
              </a>
              <a href="#" className="bg-[#f8921e] hover:bg-[#e07f1a] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Download Press Kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MediaPage;