<script lang="ts">
  import { page } from '$app/stores';
  import { navItems, bookingUrl } from '$lib/data/navigation';
  import {
    Home,
    User,
    Heart,
    GraduationCap,
    CalendarPlus
  } from 'lucide-svelte';

  // Map icon names to components
  const iconMap: Record<string, any> = {
    Home,
    User,
    Heart,
    GraduationCap
  };

  // Track whether sidebar is expanded (on hover)
  let expanded = $state(false);
</script>

<!-- Desktop Sidebar - Instagram style -->
<aside
  class="fixed left-0 top-0 h-full z-50 hidden lg:flex flex-col
         bg-slate-950/80 backdrop-blur-xl border-r border-slate-800/50
         transition-all duration-300 ease-out"
  style="width: {expanded ? '240px' : '72px'}"
  onmouseenter={() => (expanded = true)}
  onmouseleave={() => (expanded = false)}
  role="navigation"
  aria-label="Main navigation"
>
  <!-- Logo / Brand -->
  <div class="flex items-center h-16 px-4 border-b border-slate-800/50">
    <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
      <span class="text-teal-400 font-bold text-lg font-heading">WM</span>
    </div>
    {#if expanded}
      <span
        class="ml-3 text-sm font-semibold text-slate-200 whitespace-nowrap overflow-hidden
               transition-opacity duration-200"
        style="opacity: {expanded ? 1 : 0}"
      >
        Dr. McLaughlin
      </span>
    {/if}
  </div>

  <!-- Nav Items -->
  <nav class="flex-1 flex flex-col gap-1 px-3 py-4">
    {#each navItems as item}
      {@const isActive =
        item.href === '/'
          ? $page.url.pathname === '/'
          : $page.url.pathname.startsWith(item.href)}
      {@const Icon = iconMap[item.icon]}
      <a
        href={item.href}
        class="group flex items-center gap-3 px-3 py-3 rounded-xl
               transition-all duration-200 relative
               {isActive
                 ? 'bg-slate-800 text-teal-400'
                 : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'}"
        aria-current={isActive ? 'page' : undefined}
      >
        <!-- Active indicator bar -->
        {#if isActive}
          <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-teal-400 rounded-r-full"></div>
        {/if}

        <div class="flex-shrink-0 w-6 h-6">
          {#if Icon}
            <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
          {/if}
        </div>

        {#if expanded}
          <span
            class="text-sm font-medium whitespace-nowrap overflow-hidden"
          >
            {item.label}
          </span>
        {/if}
      </a>
    {/each}
  </nav>

  <!-- Book Now CTA at bottom -->
  <div class="px-3 pb-6">
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-3 px-3 py-3 rounded-xl
             bg-teal-500/10 text-teal-400 hover:bg-teal-500/20
             transition-all duration-200 teal-glow-hover"
    >
      <div class="flex-shrink-0 w-6 h-6">
        <CalendarPlus size={24} strokeWidth={1.5} />
      </div>
      {#if expanded}
        <span class="text-sm font-semibold whitespace-nowrap">Book Now</span>
      {/if}
    </a>
  </div>
</aside>
