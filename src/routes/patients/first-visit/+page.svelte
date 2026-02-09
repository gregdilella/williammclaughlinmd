<script lang="ts">
  import { onMount } from 'svelte';
  import { bookingUrl, phoneNumber } from '$lib/data/navigation';
  import {
    Heart,
    MessageCircle,
    Handshake,
    Sparkles,
    Clock,
    CreditCard,
    FileText,
    Pill,
    Image,
    ClipboardCheck,
    CalendarPlus,
    Phone,
    Check
  } from 'lucide-svelte';

  onMount(async () => {
    await new Promise<void>((resolve) => {
      const check = () => {
        if ((window as any).__gsap) resolve();
        else setTimeout(check, 50);
      };
      check();
    });

    const gsap = (window as any).__gsap;
    const ScrollTrigger = (window as any).__ScrollTrigger;

    // Header
    gsap.from('.patients-header', { opacity: 0, y: 30, duration: 0.7, ease: 'power2.out', delay: 0.1 });

    // Checklist items
    ScrollTrigger.batch('.checklist-item', {
      onEnter: (batch: any) =>
        gsap.from(batch, { opacity: 0, x: -20, duration: 0.4, stagger: 0.08, ease: 'power2.out' }),
      start: 'top 85%',
      once: true
    });

    // Approach cards
    ScrollTrigger.batch('.approach-card', {
      onEnter: (batch: any) =>
        gsap.from(batch, { opacity: 0, y: 25, duration: 0.4, stagger: 0.08, ease: 'power2.out' }),
      start: 'top 85%',
      once: true
    });
  });

  const checklist = [
    { icon: CreditCard, title: "Driver's License or Valid Photo ID", description: 'A government-issued photo ID is required for check-in.' },
    { icon: FileText, title: 'Health Insurance Card', description: 'Please bring your current insurance card so we can verify coverage.' },
    { icon: Pill, title: 'Current List of Medications', description: 'Include all prescriptions, over-the-counter medications, and supplements.' },
    { icon: Image, title: 'Prior Imaging Studies', description: 'X-rays, MRIs, CT scans — bring discs if available so we can personally review them.' },
    { icon: ClipboardCheck, title: 'Radiology Reports', description: 'Written reports from your imaging studies are very helpful for review.' },
    { icon: FileText, title: 'Prior Operative Reports & Clinic Notes', description: 'Any relevant surgical history or clinical documentation from previous providers.' }
  ];

  const approach = [
    { icon: Heart, title: 'Compassionate, Patient-Centered Care', description: 'We treat every patient with respect, empathy, and understanding — just as we would care for a member of our own family.' },
    { icon: MessageCircle, title: 'Clear and Open Communication', description: 'We believe in honest, transparent discussions that help patients fully understand their condition, explore options, and make informed decisions.' },
    { icon: Handshake, title: 'Collaborative Treatment Planning', description: 'We partner with patients to develop personalized treatment plans that reflect their goals, priorities, and lifestyle.' },
    { icon: Sparkles, title: 'Commitment to Excellence & Innovation', description: 'We utilize the latest techniques, evidence-based practices, and advanced technology to deliver the highest quality outcomes.' },
    { icon: Clock, title: 'Long-Term Partnership in Health', description: 'Our care extends beyond a single visit — we aim to build lasting relationships and support lifelong musculoskeletal health.' }
  ];
</script>

<svelte:head>
  <title>Your First Visit | Dr. William McLaughlin</title>
</svelte:head>

<!-- HEADER -->
<section class="pt-20 pb-12">
  <div class="max-w-4xl mx-auto px-6">
    <div class="patients-header">
      <p class="text-teal-400 font-semibold text-sm tracking-wider uppercase mb-3">Patients</p>
      <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-100 mb-4">
        Your First <span class="text-gradient">Visit</span>
      </h1>
      <div class="divider-teal w-16 mb-6"></div>
      <p class="text-slate-300 text-lg leading-relaxed max-w-2xl">
        Thank you for considering our practice for your care! We strive to make each visit
        a positive experience by addressing your concerns, answering your questions, and working
        together on a treatment plan that fits your needs.
      </p>
      <p class="text-slate-400 mt-4 leading-relaxed max-w-2xl">
        To make the most of your appointment, we encourage you to think about the goals you
        have for your visit. This will help us provide guidance that is personalized to your
        expectations.
      </p>
    </div>
  </div>
</section>

<!-- WHAT TO BRING -->
<section class="checklist-section py-12">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="text-2xl font-bold font-heading text-slate-100 mb-8">What to Bring to Your Visit</h2>
    <div class="space-y-4">
      {#each checklist as item}
        <div class="checklist-item glass-card rounded-xl p-5 flex items-start gap-4 hover:border-teal-500/30 transition-all duration-300 group">
          <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors duration-300">
            <item.icon size={20} class="text-teal-400" />
          </div>
          <div class="flex-1">
            <h3 class="text-slate-100 font-semibold text-sm mb-1">{item.title}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{item.description}</p>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full border border-slate-600 group-hover:border-teal-500 group-hover:bg-teal-500/20 flex items-center justify-center transition-all duration-300">
            <Check size={14} class="text-transparent group-hover:text-teal-400 transition-colors duration-300" />
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- APPROACH TO CARE -->
<section class="approach-section py-16">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="text-2xl font-bold font-heading text-slate-100 mb-3">Our Approach to Care</h2>
    <p class="text-slate-400 mb-10 max-w-xl">We are committed to providing an exceptional patient experience at every step.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {#each approach as card}
        <div class="approach-card glass-card rounded-2xl p-6 hover:border-teal-500/30 transition-all duration-300 group">
          <div class="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors duration-300">
            <card.icon size={24} class="text-teal-400" />
          </div>
          <h3 class="text-slate-100 font-semibold mb-2">{card.title}</h3>
          <p class="text-slate-400 text-sm leading-relaxed">{card.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-16">
  <div class="max-w-4xl mx-auto px-6">
    <div class="glass-card rounded-3xl p-10 text-center relative overflow-hidden">
      <div class="absolute top-0 right-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div class="relative">
        <h2 class="text-2xl font-bold font-heading text-slate-100 mb-4">Ready to Schedule?</h2>
        <p class="text-slate-400 mb-8 max-w-lg mx-auto">Book your appointment with Dr. McLaughlin online or give us a call.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all duration-300 teal-glow hover:scale-105">
            <CalendarPlus size={18} /> Request Appointment
          </a>
          <a href="tel:6362419807"
             class="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-600 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 font-medium text-sm transition-all duration-300">
            <Phone size={18} /> Call {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
