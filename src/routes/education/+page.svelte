<script lang="ts">
  import { educationTopics } from '$lib/data/education';
  import { Bone, Activity, Replace, Stethoscope, Shield, ArrowRight } from 'lucide-svelte';

  const iconMap: Record<string, any> = { Bone, Activity, Replace, Stethoscope, Shield };
</script>

<svelte:head>
  <title>Patient Education | Dr. William McLaughlin</title>
</svelte:head>

<section class="pt-20 pb-12">
  <div class="max-w-4xl mx-auto px-6">
    <div class="fade-in-up">
      <p class="text-teal-400 font-semibold text-sm tracking-wider uppercase mb-3">Education</p>
      <h1 class="text-4xl sm:text-5xl font-extrabold font-heading text-slate-100 mb-4">
        Patient <span class="text-gradient">Education</span>
      </h1>
      <div class="divider-teal w-16 mb-6"></div>
      <p class="text-slate-300 text-lg leading-relaxed max-w-2xl">
        Understanding your condition is an important part of your treatment journey.
        Explore the topics below to learn more about common orthopedic conditions
        and surgical procedures.
      </p>
    </div>
  </div>
</section>

<section class="py-12">
  <div class="max-w-4xl mx-auto px-6">
    <div class="edu-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
      {#each educationTopics as topic, i}
        {@const Icon = iconMap[topic.icon]}
        <a
          href="/education/{topic.slug}"
          class="edu-card glass-card rounded-2xl p-6 group hover:border-teal-500/30 transition-all duration-300 flex flex-col fade-in-up"
          style="animation-delay: {0.1 + i * 0.08}s"
        >
          <div class="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5 group-hover:bg-teal-500/20 transition-colors duration-300">
            {#if Icon}<Icon size={28} class="text-teal-400" />{/if}
          </div>
          <h3 class="text-slate-100 font-bold text-lg mb-2 group-hover:text-teal-300 transition-colors duration-300">{topic.shortTitle}</h3>
          <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{topic.description}</p>
          <div class="flex items-center gap-1 text-teal-400 text-sm font-medium group-hover:gap-2 transition-all duration-300">
            <span>Learn more</span>
            <ArrowRight size={16} />
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
