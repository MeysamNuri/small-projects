import { UserPlus, Settings, Play } from "lucide-react";
import { Button } from "./ui/button";

export function HowItWorksSection() {
  // Swapped steps: Entry/Start -> Settings -> Registration
  const steps = [
    {
      number: "۳",
      icon: <Play className="w-8 h-8" />,
      title: "ورود به اپلیکیشن و شروع تحلیل",
      description: "شروع به استفاده از قابلیت‌های هوشمند"
    },
    {
      number: "۲",
      icon: <Settings className="w-8 h-8" />,
      title: "فعال‌سازی بسته Smart Help",
      description: "بسته هوشمند را فعال کنید"
    },
    {
      number: "۱",
      icon: <UserPlus className="w-8 h-8" />,
      title: "ثبت‌نام در مای هلو",
      description: "حساب کاربری خود را ایجاد کنید"
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            تنها در ۳ قدم:
          </h2>
        </div>
        
        {/* Steps Container with explicit left-to-right flow */}
        <div className="relative">
          {/* Background connector line */}
          <div className="hidden md:block absolute top-[4.5rem] left-1/6 right-1/6 h-0.5 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative z-10">
                <div className="relative">
                  {/* Step Number */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center text-xl font-bold shadow-lg border-2 border-blue-600">
                      <span className="text-blue-600 font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600 shadow-md hover:shadow-lg transition-shadow duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Arrow indicator for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6 mb-2">
                      <div className="w-6 h-6 text-blue-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M19 12l-7 7-7-7"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button className="brand-blue px-8 py-3 text-base hover:scale-105 transition-transform duration-200">
            راهنمای راه‌اندازی گام به گام
          </Button>
        </div>
      </div>
    </section>
  );
}