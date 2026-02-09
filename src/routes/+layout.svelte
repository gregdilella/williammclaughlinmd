<script lang="ts">
  import '../app.css';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import MobileNav from '$lib/components/MobileNav.svelte';
  import BookButton from '$lib/components/BookButton.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { afterNavigate } from '$app/navigation';

  let { children } = $props();

  // Register GSAP plugins once on mount
  onMount(async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    // Make gsap available globally for child components
    (window as any).__gsap = gsap;
    (window as any).__ScrollTrigger = ScrollTrigger;
  });

  // Scroll to top on navigation
  afterNavigate(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
</script>

<svelte:head>
  <title>Dr. William McLaughlin, MD | Orthopedic Surgeon</title>
</svelte:head>

<div class="min-h-screen bg-slate-900 flex">
  <!-- Sidebar (desktop only) -->
  <Sidebar />

  <!-- Main Content Area -->
  <div class="flex-1 lg:ml-[72px] flex flex-col min-h-screen">
    <!-- Top-right Book button -->
    <BookButton />

    <!-- Page Content -->
    <main class="flex-1">
      {@render children()}
    </main>

    <!-- Footer -->
    <Footer />
  </div>

  <!-- Mobile Nav (bottom bar, below lg) -->
  <MobileNav />
</div>

<!-- Bottom padding for mobile nav -->
<div class="h-20 lg:hidden"></div>
