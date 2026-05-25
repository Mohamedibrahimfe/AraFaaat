import DhikrCounter from '@/components/DhikrCounter';
import { Heart, BookOpen, Flame, Moon, Sun, Megaphone, HandCoins, Sunset, HeartHandshake, Sparkles, ShieldCheck, RefreshCcw, BookHeart, AlertTriangle } from 'lucide-react';

/**
 * Islamic Modern Harmony Design
 * - Deep Islamic Green primary color
 * - Warm Gold accents
 * - Soft Cream background
 * - Gentle animations and meditative interactions
 * - RTL layout with Arabic typography
 */

export default function Home() {
  const dhikrs = [
    {
      title: 'دعاء يوم عرفة',
      description: ' لا اله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير',
      target: 1000,
      icon: '💫',
      delay: 320,
      counterKey: 'arafah-dua',
    }, {
      title: 'استغفر الله',
      description: 'طلب المغفرة من الله عن الذنوب والخطايا',
      target: 1000,
      icon: '🕊️',
      delay: 0,
      counterKey: 'astaghfirullah',
    },
    {
      title: 'اللهم صل وسلم على نبينا محمد',
      description: 'الصلاة على النبي محمد صلى الله عليه وسلم',
      target: 1000,
      icon: '🌟',
      delay: 40,
      counterKey: 'salawat',
    },
    {
      title: 'سبحان الله',
      description: 'تسبيح الله وتنزيهه عن كل نقص',
      target: 1000,
      icon: '🌙',
      delay: 0,
      counterKey: 'subhanallah',
    },
    {
      title: 'الحمد لله',
      description: 'شكر الله على نعمه التي لا تحصى',
      target: 1000,
      icon: '🙏',
      delay: 80,
      counterKey: 'alhamdulillah',
    },
    {
      title: 'لا إله إلا الله',
      description: 'التوحيد والإقرار بوحدانية الله',
      target: 3000,
      icon: '✨',
      delay: 160,
      counterKey: 'tawheed',
    },
    {
      title: 'الله أكبر',
      description: 'تعظيم الله وإجلاله على كل شيء',
      target: 1000,
      icon: '⭐',
      delay: 240,
      counterKey: 'allahu-akbar',
    },
    {
      title: 'لا حول ولا قوة إلا بالله',
      description: 'التوكل على الله والاعتراف بضعف الإنسان',
      target: 1000,
      icon: '🌿',
      delay: 120,
      counterKey: 'la-hawla',
    }

  ];


  const supplications = [
    {
      icon: <HeartHandshake className="text-accent" size={28} />,
      title: 'أفضل دعاء يوم عرفة',
      description:
        'قال النبي ﷺ: "خير الدعاء دعاء يوم عرفة، وخير ما قلت أنا والنبيون من قبلي: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير".',
    },
    {
      icon: <Sparkles className="text-accent" size={28} />,
      title: 'اللهم إنك عفو تحب العفو',
      description:
        'من أعظم الأدعية الثابتة: "اللهم إنك عفو تحب العفو فاعف عني".',
    },
    {
      icon: <ShieldCheck className="text-accent" size={28} />,
      title: 'ربنا آتنا في الدنيا حسنة',
      description:
        'من الأدعية الجامعة: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار".',
    },
    {
      icon: <RefreshCcw className="text-accent" size={28} />,
      title: 'الثبات على الدين',
      description:
        'كان النبي ﷺ يكثر أن يقول: "يا مقلب القلوب ثبت قلبي على دينك".',
    },
    {
      icon: <BookHeart className="text-accent" size={28} />,
      title: 'الاستعانة على الطاعة',
      description:
        'من الأدعية العظيمة: "اللهم أعني على ذكرك وشكرك وحسن عبادتك".',
    },
    {
      icon: <Heart className="text-accent" size={28} />,
      title: 'دعاء الحاجة والمغفرة:',
      description: "«اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْماً كَثِيراً، وَلاَ يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي إِنَّكَ أَنْتَ الغَفُورُ الرَّحِيمُ»"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJhZmFofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            يوم عرفة
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
            تحضير وجدول لحصد الحسنات
          </p>
          <p className="text-lg text-white/80 mt-2 drop-shadow-md">
            اليوم - 26 من ذي الحجة
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        {/* Introduction Section */}
        <div className="max-w-3xl mx-auto mb-12 arafah-fade-in">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="arafah-heading text-2xl mb-4">عن يوم عرفة</h2>
            <p className="text-foreground leading-relaxed mb-4">
              يوم عرفة هو يوم الوقوف بجبل عرفة، وهو من أعظم أيام السنة وأفضلها. قال رسول الله صلى الله عليه وسلم:
              <span className="block text-center italic my-3 text-primary font-semibold">
                "ما من يوم أكثر عتقا من النار من يوم عرفة"
              </span>
            </p>
            <p className="text-foreground leading-relaxed">
              في هذا اليوم العظيم، يستحب الإكثار من الذكر والدعاء والتضرع إلى الله تعالى. استخدم هذا الموقع لتتبع أذكارك
              وأدعيتك وحصد أكبر قدر من الحسنات.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-12 arafah-fade-in arafah-stagger-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="arafah-heading text-2xl mb-4">أذكار الصباح</h2>

          <span className="text-lg font-medium text-foreground">
            من الأذكار الثابتة الصحيحة:
          </span>

          <ul className="list-disc list-inside mt-4 text-foreground leading-relaxed">
            <li className="hover:underline">آية الكرسي</li>
            <li className="hover:underline">آخر آيتين من سورة البقرة</li>
            <li className="hover:underline">سورة الإخلاص والفلق والناس ×3</li>
            <li className="hover:underline">«أصبحنا وأصبح الملك لله...»</li>
            <li className="hover:underline">«اللهم بك أصبحنا وبك أمسينا...»</li>
            <li className="hover:underline">الاستغفار</li>
            <li className="hover:underline">الصلاة على النبي ﷺ</li>
          </ul>
        </div>

        <div className="max-w-3xl mx-auto mb-12 arafah-fade-in arafah-stagger-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="arafah-heading text-2xl mb-4" >          قراءة القرآن
          </h2>

          <span className="text-lg font-medium text-foreground block"> اقتراح عملي:</span>
          <ul className="list-disc list-inside mt-4 text-foreground leading-relaxed">
            <li className="hover:underline"> جزء بعد الفجر</li>
            <li className="hover:underline"> جزء بعد الظهر</li>
            <li className="hover:underline"> جزء بعد العصر</li>
            <li className="hover:underline">          أو حسب استطاعتك مع تدبر ولو قليل</li>
          </ul>
        </div>
        <div className="max-w-3xl mx-auto mb-12 arafah-fade-in arafah-stagger-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="arafah-heading text-2xl mb-4">الدعاء الكثير</h2>
          <p className="text-foreground leading-relaxed mb-4">هذا أهم أعمال اليوم.</p>
          <p className="text-foreground leading-relaxed font-medium mb-3">ادعُ:</p>
          <ul className="list-disc list-inside text-foreground leading-relaxed mb-4 space-y-1">
            <li>بالمغفرة</li>
            <li>الهداية</li>
            <li>صلاح الدين</li>
            <li>الرزق الحلال</li>
            <li>التوفيق</li>
            <li>الزواج الصالح</li>
            <li>النجاح</li>
            <li>رفع الهموم</li>
            <li>لأهلك وأصحابك والمسلمين</li>
          </ul>
          <p className="text-foreground leading-relaxed font-medium mb-3">ومن الأدعية الثابتة الصحيحة:</p>
          <ul className="list-disc list-inside text-foreground leading-relaxed space-y-1">
            <li>«ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار»</li>
            <li>«اللهم إنك عفو تحب العفو فاعف عني»</li>
            <li>«يا مقلب القلوب ثبت قلبي على دينك»</li>
            <li>«اللهم أعني على ذكرك وشكرك وحسن عبادتك»</li>
          </ul>
        </div>
        <div className="max-w-3xl mx-auto mb-12 arafah-fade-in arafah-stagger-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="arafah-heading text-2xl mb-4">من العصر إلى المغرب (أغلى وقت)</h2>

          <p className="text-foreground leading-relaxed mb-3">دي من أثمن ساعات اليوم.</p>

          <p className="text-foreground font-medium mb-2">ركّز على:</p>
          <ul className="list-disc list-inside text-foreground leading-relaxed mb-4 space-y-1">
            <li>الدعاء بإلحاح</li>
            <li>التوبة الصادقة</li>
            <li>الاستغفار</li>
            <li>التهليل</li>
            <li>الصلاة على النبي ﷺ</li>
          </ul>

          <p className="text-foreground font-medium mb-2">قلل جدًا:</p>
          <ul className="list-disc list-inside text-foreground leading-relaxed space-y-1">
            <li>الموبايل</li>
            <li>السوشيال ميديا</li>
            <li>النقاشات</li>
            <li>الفيديوهات</li>
          </ul>
        </div>
        {/* Divider */}
        <div className="arafah-divider" />

        {/* Dhikr Counters Section */}
        <div className="mb-12">
          <h2 className="arafah-heading text-3xl mb-2 text-center">الأذكار المستحبة</h2>
          <p className="text-center text-muted-foreground mb-8">
            اضغط على الزر لتعديل العداد وتتبع أذكارك
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dhikrs.map((dhikr, index) => (
              <DhikrCounter
                key={dhikr.counterKey}
                title={dhikr.title}
                description={dhikr.description}
                target={dhikr.target}
                icon={dhikr.icon}
                delay={dhikr.delay}
                counterKey={dhikr.counterKey}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="arafah-divider" />

        {/* Supplications Section */}
        <div className="mb-12">
          <h2 className="arafah-heading text-3xl mb-2 text-center">أفضل الأدعية</h2>
          <p className="text-center text-muted-foreground mb-8">
            من أفضل الأدعية المستحبة في يوم عرفة
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplications.map((supplication, index) => (
              <div
                key={index}
                className="arafah-card p-6 flex flex-col gap-4 arafah-stagger-1"
                style={{ animationDelay: `${400 + index * 80}ms` }}
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="arafah-heading text-lg">{supplication.title}</h3>
                  </div>
                </div>

                <p className="text-foreground leading-relaxed italic text-center py-4 border-t border-b border-gray-100">
                  {supplication.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="arafah-divider" />

        {/* Tips Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="arafah-heading text-3xl mb-8 text-center">نصائح مهمة</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Megaphone className="text-accent" size={28} />,
                title: 'التكبير',
                description:
                  'يُشرع التكبير المطلق في يوم عرفة وأيام العشر، ومن الصيغ الثابتة المشهورة: "الله أكبر الله أكبر لا إله إلا الله، والله أكبر الله أكبر ولله الحمد".',
              },
              {
                icon: <HandCoins className="text-accent" size={28} />,
                title: 'الصدقة',
                description:
                  'الصدقة من الأعمال العظيمة في يوم عرفة ولو بالقليل، قال ﷺ: "اتقوا النار ولو بشق تمرة".',
              },
              {
                icon: <Sunset className="text-accent" size={28} />,
                title: 'قبل المغرب',
                description:
                  'اختم يومك بالدعاء بخشوع والاستغفار وحمد الله على التوفيق، وعند الفطر قل: "ذهب الظمأ وابتلت العروق وثبت الأجر إن شاء الله".',
              },
              {
                icon: <AlertTriangle className="text-accent" size={28} />,
                title: 'نصائح مهمة',
                description:
                  'لا تُشغل نفسك بـ:\n\nأعداد وأرقام غير ثابتة\nصلوات مخصوصة ليوم عرفة غير صحيحة\nأدعية منسوبة بدون دليل\nرسائل “ردد الدعاء الفلاني 1000 مرة”\n\nالأفضل دائمًا:\n\nذكر ثابت\nدعاء من القلب\nقرآن\nتوبة\nإخلاص',
              }

            ].map((tip, index) => (
              <div
                key={index}
                className="arafah-card p-6 flex flex-col gap-3 arafah-stagger-1"
                style={{ animationDelay: `${800 + index * 80}ms` }}
              >
                <div className="flex items-start gap-3">
                  {tip.icon}
                  <div>
                    <h3 className="arafah-heading text-lg">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200 mt-12">
          <p className="text-foreground mb-2">
            لا تنسونا من دعائكم في هذا اليوم العظيم، ونسأل الله أن يتقبل منا ومنكم صالح الأعمال ويجعلنا من عتقاء النار في يوم عرفة.
          </p>
          <p className="text-muted-foreground">
            اللهم اجعلنا ممن استجاب دعاءهم وغفر ذنوبهم في هذا اليوم العظيم
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Created with ❤️ by Muhammad Ibrahim. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
