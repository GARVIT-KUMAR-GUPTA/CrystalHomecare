import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              We're here to answer your questions and discuss your care needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <FaPhone className="text-primary text-2xl" />,
                title: "Phone",
                info: "(123) 456-7890",
                description: "Call us Monday through Friday, 8am to 6pm"
              },
              {
                icon: <FaEnvelope className="text-primary text-2xl" />,
                title: "Email",
                info: "info@crystalcare.com",
                description: "We'll respond to your inquiry within 24 hours"
              },
              {
                icon: <FaMapMarkerAlt className="text-primary text-2xl" />,
                title: "Office",
                info: "WP79+9X Jaipur, Rajasthan",
                description: "Bajri Mandi Rd, Panchyawala, Jaipur, Rajasthan 302034"
              },
              {
                icon: <FaClock className="text-primary text-2xl" />,
                title: "Hours",
                info: "Mon-Fri: 8am-6pm",
                description: "Sat: 9am-4pm, Sun: Closed"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-primary font-medium mb-2">{item.info}</p>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or ready to schedule a consultation? Fill out the form below and one of our care coordinators will contact you shortly.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name*</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name*</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service of Interest</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-care">Personal Care</option>
                    <option value="home-support">Home Support</option>
                    <option value="companionship">Companionship</option>
                    <option value="specialized-care">Specialized Care</option>
                    <option value="respite-care">Respite Care</option>
                    <option value="24-7-care">24/7 Care</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Please share any details about your care needs..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="h-full">
                <div className="bg-gray-200 rounded-lg overflow-hidden h-full min-h-[400px]">
                  {/* Replace with your actual Google Maps embed code */}

                  <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.687038666344!2d75.71740967444119!3d26.913425760061642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30036f54703%3A0xe6a25cc7e9c2dd2e!2scrystal%20home%20care%20services%20jaipur!5e0!3m2!1sen!2sin!4v1742064352086!5m2!1sen!2sin" 
  width="600" 
  height="450" 
  style={{ border: 0 }} 
  allowFullScreen
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>

                    </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and care process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I get started with Crystal Care services?",
                answer: "Getting started is easy. Simply contact us by phone, email, or through our website to schedule a free consultation. During this initial meeting, we'll discuss your needs and explain how our services can help."
              },
              {
                question: "How are your caregivers selected and trained?",
                answer: "All our caregivers undergo a rigorous selection process that includes background checks, reference verification, and interviews. Once hired, they receive comprehensive training in all aspects of home care, including specialized training for conditions like dementia and Parkinson's disease."
              },
              {
                question: "What if I need to change my care schedule?",
                answer: "We understand that needs can change, and we're flexible. Simply contact your care coordinator to discuss schedule adjustments, and we'll do our best to accommodate your needs with minimal disruption to your care."
              },
              {
                question: "Is home care covered by insurance or Medicare?",
                answer: "Some long-term care insurance policies cover home care services. Medicare typically covers only skilled nursing care prescribed by a doctor, not ongoing personal care. We can help you understand your payment options during your consultation."
              },
              {
                question: "Can I change caregivers if needed?",
                answer: "Yes, your satisfaction is our priority. If you're not completely comfortable with your caregiver for any reason, please let us know, and we'll work to find a better match for your needs and preferences."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md mb-4"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Discuss Your Care Needs?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Our team is standing by to answer your questions and help you find the right care solution for you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1234567890"
              className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Call (123) 456-7890
            </a>
            <button
              onClick={() => document.getElementById('firstName').focus()}
              className="inline-block bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white/10 transition-colors"
            >
              Send a Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
