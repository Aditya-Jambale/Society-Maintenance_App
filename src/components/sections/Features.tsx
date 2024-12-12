import { motion } from 'framer-motion';
import { Shield, Users, Home, TreePine, Wifi, Camera, Dumbbell, Car } from 'lucide-react';
import { Card } from '../ui/Card';

const features = [
  {
    name: '24/7 Security',
    description: 'Round-the-clock security personnel and CCTV surveillance.',
    icon: Shield,
  },
  {
    name: 'Community Events',
    description: 'Regular social gatherings and cultural celebrations.',
    icon: Users,
  },
  {
    name: 'Modern Amenities',
    description: 'State-of-the-art facilities for all residents.',
    icon: Home,
  },
  {
    name: 'Green Spaces',
    description: 'Landscaped gardens and walking paths.',
    icon: TreePine,
  },
  {
    name: 'High-Speed Internet',
    description: 'Fiber-optic connectivity throughout.',
    icon: Wifi,
  },
  {
    name: 'Smart Security',
    description: 'Advanced surveillance systems.',
    icon: Camera,
  },
  {
    name: 'Fitness Center',
    description: 'Fully equipped modern gymnasium.',
    icon: Dumbbell,
  },
  {
    name: 'Parking Space',
    description: 'Designated parking for residents.',
    icon: Car,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Experience Premium Living
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover the perfect blend of comfort, security, and modern amenities
            at B5 Devgiri Society.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={feature.name} variant="glass">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4 floating">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}