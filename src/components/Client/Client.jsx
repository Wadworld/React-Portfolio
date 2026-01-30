import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Layers, Users, Clock, Star } from "lucide-react";
import { useEffect, useRef } from "react";

/* =====================
   Animated Counter
===================== */
function Counter({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 1.8, ease: "easeOut" });
    }
  }, [isInView, value, motionValue]);

  return (
    <motion.span ref={ref} className="text-4xl font-bold">
      {rounded}
    </motion.span>
  );
}

/* =====================
   Stat Card
===================== */
function ClientCard({ icon: Icon, value, suffix, label }) {
  return (
    <div className="bg-slate-900/80 backdrop-blur border border-white/20 rounded-2xl p-6 text-center shadow-lg">
      <Icon className="mx-auto mb-4 text-white" size={32} />

      <div className="flex justify-center items-baseline">
        <Counter value={value} />
        {suffix && <span className="text-4xl font-bold">{suffix}</span>}
      </div>

      <p className="mt-2 text-sm text-white/60">{label}</p>
    </div>
  );
}

/* =====================
   Client Stats Section
===================== */
function ClientStats() {
  const stats = [
    {
      icon: Layers,
      value: 25,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: 10,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: Clock,
      value: 2,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: Star ,
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <section className="relative py-12 px-1">
      {/* dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <ClientCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
export default ClientStats
