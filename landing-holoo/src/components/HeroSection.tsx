import { Button } from "./ui/button";
import { DemoForm } from "./DemoForm";
import { Smartphone, Monitor, ChevronDown } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [showOptions, setShowOptions] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);

  const handleDemoClick = () => {
    setShowOptions(false);
    setShowDemoForm(true);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                دستیار هوشمند هلو؛ یک تصمیم بهتر، یک کسب‌وکار هوشمندتر
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                همه‌ی آنچه از نرم‌افزار هلو می‌دانی، حالا در قالب یک اپلیکیشن هوشمند، ساده و همیشه در دسترس
              </p>
            </div>

            {/* Single CTA with Dropdown */}
            <div className="relative">
              <Button
                className="brand-blue px-8 py-3 text-base flex items-center gap-2"
                size="lg"
                onClick={() => setShowOptions(!showOptions)}
              >
                دریافت اپلیکیشن
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${showOptions ? 'rotate-180' : ''}`} />
              </Button>

              {/* Dropdown Options */}
              {showOptions && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10 min-w-[280px]">
                  <a className="w-full px-6 py-3 text-right hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100"
                    download
                    href="/SmartA.apk"
                  >
                    <Smartphone className="w-5 h-5 text-gray-600" />
                    <span>نصب نسخه اندروید</span>
                  </a>
                  <button className="w-full px-6 py-3 text-right hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100">
                    <Monitor className="w-5 h-5 text-gray-600" />
                    <span>نصب برای iOS </span>
                  </button>
                  <button
                    className="w-full px-6 py-3 text-right hover:bg-gray-50 flex items-center gap-3"
                    onClick={handleDemoClick}
                  >
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">D</span>
                    </div>
                    <span>درخواست دمو</span>
                  </button>
                </div>
              )}

              {/* Demo Form Modal */}
              <DemoForm isOpen={showDemoForm} onOpenChange={setShowDemoForm} />
            </div>
          </div>

          {/* Simple Clean Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Simple Phone Mockup Container */}
              <div className="relative transform rotate-6 hover:rotate-3 transition-transform duration-500">
                {/* Phone Frame */}
                <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2rem] p-1">
                    <div className="bg-white rounded-[1.8rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-gray-50 px-6 py-2 flex justify-between items-center text-xs">
                        <span className="font-medium">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                          <div className="w-6 h-2 bg-gray-300 rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Content - Simple Clean Design */}
                      <div className="p-6 space-y-6">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-bold text-gray-900">داشبورد هوشمند</h3>
                            <p className="text-sm text-gray-500">دستیار هلو</p>
                          </div>
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">H</span>
                          </div>
                        </div>

                        {/* Simple AI Card */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="text-sm font-medium text-purple-700">تحلیل هوشمند</span>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-purple-200 rounded-full w-3/4"></div>
                            <div className="h-2 bg-purple-200 rounded-full w-1/2"></div>
                          </div>
                        </div>

                        {/* Simple Metrics - No Numbers */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-green-50 rounded-xl p-4">
                            <div className="w-full h-3 bg-green-200 rounded-full mb-2"></div>
                            <div className="w-2/3 h-2 bg-green-100 rounded-full"></div>
                          </div>
                          <div className="bg-blue-50 rounded-xl p-4">
                            <div className="w-full h-3 bg-blue-200 rounded-full mb-2"></div>
                            <div className="w-3/4 h-2 bg-blue-100 rounded-full"></div>
                          </div>
                        </div>

                        {/* Simple Action Button */}
                        <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-medium">
                          مشاهده بیشتر
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simple Floating Elements */}
                <div className="absolute -top-3 -left-3 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-3xl -z-10 transform scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}