'use client';
import { motion } from 'framer-motion';

const services = [
  { title: 'Custom Furniture Design' },
  { title: 'Room Decoration & Styling' },
  { title: 'Space Planning & Interior Layout' },
  { title: 'Home Renovations & Remodeling' },
  { title: 'Lighting Design' },
  { title: 'Virtual Interior Design Consultations' },
];

export default function Expertise() {
  return (
    <section className="py-20 bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-serif text-gray-800 mb-4">Our Expertise</h2>
        <p className="text-gray-600">
          Selecting the ideal elements to elevate your space
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="flex items-start space-x-4"
          >
            <span className="text-2xl font-bold text-gray-300">
              {`0${idx + 1}`}
            </span>
            <div>
              <h3 className="text-lg font-medium text-gray-800">{svc.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
