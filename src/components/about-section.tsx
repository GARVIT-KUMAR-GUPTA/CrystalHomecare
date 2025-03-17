import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1516841273335-e39b37888115"
              alt="Our care team"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">About Crystal Home Care</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              With over a decade of experience in providing exceptional home care services, Crystal Home Care has become a trusted name in compassionate caregiving. Our team of dedicated professionals is committed to delivering personalized care that enhances the quality of life for our clients.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary">10+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Years of Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="mt-2 text-sm text-muted-foreground">Satisfied Clients</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
