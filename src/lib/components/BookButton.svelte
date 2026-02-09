<script lang="ts">
  import { bookingUrl } from '$lib/data/navigation';
  import { CalendarPlus } from 'lucide-svelte';
</script>

<!-- Fixed top-right Book Now button -->
<a
  href={bookingUrl}
  target="_blank"
  rel="noopener noreferrer"
  class="fixed top-4 right-4 z-50 lg:top-5 lg:right-6
         inline-flex items-center gap-2 px-4 py-2.5 rounded-full
         bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm
         transition-all duration-300 teal-glow hover:scale-105
         shadow-lg shadow-teal-500/20"
>
  <CalendarPlus size={18} strokeWidth={2} />
  <span class="hidden sm:inline">Book Now</span>
</a>
