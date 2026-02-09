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
</script>

<!-- Mobile Bottom Tab Bar -->
<nav
  class="fixed bottom-0 left-0 right-0 z-50 lg:hidden
         bg-slate-950/90 backdrop-blur-xl border-t border-slate-800/50
         safe-area-bottom"
  aria-label="Mobile navigation"
>
  <div class="flex items-center justify-around px-2 py-2">
    {#each navItems as item}
      {@const isActive =
        item.href === '/'
          ? $page.url.pathname === '/'
          : $page.url.pathname.startsWith(item.href)}
      {@const Icon = iconMap[item.icon]}
      <a
        href={item.href}
        class="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl
               transition-all duration-200 min-w-[56px]
               {isActive
                 ? 'text-teal-400'
                 : 'text-slate-500 hover:text-slate-300'}"
        aria-current={isActive ? 'page' : undefined}
      >
        <div class="w-6 h-6">
          {#if Icon}
            <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
          {/if}
        </div>
        <span class="text-[10px] font-medium">{item.label}</span>
      </a>
    {/each}

    <!-- Book CTA in mobile nav -->
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl
             text-teal-400 min-w-[56px]"
    >
      <div class="w-6 h-6">
        <CalendarPlus size={24} strokeWidth={1.5} />
      </div>
      <span class="text-[10px] font-semibold">Book</span>
    </a>
  </div>
</nav>

<style>
  .safe-area-bottom {
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }
</style>
