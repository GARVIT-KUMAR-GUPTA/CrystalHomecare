import { motion } from "framer-motion";
import { ConsultationDialog } from "./consultation-dialog";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary">
              Compassionate Care in the Comfort of Home
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              We provide professional and personalized home care services to help your loved ones maintain their independence and quality of life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ConsultationDialog />
              <Button size="lg" variant="outline">Learn More</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1723433892471-62f113c8c9a0"
              alt="Caregiver helping senior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}