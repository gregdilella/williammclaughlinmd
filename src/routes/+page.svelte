<script lang="ts">
  import { bookingUrl, phoneNumber } from '$lib/data/navigation';
  import { Phone, CalendarPlus, Award, BookOpen, Users, Dumbbell, ChevronRight } from 'lucide-svelte';

  // Intro video transition phases:
  //   'playing'    → video is on top, playing
  //   'fade-black' → video fades out (1s), revealing solid black beneath it
  //   'hold-black' → solid black visible for 0.25s
  //   'fade-in'    → black fades out (0.5s), revealing the headshot beneath it
  //   'done'       → headshot fully visible
  let phase: 'playing' | 'fade-black' | 'hold-black' | 'fade-in' | 'done' = $state('playing');

  // Called when the video finishes — kicks off the fade-to-black sequence
  function handleVideoEnd() {
    // Phase 1: fade video out to reveal the black layer (1 second)
    phase = 'fade-black';

    setTimeout(() => {
      // Phase 2: hold on black (0.25 seconds)
      phase = 'hold-black';

      setTimeout(() => {
        // Phase 3: fade black out to reveal the headshot (0.5 seconds)
        phase = 'fade-in';

        setTimeout(() => {
          // All done — clean up
          phase = 'done';
        }, 500);
      }, 250); // hold black for 0.25 seconds
    }, 1000); // matches the 1s video fade-out duration
  }


  // Credentials data
  const credentials = [
    { icon: Award, label: 'Yale University', sub: 'Chief Resident' },
    { icon: BookOpen, label: '40+ Publications', sub: 'Peer-Reviewed' },
    { icon: Users, label: 'Team Physician', sub: 'STL Blues & CITY SC' },
    { icon: Dumbbell, label: 'NCAA Athlete', sub: 'Ice Hockey' },
    { icon: Award, label: 'AOA Honor Society', sub: 'Top 10% of Class' }
  ];
</script>

<svelte:head>
  <title>Dr. William McLaughlin, MD | Sports Medicine & Orthopedic Surgery</title>
</svelte:head>

<!-- ============================================
     HERO SECTION
     ============================================ -->
<section class="relative min-h-[90vh] flex items-center overflow-hidden">
  <!-- Background gradients -->
  <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"></div>
  <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/5 to-transparent"></div>
  <div class="absolute top-20 left-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl"></div>

  <div class="relative max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <!-- Text Content -->
    <div class="order-2 lg:order-1">
      <div class="hero-title fade-in-up">
        <p class="text-teal-400 font-semibold text-sm tracking-wider uppercase mb-4">
          Advanced Bone &amp; Joint
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-100 leading-tight mb-6">
          Specializing in
          <span class="text-gradient">Sports Medicine</span>,
          Orthopedic Surgery &amp; Joint Replacement
        </h1>
      </div>

      <p class="hero-subtitle fade-in-up text-slate-400 text-lg leading-relaxed mb-8 max-w-xl" style="animation-delay: 0.15s">
        Board-Eligible and Fellowship-Trained Sports Medicine Orthopedic Surgeon
        in St.&nbsp;Peters, O'Fallon, and Wentzville, MO
      </p>

      <div class="hero-cta fade-in-up flex flex-wrap gap-4" style="animation-delay: 0.3s">
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm
                 transition-all duration-300 teal-glow hover:scale-105"
        >
          <CalendarPlus size={18} />
          Request Appointment
        </a>
        <a
          href="tel:6362419807"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                 border border-slate-700 hover:border-teal-500/50 text-slate-300
                 hover:text-teal-400 font-medium text-sm transition-all duration-300"
        >
          <Phone size={18} />
          {phoneNumber}
        </a>
      </div>
    </div>

    <!-- Hero Image / Intro Video -->
    <div class="order-1 lg:order-2 flex justify-center">
      <div class="hero-image fade-in-up relative" style="animation-delay: 0.1s">
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 blur-xl scale-105"></div>
        <div class="image-card relative w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-3xl">
          <!-- Layer 1 (bottom): Headshot — always fully visible, just covered by layers above -->
          <img
            src="/images/headshot.png"
            alt="Dr. William McLaughlin - Orthopedic Surgeon"
            class="rounded-3xl"
            loading="eager"
          />

          <!-- Layer 2 (middle): Black overlay — covers the image, fades out to reveal it -->
          <div
            class="absolute inset-0 rounded-3xl bg-black pointer-events-none"
            style="transition: opacity 0.5s ease; opacity: {phase === 'fade-in' || phase === 'done' ? 0 : 1};"
          ></div>

          <!-- Layer 3 (top): Video — plays on top of everything, fades out to reveal black -->
          <!-- svelte-ignore a11y_media_has_caption -->
          <video
            autoplay
            muted
            playsinline
            onended={handleVideoEnd}
            class="absolute inset-0 w-full h-full object-cover rounded-3xl"
            style="transition: opacity 1s ease; opacity: {phase === 'playing' ? 1 : 0}; pointer-events: {phase === 'playing' ? 'auto' : 'none'};"
          >
            <source src="/images/hf_20260210_024649_d7f88677-4047-4c7d-9e99-2757f12d901a.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================
     CREDENTIALS STRIP
     ============================================ -->
<section class="credentials-section py-12 border-y border-slate-800/50" style="background: #131c31;">
  <div class="max-w-6xl mx-auto px-6">
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {#each credentials as cred, i}
        <div
          class="credential-item fade-in-up flex flex-col items-center text-center p-4 rounded-2xl
                 hover:bg-slate-800/50 transition-all duration-300 group"
          style="animation-delay: {0.1 + i * 0.06}s"
        >
          <div class="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-3
                      group-hover:bg-teal-500/20 transition-colors duration-300">
            <cred.icon size={24} class="text-teal-400" />
          </div>
          <p class="text-slate-200 text-sm font-semibold">{cred.label}</p>
          <p class="text-slate-500 text-xs mt-1">{cred.sub}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- ============================================
     BIO SECTIONS
     ============================================ -->
<section class="py-20">
  <div class="max-w-4xl mx-auto px-6 space-y-12">
    <div class="bio-card fade-in-up">
      <h2 class="text-3xl font-bold font-heading text-slate-100 mb-6">
        Meet <span class="text-gradient">Dr. McLaughlin</span>
      </h2>
      <div class="divider-teal w-16 mb-6"></div>
      <p class="text-slate-300 text-lg leading-relaxed">
        Dr. William McLaughlin is a fellowship-trained sports medicine orthopedic surgeon who specializes
        in complex and minimally invasive surgical interventions. He is dedicated to treating athletic
        injuries of the musculoskeletal system, with a special focus on the shoulder, elbow, hip, knee,
        foot, and ankle. Dr. McLaughlin also specializes in hip, knee, and shoulder joint replacement.
      </p>
    </div>

    <div class="bio-card fade-in-up grid grid-cols-1 md:grid-cols-5 gap-8 items-center" style="animation-delay: 0.1s">
      <div class="md:col-span-3">
        <h3 class="text-xl font-bold text-slate-100 mb-4">From Athlete to Surgeon</h3>
        <p class="text-slate-400 leading-relaxed">
          Before attending medical school, Dr. McLaughlin played NCAA ice hockey and was an
          All-Academic athlete. He then attended Geisinger Commonwealth School of Medicine and was
          inducted into the Alpha Omega Alpha Honor Medical Society, which represents the top 10%
          of his graduating class.
        </p>
      </div>
      <div class="md:col-span-2">
        <div class="rounded-2xl overflow-hidden"
             style="transition: transform 0.4s ease, box-shadow 0.4s ease;"
             onmouseenter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(20,184,166,0.15)'; }}
             onmouseleave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <img src="/images/hockey-family.png" alt="Dr. McLaughlin with family on the ice" loading="lazy" class="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </div>

    <div class="bio-card fade-in-up glass-card rounded-2xl p-8" style="animation-delay: 0.2s">
      <h3 class="text-xl font-bold text-slate-100 mb-4">Elite Training</h3>
      <p class="text-slate-400 leading-relaxed mb-4">
        He went on to complete his orthopedic surgical residency at the prestigious Yale University,
        where he was selected as Chief Resident in his final year of training. Dr. McLaughlin then
        completed advanced fellowship training in Sports Medicine at Washington University in St. Louis,
        where he served as the Assistant Team Physician for the St. Louis Blues, St. Louis CITY SC,
        St. Louis Battlehawks, and the Washington University athletic teams.
      </p>
      <p class="text-slate-400 leading-relaxed">
        Dr. McLaughlin's research portfolio includes authoring more than 40 peer-reviewed publications.
        He has presented at national and international conferences, including at the American Orthopaedic
        Society for Sports Medicine (AOSSM) and the AOSSM Specialty Day.
      </p>
    </div>

    <div class="bio-card fade-in-up grid grid-cols-1 md:grid-cols-5 gap-8 items-center" style="animation-delay: 0.3s">
      <div class="md:col-span-2 order-2 md:order-1">
        <div class="rounded-2xl overflow-hidden"
             style="transition: transform 0.4s ease, box-shadow 0.4s ease;"
             onmouseenter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(20,184,166,0.15)'; }}
             onmouseleave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <img src="/images/surgeon-cartoon.png" alt="Dr. McLaughlin surgeon illustration" loading="lazy" class="w-full h-auto rounded-2xl" />
        </div>
      </div>
      <div class="md:col-span-3 order-1 md:order-2">
        <h3 class="text-xl font-bold text-slate-100 mb-4">Philosophy of Care</h3>
        <p class="text-slate-400 leading-relaxed mb-4">
          Dr. McLaughlin is passionate about helping patients of all ages and athletic levels. He
          believes in offering compassionate care and state-of-the-art solutions to his patients with
          sports injuries and arthritic conditions of the hip, knee, and shoulder joints.
        </p>
        <blockquote class="border-l-2 border-teal-500 pl-4 my-6">
          <p class="text-slate-200 italic text-lg leading-relaxed">
            "Most people think of injuries as setbacks and something they must recover from or deal
            with. I believe these are opportunities to turn adversity into an advantage and will guide
            you along your journey so that you come off of an injury or loss better than when you
            went down."
          </p>
        </blockquote>
      </div>
    </div>
  </div>
</section>

<!-- ============================================
     CTA SECTION
     ============================================ -->
<section class="cta-section fade-in-up py-20" style="animation-delay: 0.4s">
  <div class="max-w-4xl mx-auto px-6">
    <div class="glass-card rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div class="relative">
        <h2 class="text-3xl sm:text-4xl font-bold font-heading text-slate-100 mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-slate-400 text-lg max-w-xl mx-auto mb-8">
          To schedule your appointment with Dr. William McLaughlin at Advanced Bone &amp; Joint,
          call us or request an appointment online.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
                   bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm
                   transition-all duration-300 teal-glow hover:scale-105"
          >
            <CalendarPlus size={18} />
            Request Appointment
            <ChevronRight size={16} />
          </a>
          <a
            href="tel:6362419807"
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
                   border border-slate-600 hover:border-teal-500/50 text-slate-300
                   hover:text-teal-400 font-medium text-sm transition-all duration-300"
          >
            <Phone size={18} />
            Call {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
