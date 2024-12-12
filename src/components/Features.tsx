import { Shield, Users, Home, Tree } from 'lucide-react';

const features = [
  {
    name: '24/7 Security',
    description: 'Round-the-clock security personnel and CCTV surveillance for your peace of mind.',
    icon: Shield,
  },
  {
    name: 'Community Events',
    description: 'Regular social gatherings and festivals to strengthen our community bonds.',
    icon: Users,
  },
  {
    name: 'Modern Amenities',
    description: 'Well-maintained facilities including gym, playground, and community hall.',
    icon: Home,
  },
  {
    name: 'Green Spaces',
    description: 'Beautiful gardens and walking paths for a refreshing environment.',
    icon: Tree,
  },
];

export function Features() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose B5 Devgiri?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the perfect blend of comfort, security, and community living
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-center text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}