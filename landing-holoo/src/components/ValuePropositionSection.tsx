import { BarChart3, Brain, AlertTriangle } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function ValuePropositionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "نمایش شاخص‌ها",
      description: "وضعیت فروش، چک‌ها، بدهکاران، موجودی"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "تحلیل مشاوره‌پذیر",
      description: "مبتنی بر داده‌های واقعی و الگوریتم‌های هوشمند"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "هشدارهای هوشمند",
      description: "پیش از آن‌که مشکلی رخ دهد، باخبر شوید"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            چرا دستیار هوشمند هلو؟
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="flex justify-center mb-4"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : { scale: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20, 
                  delay: (index * 0.2) + 0.2 
                }}
              >
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors duration-300">
                  {feature.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button className="brand-blue px-8 py-3 text-base hover:scale-105 transition-transform duration-200">
            آشنایی با امکانات پیشرفته
          </Button>
        </motion.div>
      </div>
    </section>
  );
}