import { motion } from 'framer-motion';
import { FaHeart, FaHandHoldingHeart, FaUserFriends, FaAward } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-primary text-4xl mb-4" />,
      title: "Compassion",
      description: "We approach every interaction with empathy, kindness, and genuine care for our clients' wellbeing."
    },
    {
      icon: <FaHandHoldingHeart className="text-primary text-4xl mb-4" />,
      title: "Dignity",
      description: "We respect each client's individuality and promote independence and autonomy in all aspects of care."
    },
    {
      icon: <FaUserFriends className="text-primary text-4xl mb-4" />,
      title: "Reliability",
      description: "We deliver consistent, dependable care that our clients and their families can count on."
    },
    {
      icon: <FaAward className="text-primary text-4xl mb-4" />,
      title: "Excellence",
      description: "We strive for the highest standards in home care through continuous improvement and professional development."
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
              About Crystal Care
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Providing compassionate home care services since 2008
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1576765608866-5b51f8d9f434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="Caring professional with elderly client"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Crystal Care was founded in 2008 by Sarah Johnson, a registered nurse who recognized the growing need for quality home care services that would allow individuals to age in place with dignity and independence.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small team of dedicated caregivers has grown into a trusted home care provider serving hundreds of families across the region. Despite our growth, we've maintained our commitment to personalized care and building meaningful relationships with each client we serve.
              </p>
              <p className="text-gray-600">
                Today, Crystal Care is recognized as a leader in the home care industry, known for our exceptional caregivers, comprehensive services, and unwavering dedication to enhancing the quality of life for our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Crystal Care, from how we train our caregivers to how we interact with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who guide our organization and ensure we deliver the highest quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
              },
              {
                name: "Michael Rodriguez",
                title: "Director of Care Services",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              },
              {
                name: "Jennifer Lee",
                title: "Head of Caregiver Training",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <blockquote className="text-xl italic text-gray-600 mb-8">
              "The team at Crystal Care has been a blessing for our family. Their compassionate approach and attention to detail have made all the difference in my mother's care. We couldn't be more grateful for their support during this challenging time."
            </blockquote>
            <div>
              <p className="font-semibold">Elizabeth Thompson</p>
              <p className="text-gray-500">Daughter of Client</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
