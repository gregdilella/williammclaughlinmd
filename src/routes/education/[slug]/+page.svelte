<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowLeft, BookOpen } from 'lucide-svelte';

  let { data } = $props();
  // Derive topic from data (reactive)
  let topic = $derived(data.topic);

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

    gsap.from('.edu-detail-header', { opacity: 0, y: 30, duration: 0.7, ease: 'power2.out', delay: 0.1 });

    ScrollTrigger.batch('.edu-section', {
      onEnter: (batch: any) =>
        gsap.from(batch, { opacity: 0, y: 25, duration: 0.5, stagger: 0.1, ease: 'power2.out' }),
      start: 'top 85%',
      once: true
    });
  });
</script>

<svelte:head>
  <title>{topic.title} | Dr. William McLaughlin</title>
</svelte:head>

<section class="pt-20 pb-8">
  <div class="max-w-3xl mx-auto px-6">
    <a href="/education" class="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 text-sm font-medium transition-colors duration-200 mb-8">
      <ArrowLeft size={16} /> Back to Education
    </a>
    <div class="edu-detail-header">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
          <BookOpen size={20} class="text-teal-400" />
        </div>
        <span class="text-teal-400 font-semibold text-sm tracking-wider uppercase">Patient Education</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold font-heading text-slate-100 mb-4">{topic.title}</h1>
      <div class="divider-teal w-16 mb-4"></div>
      <p class="text-slate-400 text-lg leading-relaxed">{topic.description}</p>
    </div>
  </div>
</section>

<section class="py-8">
  <div class="edu-sections-wrap max-w-3xl mx-auto px-6 space-y-8">
    {#each topic.sections as section, i}
      <div class="edu-section glass-card rounded-2xl p-8">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 text-sm font-bold">{i + 1}</div>
          <h2 class="text-xl font-bold text-slate-100">{section.heading}</h2>
        </div>
        <p class="text-slate-300 leading-relaxed">{section.content}</p>
      </div>
    {/each}
  </div>
</section>

<section class="py-12">
  <div class="max-w-3xl mx-auto px-6">
    <div class="flex items-center justify-between">
      <a href="/education" class="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 text-sm font-medium transition-colors duration-200">
        <ArrowLeft size={16} /> All Topics
      </a>
      <p class="text-slate-600 text-xs">This information is for educational purposes and does not replace professional medical advice.</p>
    </div>
  </div>
</section>
