import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "../assets/img1.jpg"
const photos = [
  {
    url: "https://images.unsplash.com/photo-1612776572997-76cc42e058c3",
    title: "Professional Carecdc",
    description: "Our staff providing dedicated care"
  },
  {
    url: "https://images.unsplash.com/photo-1584515933487-779824d29309",
    title: "Modern Equipment",
    description: "State-of-the-art medical facilities"
  },
  {
    url: "/src/assets/img2.jpg",
    title: "Home Environment",
    description: "Comfortable care in familiar surroundings"
  },
  {
    url: "/src/assets/img1.jpg",
    title: "Specialized Services",
    description: "Tailored medical care for every need"
  },
];

export default function PhotoGallery() {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Gallery</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at our facilities and dedicated care team in action
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{photo.title}</h3>
                  <p className="text-sm text-muted-foreground">{photo.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
