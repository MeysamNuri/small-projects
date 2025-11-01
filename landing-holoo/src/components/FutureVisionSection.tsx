import { Bot, Sparkles, Link2 } from "lucide-react";
import { FeedbackForm } from "./FeedbackForm";

export function FutureVisionSection() {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "توسعه با هوش مصنوعی",
      description: "برای مشاوره‌های شخصی‌سازی‌شده"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "کاراکتر فانتزی اختصاصی",
      description: "برای تجربه همراهی"
    },
    {
      icon: <Link2 className="w-8 h-8" />,
      title: "قابلیت اتصال",
      description: "به سایر نرم‌افزارهای مالی در آینده"
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ما فقط یک اپلیکیشن نیستیم؛ یک تحول در مدیریت کسب‌وکاریم
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
}