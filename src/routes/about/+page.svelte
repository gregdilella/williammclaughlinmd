<script lang="ts">
  import { onMount } from 'svelte';
  import { Award, GraduationCap, Stethoscope, BookOpen, Trophy, Heart } from 'lucide-svelte';

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

    // Header entrance
    gsap.from('.about-header', { opacity: 0, y: 30, duration: 0.7, ease: 'power2.out', delay: 0.1 });
    gsap.from('.about-profile-img', { opacity: 0, scale: 0.92, duration: 0.8, ease: 'power2.out', delay: 0.2 });

    // Timeline items
    gsap.utils.toArray('.timeline-item').forEach((item: any, i: number) => {
      gsap.from(item, {
        opacity: 0,
        x: i % 2 === 0 ? -30 : 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: item, start: 'top 85%', once: true }
      });
    });

    // Quote
    gsap.from('.philosophy-quote', {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.philosophy-quote', start: 'top 85%', once: true }
    });

    // Gallery
    ScrollTrigger.batch('.gallery-img', {
      onEnter: (batch: any) =>
        gsap.from(batch, { opacity: 0, y: 30, scale: 0.95, duration: 0.5, stagger: 0.1, ease: 'power2.out' }),
      start: 'top 85%',
      once: true
    });
  });

  const timeline = [
    {
      icon: Trophy,
      period: 'NCAA Athlete',
      title: 'College Hockey Player',
      description:
        'Before pursuing medicine, Dr. McLaughlin competed as an NCAA ice hockey player and earned All-Academic athlete honors. His experience as a competitive athlete gave him a unique understanding of sports injuries from both sides — as a player who has experienced them, and as a surgeon who now treats them.',
      image: '/images/college-hockey.png',
      imageAlt: 'Dr. McLaughlin playing NCAA hockey'
    },
    {
      icon: GraduationCap,
      period: 'Medical School',
      title: 'Geisinger Commonwealth School of Medicine',
      description:
        'Dr. McLaughlin was inducted into the Alpha Omega Alpha (AOA) Honor Medical Society, recognizing him among the top 10% of his graduating class. This prestigious distinction reflects his dedication to academic excellence and the medical profession.',
      image: null,
      imageAlt: ''
    },
    {
      icon: Award,
      period: 'Residency',
      title: 'Yale University — Chief Resident',
      description:
        'He completed his orthopedic surgical residency at the prestigious Yale University, where his peers and faculty selected him as Chief Resident in his final year of training — a testament to his surgical skill, leadership, and clinical excellence.',
      image: '/images/surgery-action.png',
      imageAlt: 'Dr. McLaughlin performing orthopedic surgery'
    },
    {
      icon: Stethoscope,
      period: 'Fellowship',
      title: 'Washington University in St. Louis — Sports Medicine',
      description:
        'Dr. McLaughlin completed advanced fellowship training in Sports Medicine at Washington University in St. Louis, where he served as the Assistant Team Physician for the St. Louis Blues (NHL), St. Louis CITY SC (MLS), St. Louis Battlehawks (UFL), and the Washington University athletic teams.',
      image: '/images/hockey-duo.png',
      imageAlt: 'Dr. McLaughlin in hockey gear'
    },
    {
      icon: BookOpen,
      period: 'Research',
      title: '40+ Peer-Reviewed Publications',
      description:
        "Dr. McLaughlin's research portfolio includes authoring more than 40 peer-reviewed publications. He has presented at national and international conferences, including at the American Orthopaedic Society for Sports Medicine (AOSSM) and the AOSSM Specialty Day.",
      image: null,
      imageAlt: ''
    }
  ];
</script>

<svelte:head>
  <title>About Dr. McLaughlin | Fellowship-Trained Sports Medicine Surgeon</title>
</svelte:head>

<!-- HEADER -->
<section class="pt-20 pb-12">
  <div class="max-w-6xl mx-auto px-6">
    <div class="about-header grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
      <div class="lg:col-span-1 flex justify-center">
        <div class="about-profile-img relative">
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 blur-xl scale-110"></div>
          <div class="image-card relative w-64 sm:w-72 aspect-[3/4] rounded-3xl">
            <img src="/images/headshot.png" alt="Dr. William McLaughlin" class="rounded-3xl" loading="eager" />
          </div>
        </div>
      </div>

      <div class="lg:col-span-2">
        <p class="text-teal-400 font-semibold text-sm tracking-wider uppercase mb-3">About the Doctor</p>
        <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-100 mb-4">
          William McLaughlin, <span class="text-gradient">MD</span>
        </h1>
        <p class="text-slate-400 text-lg mb-3">Board-Eligible, Fellowship-Trained Sports Medicine Orthopedic Surgeon</p>
        <div class="divider-teal w-20 mb-6"></div>
        <p class="text-slate-300 leading-relaxed">
          Dr. McLaughlin is a fellowship-trained sports medicine orthopedic surgeon who specializes in
          complex and minimally invasive surgical interventions. He is dedicated to treating athletic
          injuries of the musculoskeletal system, with a special focus on the shoulder, elbow, hip,
          knee, foot, and ankle. He also specializes in hip, knee, and shoulder joint replacement.
        </p>
        <div class="flex flex-wrap gap-6 mt-8">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
              <Award size={16} class="text-teal-400" />
            </div>
            <div>
              <p class="text-slate-200 text-sm font-semibold">Yale</p>
              <p class="text-slate-500 text-xs">Chief Resident</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
              <BookOpen size={16} class="text-teal-400" />
            </div>
            <div>
              <p class="text-slate-200 text-sm font-semibold">40+</p>
              <p class="text-slate-500 text-xs">Publications</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
              <Trophy size={16} class="text-teal-400" />
            </div>
            <div>
              <p class="text-slate-200 text-sm font-semibold">NCAA</p>
              <p class="text-slate-500 text-xs">Hockey Athlete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TIMELINE -->
<section class="py-16">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="text-3xl font-bold font-heading text-slate-100 text-center mb-4">The Journey</h2>
    <p class="text-slate-400 text-center mb-16 max-w-xl mx-auto">
      From NCAA athlete to fellowship-trained orthopedic surgeon — Dr. McLaughlin's path
      has been driven by passion, discipline, and a commitment to excellence.
    </p>

    <div class="relative">
      <div class="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-slate-700/50 -translate-x-1/2"></div>
      <div class="space-y-16">
        {#each timeline as item, i}
          <div class="timeline-item relative grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900 z-10 top-2"></div>
            <div class="pl-20 lg:pl-0 {i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'}">
              <div class="flex items-center gap-2 mb-2 {i % 2 === 0 ? 'lg:justify-end' : ''}">
                <div class="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <item.icon size={16} class="text-teal-400" />
                </div>
                <span class="text-teal-400 text-xs font-semibold tracking-wider uppercase">{item.period}</span>
              </div>
              <h3 class="text-xl font-bold text-slate-100 mb-3">{item.title}</h3>
              <p class="text-slate-400 leading-relaxed">{item.description}</p>
              {#if item.image}
                <div class="mt-6">
                  <div class="max-w-xs rounded-2xl {i % 2 === 0 ? 'lg:ml-auto' : ''}"
                       role="img" aria-label={item.imageAlt}
                       style="height: 400px; background-image: url({item.image}); background-size: cover; background-position: top center; transition: transform 0.4s ease, box-shadow 0.4s ease;"
                       onmouseenter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(20,184,166,0.15)'; }}
                       onmouseleave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                  </div>
                </div>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- PHILOSOPHY -->
<section class="py-16">
  <div class="max-w-4xl mx-auto px-6">
    <div class="philosophy-quote glass-card rounded-3xl p-10 sm:p-14 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div class="relative">
        <Heart size={32} class="text-teal-400 mb-6" />
        <h2 class="text-2xl sm:text-3xl font-bold font-heading text-slate-100 mb-6">Philosophy of Care</h2>
        <p class="text-slate-300 text-lg leading-relaxed mb-6">
          Dr. McLaughlin is passionate about helping patients of all ages and athletic levels. He
          believes in offering compassionate care and state-of-the-art solutions to his patients
          with sports injuries and arthritic conditions of the hip, knee, and shoulder joints.
        </p>
        <blockquote class="border-l-2 border-teal-500 pl-6">
          <p class="text-slate-200 italic text-xl leading-relaxed">
            "Most people think of injuries as setbacks and something they must recover from or deal
            with. I believe these are opportunities to turn adversity into an advantage and will guide
            you along your journey so that you come off of an injury or loss better than when you
            went down."
          </p>
          <cite class="block mt-4 text-teal-400 text-sm font-semibold not-italic">— Dr. William McLaughlin</cite>
        </blockquote>
      </div>
    </div>
  </div>
</section>

<!-- GALLERY -->
<section class="gallery-section py-16">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-2xl font-bold font-heading text-slate-100 text-center mb-10">On &amp; Off the Field</h2>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="gallery-img image-card aspect-[3/4] rounded-2xl overflow-hidden">
        <img src="/images/college-hockey.png" alt="NCAA hockey" loading="lazy" class="object-top" />
      </div>
      <div class="gallery-img image-card aspect-[3/4] rounded-2xl overflow-hidden">
        <img src="/images/hockey-family.png" alt="Dr. McLaughlin with family on ice" loading="lazy" class="object-top" />
      </div>
      <div class="gallery-img image-card aspect-[3/4] rounded-2xl overflow-hidden">
        <img src="/images/hockey-duo.png" alt="Hockey with friends" loading="lazy" class="object-top" />
      </div>
      <div class="gallery-img image-card aspect-[3/4] rounded-2xl overflow-hidden">
        <img src="/images/surgeon-cartoon.png" alt="Dr. McLaughlin illustration" loading="lazy" class="object-center" />
      </div>
    </div>
  </div>
</section>
