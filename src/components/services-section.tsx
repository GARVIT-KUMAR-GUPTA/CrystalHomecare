import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Syringe,
  Droplet,
  Heart,
  Stethoscope,
  BadgeAlert,
  Activity,
  Bed,
  Thermometer
} from "lucide-react";

const serviceCategories = [
  {
    title: "Medical Procedures",
    icon: Syringe,
    services: [
      "Injection",
      "Drip, cannula",
      "Catheter",
      "Drip",
      "Centerline care",
      "Arterial line care",
      "Feeding tube care"
    ]
  },
  {
    title: "Specialized Care",
    icon: Heart,
    services: [
      "Bedsure care",
      "Bed ridan patient care",
      "Tracheostomy",
      "Bipap machine",
      "All troma care"
    ]
  },
  {
    title: "Basic Medical Services",
    icon: Stethoscope,
    services: [
      "Vital check",
      "Sugar check",
      "Lab test",
      "Blood bank"
    ]
  },
  {
    title: "Treatment & Procedures",
    icon: Activity,
    services: [
      "Nebulization",
      "All dressing",
      "Enema"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-primary"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive healthcare solutions tailored to your needs
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <category.icon className="h-8 w-8 text-primary" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="services">
                      <AccordionTrigger>View Services</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-muted-foreground">
                          {category.services.map((service, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {service}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}