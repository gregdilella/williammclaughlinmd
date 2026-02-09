<script lang="ts">
  import { locations, phoneNumber, bookingUrl } from '$lib/data/navigation';
  import { MapPin, Phone, Calendar, Clock } from 'lucide-svelte';
</script>

<footer class="bg-slate-950 border-t border-slate-800/50 mt-20">
  <div class="max-w-6xl mx-auto px-6 py-16">
    <!-- Top Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <!-- Brand Column -->
      <div class="lg:col-span-1">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
            <span class="text-teal-400 font-bold text-lg font-heading">WM</span>
          </div>
          <div>
            <h3 class="text-slate-100 font-semibold text-sm">Dr. William McLaughlin</h3>
            <p class="text-slate-500 text-xs">Orthopedic Surgery</p>
          </div>
        </div>
        <p class="text-slate-400 text-sm leading-relaxed">
          Board-Eligible, Fellowship-Trained Sports Medicine Orthopedic Surgeon
        </p>

        <!-- Phone -->
        <a
          href="tel:6362419807"
          class="flex items-center gap-2 mt-4 text-teal-400 hover:text-teal-300 transition-colors"
        >
          <Phone size={16} />
          <span class="text-sm font-medium">{phoneNumber}</span>
        </a>
      </div>

      <!-- Locations -->
      {#each locations as location}
        <div>
          <div class="flex items-center gap-2 mb-3">
            <MapPin size={16} class="text-teal-500" />
            <h4 class="text-slate-200 font-semibold text-sm">{location.name}</h4>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed">
            {location.address}<br />
            {#if location.detail}
              {location.detail}<br />
            {/if}
            {location.city}
          </p>
        </div>
      {/each}
    </div>

    <!-- CTA Bar -->
    <div class="glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
      <div class="flex items-center gap-3">
        <Calendar size={20} class="text-teal-400" />
        <p class="text-slate-200 text-sm font-medium">
          Ready to schedule? Book your appointment online or call us.
        </p>
      </div>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl
               bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm
               transition-all duration-200 teal-glow-hover whitespace-nowrap"
      >
        <Clock size={16} />
        Request Appointment
      </a>
    </div>

    <!-- Bottom -->
    <div class="border-t border-slate-800/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} Advanced Bone &amp; Joint &mdash; Dr. William McLaughlin, MD.
        All rights reserved.
      </p>
      <p class="text-slate-600 text-xs">
        Sports Medicine &bull; Orthopedic Surgery &bull; Joint Replacement
      </p>
    </div>
  </div>
</footer>
