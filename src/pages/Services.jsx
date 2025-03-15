import { motion } from 'framer-motion';
import { FaHeartbeat, FaHome, FaCalendarCheck, FaUserNurse, FaHandHoldingHeart, FaClock } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHeartbeat className="text-4xl text-primary mb-4" />,
      title: 'Personal Care',
      description: 'Assistance with daily activities like bathing, dressing, grooming, toileting, and medication management.',
      details: [
        'Bathing, showering, and personal hygiene assistance',
        'Dressing and grooming support',
        'Toileting and incontinence care',
        'Medication reminders and management',
        'Mobility assistance and fall prevention'
      ]
    },
    {
      icon: <FaHome className="text-4xl text-primary mb-4" />,
      title: 'Home Support',
      description: 'Help with household tasks, meal preparation, and maintaining a safe environment.',
      details: [
        'Light housekeeping and laundry',
        'Meal planning and preparation',
        'Grocery shopping and errands',
        'Home safety evaluations',
        'Organization and light cleaning'
      ]
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-primary mb-4" />,
      title: 'Companionship',
      description: 'Friendly visits, conversation, and accompaniment to appointments and activities.',
      details: [
        'Engaging conversation and social interaction',
        'Accompaniment to appointments and events',
        'Assistance with hobbies and recreational activities',
        'Reading, playing games, and other stimulating activities',
        'Emotional support and friendship'
      ]
    },
    {
      icon: <FaUserNurse className="text-4xl text-primary mb-4" />,
      title: 'Specialized Care',
      description: 'Tailored care for conditions like dementia, Parkinson',
      details: [
        'Dementia and Alzheimers care',
        'Parkinsons disease support',
        'Post-surgery and hospital discharge care',
        'Chronic illness management',
        'End-of-life and palliative care support'
      ]
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl text-primary mb-4" />,
      title: 'Respite Care',
      description: 'Temporary relief for family caregivers to rest and recharge while knowing their loved one is in good hands.',
      details: [
        'Short-term care coverage',
        'Flexible scheduling options',
        'Seamless continuation of care routines',
        'Peace of mind for family caregivers',
        'Comprehensive care during family absences'
      ]
    },
    {
      icon: <FaClock className="text-4xl text-primary mb-4" />,
      title: '24/7 Care',
      description: 'Round-the-clock care for clients who require continuous supervision and assistance.',
      details: [
        'Overnight supervision and care',
        'Multiple caregiver coordination',
        'Continuous monitoring for safety',
        'Assistance throughout the night as needed',
        'Complete care coverage for high-need clients'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 pt-20">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Comprehensive home care solutions tailored to your unique needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div>
                  <h4 className="font-medium mb-3 text-primary">What's included:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Care Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a thorough process to ensure we provide the right care for your specific situation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We begin with a free consultation to understand your needs and explain how we can help."
              },
              {
                step: "2",
                title: "Care Assessment",
                description: "Our care coordinator conducts a comprehensive assessment to develop a personalized care plan."
              },
              {
                step: "3",
                title: "Caregiver Matching",
                description: "We carefully match you with caregivers whose skills and personality best fit your needs and preferences."
              },
              {
                step: "4",
                title: "Care Implementation",
                description: "Your caregiver begins providing services according to your customized care plan."
              },
              {
                step: "5",
                title: "Ongoing Supervision",
                description: "We regularly monitor the care provided and make adjustments as your needs change."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex mb-8 last:mb-0"
              >
                <div className="mr-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {process.step}
                  </div>
                  {index < 4 && <div className="w-0.5 h-full bg-primary mx-auto mt-2"></div>}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a free consultation and learn how our services can help you or your loved one live more comfortably at home.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
