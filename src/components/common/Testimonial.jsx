import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "The caregivers from Crystal Care have been a blessing for our family. They provide exceptional care for my mother with such compassion and professionalism.",
      name: "Sarah Johnson",
      relation: "Daughter of Client"
    },
    {
      quote: "I've been able to remain in my home thanks to the wonderful support from Crystal Care. My caregiver has become like family to me.",
      name: "Robert Williams",
      relation: "Client"
    },
    {
      quote: "The peace of mind we've gained from knowing our father is in good hands is priceless. The staff is responsive, and the care is personalized.",
      name: "Michael Thompson",
      relation: "Son of Client"
    }
  ];

  return (
    <section className="py-20 bg-primary bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from families who have experienced the difference our compassionate care makes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg relative"
            >
              <FaQuoteLeft className="text-primary text-opacity-20 text-4xl absolute top-4 left-4" />
              <div className="pt-6">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.relation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
