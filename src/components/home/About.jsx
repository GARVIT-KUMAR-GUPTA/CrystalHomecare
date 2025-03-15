import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20">
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
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Crystal Care</h2>
            <p className="text-gray-600 mb-6">
              For over 15 years, Crystal Care has been providing exceptional home care services to individuals and families in need. Our mission is to enhance the quality of life for our clients by delivering compassionate, personalized care that promotes independence, dignity, and well-being.
            </p>
            <p className="text-gray-600 mb-6">
              What sets us apart is our team of highly trained and dedicated caregivers who are passionate about making a positive difference in the lives of those they serve. We understand that each client has unique needs and preferences, which is why we take a personalized approach to care planning.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
                <p className="text-gray-600">Skilled Caregivers</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
