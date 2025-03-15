import { motion } from 'framer-motion';
import { FaHeartbeat, FaHome, FaCalendarCheck, FaUserNurse } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHeartbeat className="text-4xl text-primary mb-4" />,
      title: 'Personal Care',
      description: 'Assistance with daily activities like bathing, dressing, and medication management.',
    },
    {
      icon: <FaHome className="text-4xl text-primary mb-4" />,
      title: 'Home Support',
      description: 'Help with household tasks, meal preparation, and maintaining a safe environment.',
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-primary mb-4" />,
      title: 'Companionship',
      description: 'Friendly visits, conversation, and accompaniment to appointments and activities.',
    },
    {
      icon: <FaUserNurse className="text-4xl text-primary mb-4" />,
      title: 'Specialized Care',
      description: 'Tailored care for conditions like dementia, Parkinson',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of home care services tailored to meet your unique needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
