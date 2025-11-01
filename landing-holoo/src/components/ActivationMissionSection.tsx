import { Button } from "./ui/button";
import { Users, Clock, Zap } from "lucide-react";

export function ActivationMissionSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            جزو ۱۰۰ نفر اول باش... تجربه‌ای زودتر از دیگران!
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            این دستیار فقط برای ۱۰۰ کاربر اول فعال می‌شود
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              این یک دعوت ساده نیست؛ یک رقابت دوستانه است.<br/>
              هر روز فقط تعداد محدودی از کاربران می‌توانند وارد فاز استفاده ویژه شوند.<br/>
              هر چه زودتر وارد شوید، شانس بیشتری دارید.
            </p>
          </div>
          
          {/* Status Widget */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">۷۸</div>
                <div className="text-sm text-gray-600">جایگاه شما در صف</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">۲۲</div>
                <div className="text-sm text-gray-600">باقی‌مانده تا بسته‌شدن</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">۱۰۰</div>
                <div className="text-sm text-gray-600">ظرفیت کل نسخه اولیه</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>پیشرفت:</span>
                <span>۷۸%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="brand-blue w-full px-4 py-4 text-base md:w-auto md:px-8 md:py-4 md:text-lg whitespace-break-spaces h-[55px] md:h-[35px]">
              ثبت‌نام کن، قفل نسخه هوشمند رو باز کن، قبل از اینکه دیر بشه!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}