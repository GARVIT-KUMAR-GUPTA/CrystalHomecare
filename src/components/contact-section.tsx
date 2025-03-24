// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Phone, Mail, MapPin } from "lucide-react";

// export default function ContactSection() {
//   return (
//     <section id="contact" className="py-16 sm:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-primary">Contact Us</h2>
//           <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
//             Get in touch with us to learn more about our services or schedule a consultation
//           </p>
//         </motion.div>

//         <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-2"
//           >
//             <Card>
//               <CardContent className="p-6">
//                 <form className="space-y-6">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <Input placeholder="First Name" />
//                     <Input placeholder="Last Name" />
//                   </div>
//                   <Input type="email" placeholder="Email Address" />
//                   <Input type="tel" placeholder="Phone Number" />
//                   <Textarea placeholder="Your Message" className="h-32" />
//                   <Button type="submit" className="w-full">Send Message</Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Google Maps Integration */}
//             <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
//               <iframe
//                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.687038666344!2d75.71740967444119!3d26.913425760061642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30036f54703%3A0xe6a25cc7e9c2dd2e!2scrystal%20home%20care%20services%20jaipur!5e0!3m2!1sen!2sin!4v1742064352086!5m2!1sen!2sin" 
//                width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <Card>
//               <CardContent className="p-6 flex items-center space-x-4">
//                 <Phone className="h-6 w-6 text-primary" />
//                 <div>
//                   <div className="font-medium">Phone</div>
//                   <div className="text-sm text-muted-foreground">+919358220702</div>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex items-center space-x-4">
//                 <Mail className="h-6 w-6 text-primary" />
//                 <div>
//                   <div className="font-medium">Email</div>
//                   <div className="text-sm text-muted-foreground">crystakhomecareservicesjpr@gmail.com</div>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 flex items-center space-x-4">
//                 <MapPin className="h-6 w-6 text-primary" />
//                 <div>
               
//                   <div className="font-medium">Address</div>
//                   <div className="text-sm text-muted-foreground">Bajri Mandi Rd, Panchyawala, Jaipur, Rajasthan 302034</div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us to learn more about our services or schedule a consultation.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input type="tel" placeholder="Phone Number" />
                  <Textarea placeholder="Your Message" className="h-32" />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Google Maps Integration */}
            <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7115.374377407452!2d75.71097237770995!3d26.913420999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30036f54703%3A0xe6a25cc7e9c2dd2e!2scrystal%20home%20care%20services%20jaipur!5e0!3m2!1sen!2sin!4v1742842295634!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Phone */}
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+919358220702" className="text-sm text-muted-foreground hover:text-primary transition">
                    +919358220702
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:crystakhomecareservicesjpr@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition">
                  crystakhomecareservicesjpr@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardContent className="p-6 flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-medium">Address</div>
                  <a
                    href="https://maps.app.goo.gl/sK2wg2i5Tf6fGoJQ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    Bajri Mandi Rd, Panchyawala, Jaipur, Rajasthan 302034
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
