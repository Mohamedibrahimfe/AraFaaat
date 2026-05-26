import { useRef } from 'react';
import { motion } from 'framer-motion';
import DhikrCounter from '@/components/DhikrCounter';
import {
  Heart, BookOpen, Megaphone, HandCoins, Sunset, AlertTriangle,
  HeartHandshake, Sparkles, ShieldCheck, RefreshCcw, BookHeart,
  Moon, Quote, ScrollText
} from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const dhikrs = [
    { title: 'دعاء يوم عرفة', description: 'لا اله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير', target: 1000, icon: '💫', delay: 320, counterKey: 'arafah-dua' },
    { title: 'استغفر الله', description: 'طلب المغفرة من الله عن الذنوب والخطايا', target: 1000, icon: '🕊️', delay: 0, counterKey: 'astaghfirullah' },
    { title: 'اللهم صل وسلم على نبينا محمد', description: 'الصلاة على النبي محمد ﷺ', target: 1000, icon: '🌟', delay: 40, counterKey: 'salawat' },
    { title: 'سبحان الله', description: 'تسبيح الله وتنزيهه عن كل نقص', target: 1000, icon: '🌙', delay: 80, counterKey: 'subhanallah' },
    { title: 'الحمد لله', description: 'شكر الله على نعمه التي لا تحصى', target: 1000, icon: '🙏', delay: 120, counterKey: 'alhamdulillah' },
    { title: 'لا إله إلا الله', description: 'التوحيد والإقرار بوحدانية الله', target: 3000, icon: '✨', delay: 160, counterKey: 'tawheed' },
    { title: 'الله أكبر', description: 'تعظيم الله وإجلاله على كل شيء', target: 1000, icon: '⭐', delay: 240, counterKey: 'allahu-akbar' },
    { title: 'لا حول ولا قوة إلا بالله', description: 'التوكل على الله والاعتراف بضعف الإنسان', target: 1000, icon: '🌿', delay: 200, counterKey: 'la-hawla' },
  ];

  const supplications = [
    { icon: <HeartHandshake size={24} />, title: 'أفضل دعاء يوم عرفة', description: 'قال النبي ﷺ: "خير الدعاء دعاء يوم عرفة، وخير ما قلت أنا والنبيون من قبلي: لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير".' },
    { icon: <Sparkles size={24} />, title: 'اللهم إنك عفو تحب العفو', description: 'من أعظم الأدعية الثابتة: "اللهم إنك عفو تحب العفو فاعف عني".' },
    { icon: <ShieldCheck size={24} />, title: 'ربنا آتنا في الدنيا حسنة', description: 'من الأدعية الجامعة: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار".' },
    { icon: <RefreshCcw size={24} />, title: 'الثبات على الدين', description: 'كان النبي ﷺ يكثر أن يقول: "يا مقلب القلوب ثبت قلبي على دينك".' },
    { icon: <BookHeart size={24} />, title: 'الاستعانة على الطاعة', description: 'من الأدعية العظيمة: "اللهم أعني على ذكرك وشكرك وحسن عبادتك".' },
    { icon: <Heart size={24} />, title: 'دعاء الحاجة والمغفرة', description: '"اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْماً كَثِيراً، وَلاَ يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ، وَارْحَمْنِي إِنَّكَ أَنْتَ الغَفُورُ الرَّحِيمُ"' },
  ];

  const tips = [
    { icon: <Megaphone size={24} />, title: 'التكبير', description: 'يُشرع التكبير المطلق في يوم عرفة وأيام العشر، ومن الصيغ الثابتة: "الله أكبر الله أكبر لا إله إلا الله، والله أكبر الله أكبر ولله الحمد".' },
    { icon: <HandCoins size={24} />, title: 'الصدقة', description: 'الصدقة من الأعمال العظيمة في يوم عرفة ولو بالقليل، قال ﷺ: "اتقوا النار ولو بشق تمرة".' },
    { icon: <Sunset size={24} />, title: 'قبل المغرب', description: 'اختم يومك بالدعاء بخشوع والاستغفار وحمد الله على التوفيق.' },
    { icon: <AlertTriangle size={24} />, title: 'نصائح مهمة', description: 'لا تُشغل نفسك بالأعداد غير الثابتة والصلوات المخصوصة غير الصحيحة. الأفضل: ذكر ثابت، دعاء من القلب، قرآن، توبة، إخلاص.' },
  ];

  return (
    <div className="min-h-screen bg-geometric pattern-geometric">
      
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative z-10 text-center px-4 py-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm mb-8">
              <Moon size={14} />
              <span>26 من ذي الحجة</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-tight">
              يوم عرفة
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-[Cormorant_Garamond] italic mb-3">
              — Arafah Day —
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
              تحضير وجدول لحصد الحسنات في أعظم أيام السنة
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.2, duration: 0.6 }, y: { delay: 1.2, duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <ScrollText size={20} className="text-muted-foreground/40" />
        </motion.div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="container py-16 md:py-24">
        <motion.div className="max-w-3xl mx-auto" {...fadeUp}>
          <div className="arafah-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Quote size={28} className="text-accent" />
              <h2 className="arafah-heading text-3xl">عن يوم عرفة</h2>
            </div>
            <p className="text-foreground leading-relaxed text-lg mb-4">
              يوم عرفة هو يوم الوقوف بجبل عرفة، وهو من أعظم أيام السنة وأفضلها.
            </p>
            <blockquote className="border-r-4 border-accent pr-4 my-6 text-center">
              <p className="text-xl italic text-foreground/80 font-[Cormorant_Garamond]">
                "ما من يوم أكثر عتقا من النار من يوم عرفة"
              </p>
            </blockquote>
            <p className="text-foreground/80 leading-relaxed">
              في هذا اليوم العظيم، يستحب الإكثار من الذكر والدعاء والتضرع إلى الله تعالى.
              استخدم هذا الموقع لتتبع أذكارك وأدعيتك وحصد أكبر قدر من الحسنات.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ============ MORNING ADHKAR & QURAN & DUA ============ */}
      <section className="container pb-16 md:pb-24">
        <motion.div className="max-w-3xl mx-auto grid gap-6" {...staggerContainer}>
          <motion.div className="arafah-card p-8" variants={fadeUp}>
            <h2 className="arafah-heading text-2xl mb-4">أذكار الصباح</h2>
            <p className="text-muted-foreground mb-4">من الأذكار الثابتة الصحيحة:</p>
            <ul className="space-y-2 text-foreground leading-relaxed">
              {['آية الكرسي', 'آخر آيتين من سورة البقرة', 'سورة الإخلاص والفلق والناس ×3', '"أصبحنا وأصبح الملك لله..."', '"اللهم بك أصبحنا وبك أمسينا..."', 'الاستغفار', 'الصلاة على النبي ﷺ'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="arafah-card p-8" variants={fadeUp}>
            <h2 className="arafah-heading text-2xl mb-4">قراءة القرآن</h2>
            <p className="text-muted-foreground mb-4">اقتراح عملي:</p>
            <ul className="space-y-2 text-foreground leading-relaxed">
              {['جزء بعد الفجر', 'جزء بعد الظهر', 'جزء بعد العصر', 'أو حسب استطاعتك مع تدبر ولو قليل'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="arafah-card p-8" variants={fadeUp}>
            <h2 className="arafah-heading text-2xl mb-4">الدعاء الكثير</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              هذا أهم أعمال اليوم. ادعُ بالمغفرة، الهداية، صلاح الدين، الرزق الحلال،
              التوفيق، الزواج الصالح، النجاح، رفع الهموم، ولأهلك وأصحابك والمسلمين.
            </p>
            <p className="font-medium text-foreground mb-3">ومن الأدعية الثابتة الصحيحة:</p>
            <ul className="space-y-2 text-foreground leading-relaxed">
              {[
                '"ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار"',
                '"اللهم إنك عفو تحب العفو فاعف عني"',
                '"يا مقلب القلوب ثبت قلبي على دينك"',
                '"اللهم أعني على ذكرك وشكرك وحسن عبادتك"',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0 mt-2" />
                  <span className="italic">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="arafah-card p-8 border-accent/20 bg-gradient-to-br from-accent/[0.03] to-transparent" variants={fadeUp}>
            <h2 className="arafah-heading text-2xl mb-4">من العصر إلى المغرب — أغلى وقت</h2>
            <p className="text-foreground/80 mb-4">هذه من أثمن ساعات اليوم.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-medium text-foreground mb-2">ركّز على:</p>
                <ul className="space-y-1.5 text-foreground/80">
                  {['الدعاء بإلحاح', 'التوبة الصادقة', 'الاستغفار', 'التهليل', 'الصلاة على النبي ﷺ'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-accent">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">قلّل جدًا:</p>
                <ul className="space-y-1.5 text-foreground/80">
                  {['الموبايل', 'السوشيال ميديا', 'النقاشات', 'الفيديوهات'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-destructive">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ DHIKR COUNTERS ============ */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...fadeUp}>
          <div className="text-center mb-12">
            <h2 className="arafah-heading text-4xl mb-3">الأذكار المستحبة</h2>
            <p className="text-muted-foreground text-lg">
              اضغط على الزر لتعديل العداد وتتبع أذكارك
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
        >
          {dhikrs.map((dhikr) => (
            <motion.div
              key={dhikr.counterKey}
              variants={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
              }}
            >
              <DhikrCounter
                title={dhikr.title}
                description={dhikr.description}
                target={dhikr.target}
                icon={dhikr.icon}
                counterKey={dhikr.counterKey}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="container">
        <div className="arafah-divider" />
      </div>

      {/* ============ SUPPLICATIONS ============ */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...fadeUp}>
          <div className="text-center mb-12">
            <h2 className="arafah-heading text-4xl mb-3">أفضل الأدعية</h2>
            <p className="text-muted-foreground text-lg">
              من أفضل الأدعية المستحبة في يوم عرفة
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
        >
          {supplications.map((supplication, index) => (
            <motion.div
              key={index}
              className="arafah-card p-6 flex flex-col gap-4"
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
              }}
            >
              <div className="flex items-start gap-3">
                <div className="text-accent flex-shrink-0 mt-0.5">{supplication.icon}</div>
                <h3 className="arafah-heading text-lg">{supplication.title}</h3>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-foreground/80 leading-relaxed italic text-center">
                  {supplication.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="container">
        <div className="arafah-divider" />
      </div>

      {/* ============ TIPS ============ */}
      <section className="container pb-16 md:pb-24">
        <motion.div {...fadeUp}>
          <div className="text-center mb-12">
            <h2 className="arafah-heading text-4xl mb-3">نصائح مهمة</h2>
            <p className="text-muted-foreground text-lg">
              إرشادات للاستفادة القصوى من هذا اليوم العظيم
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-60px' }}
        >
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              className="arafah-card p-6"
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
              }}
            >
              <div className="flex items-start gap-3">
                <div className="text-accent flex-shrink-0 mt-0.5">{tip.icon}</div>
                <div>
                  <h3 className="arafah-heading text-lg mb-1">{tip.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border">
        <div className="container py-12 text-center">
          <p className="text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
            لا تنسونا من دعائكم في هذا اليوم العظيم، ونسأل الله أن يتقبل منا ومنكم
            صالح الأعمال ويجعلنا من عتقاء النار في يوم عرفة.
          </p>
          <p className="text-muted-foreground italic font-[Cormorant_Garamond]">
            اللهم اجعلنا ممن استجاب دعاءهم وغفر ذنوبهم في هذا اليوم العظيم
          </p>
          <div className="mt-8 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground/60">
              Created with ❤️ by Muhammad Ibrahim. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
