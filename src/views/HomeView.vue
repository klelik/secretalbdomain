<template>
  <div>
    <div class="bg-gray-100 py-2">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
        <div class="on-sale-badge">{{ content[lang].saleBadge }}</div>
        <div class="flex items-center">
          <button
            @click="setLang('en')"
            :class="[
              'px-3 py-1 text-sm rounded-md',
              lang === 'en' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-200',
            ]"
          >
            English
          </button>
          <button
            @click="setLang('al')"
            :class="[
              'ml-2 px-3 py-1 text-sm rounded-md',
              lang === 'al' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-200',
            ]"
          >
            Shqip
          </button>
        </div>
      </div>
    </div>

    <section class="py-16 bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-4">secretalbania.al</h1>
        <p class="text-xl text-gray-600">
          {{ content[lang].portfolioIntro }}
          <strong class="text-indigo-600">mysecretalbania.al</strong> &
          <strong class="text-indigo-600">mysecretalbania.com</strong>
        </p>
      </div>
    </section>

    <section class="py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto"
        >
          <div class="relative w-full lg:text-left text-center lg:w-2/4">
            <h2
              class="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0"
            >
              {{ content[lang].benefitsTitle }}
            </h2>
          </div>
          <div class="relative w-full lg:text-left text-center lg:w-2/4">
            <p class="text-lg font-normal text-gray-500 mb-5">
              {{ content[lang].benefitsSubtitle }}
            </p>
            <a
              href="#contact"
              class="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700"
              >{{ content[lang].offerLink }}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="#4F46E5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div
          class="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8"
        >
          <div
            v-for="benefit in content[lang].benefits"
            :key="benefit.title"
            tabindex="0"
            class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-96 xl:p-7 xl:w-1/4 hover:bg-indigo-600 focus:bg-indigo-600 active:bg-indigo-700"
          >
            <div
              class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 text-indigo-600 transition-colors duration-500 group-hover:text-white group-focus:text-white group-active:text-white"
              v-html="benefit.icon"
            ></div>

            <h4
              class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white group-focus:text-white group-active:text-white"
            >
              {{ benefit.title }}
            </h4>

            <p
              class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white group-focus:text-white group-active:text-white"
            >
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-24 bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-6">
          {{ content[lang].contactTitle }}
        </h2>
        <div
          class="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center hero"
          :style="{ '--hero-image-url': `url(${heroImageUrl})` }"
        >
          <p class="text-white mb-8">
            {{ content[lang].contactSubtitle }}
          </p>
          <a
            :href="mailtoLink"
            class="inline-block w-full rounded-lg bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white shadow-sm transition duration-150 hover:bg-indigo-700 sm:w-auto"
          >
            {{ content[lang].contactButton }}
          </a>
        </div>
      </div>
    </section>

    <footer class="py-9">
      <div class="container mx-auto px-6 text-center text-gray-500 text-sm">
        <p>
          &copy; {{ new Date().getFullYear() }} secretalbania.al.
          {{ content[lang].footerConfidential }}
        </p>
        <p class="mt-4 text-xs text-gray-600 max-w-3xl mx-auto">
          **{{ content[lang].footerLegal }}**
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, computed } from 'vue'
import heroImageUrl from '@/assets/albania-og.webp'
const lang = ref('al')

const pushDataLayer = (event: string, data: any = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    })
  }
}

console.log(
  '%cNotice:',
  'font-weight: bold; color: #4F46E5;',
  'This domain portfolio is for sale. This is a standard informational message and not an indication of a security issue. You didnt get hacked !',
)
const setLang = (selectedLang) => {
  lang.value = selectedLang
}

const icons = {
  authoritative:
    '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z" stroke="#4F46E5" stroke-width="2" ></path> </svg>',
  memorable:
    '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ></path> </svg>',
  reputation:
    '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ></path> </svg>',
  asset:
    '<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ></path> </svg>',
}

const content = {
  en: {
    saleBadge: 'Exclusive Domain Portfolio for Sale',
    portfolioIntro: 'Secure the definitive online brand for exclusive Albanian experiences:',
    benefitsTitle: 'A Strategic Digital Asset',
    benefitsSubtitle:
      "The 'Secret [Location]' naming convention is a proven, successful model for high-value tourism. This portfolio provides a premium domain to build a powerful, independent brand for Albania based on this popular narrative.",
    offerLink: 'Enquire About Acquisition',
    benefits: [
      {
        title: 'Proven Brand Concept',
        description:
          "Leverage the success of the 'Secret' travel guide phenomenon. This name instantly conveys exclusivity and insider knowledge, attracting a premium audience.",
        icon: icons.memorable,
      },
      {
        title: 'Capture the High-Intent Niche',
        description:
          "While search volume for 'Secret Albania' is niche, user intent is exceptionally high. Capture motivated travelers actively seeking unique opportunities, not just casual traffic.",
        icon: icons.reputation,
      },
      {
        title: 'Authoritative & Clean History',
        description:
          'This domain has no prior history, offering a clean slate for SEO. The .al TLD establishes immediate authority and trust within the Albanian market.',
        icon: icons.authoritative,
      },
      {
        title: 'Valuable Asset & Brand Security',
        description:
          "Acquire the complete portfolio (.al, .com) to protect your future brand from imitators and secure a valuable digital asset that will appreciate as Albania's tourism market grows.",
        icon: icons.asset,
      },
    ],
    contactTitle: 'Interested in Acquiring This Portfolio?',
    contactSubtitle:
      'Our acquisition process is handled with the utmost professionalism and confidentiality. Contact us to receive detailed information or to initiate a discussion.',
    contactButton: 'Make a Confidential Enquiry',
    emailSubject: 'Confidential Enquiry Regarding the secretalbania.al Portfolio',
    footerConfidential: 'All inquiries are confidential.',
    footerLegal:
      "DISCLAIMER: This sale is for the domain name portfolio (`secretalbania.al`, `mysecretalbania.al`, `mysecretalbania.com`) only. The 'Secret Albania' brand concept is referenced for marketing and illustrative purposes, inspired by successful travel guide brands. This sale does not include, and makes no claim to, any trademark, brand affiliation, or business assets associated with any other existing 'Secret' branded entities. The buyer acquires the digital assets to develop their own independent brand.",
  },
  al: {
    saleBadge: 'Portofol Ekskluziv Domenesh në Shitje',
    portfolioIntro: 'Siguroni markën përfundimtare online për përvoja ekskluzive shqiptare:',
    benefitsTitle: 'Një Aset Strategjik Dixhital',
    benefitsSubtitle:
      "Konvencioni i emërtimit 'Secret [Vendndodhja]' është një model i provuar dhe i suksesshëm për turizmin me vlerë të lartë. Ky portofol ofron një domain premium për të ndërtuar një markë të fuqishme e të pavarur për Shqipërinë, bazuar në këtë narrativë popullore.",
    offerLink: 'Informohuni për Blerjen',
    benefits: [
      {
        title: 'Koncept Marke i Provuar',
        description:
          "Përfitoni nga suksesi i fenomenit të guidave turistike 'Secret'. Ky emër përcjell menjëherë ekskluzivitet dhe njohuri të brendshme, duke tërhequr një audiencë premium.",
        icon: icons.memorable,
      },
      {
        title: 'Kapni Tregun Niche me Synim të Lartë',
        description:
          "Ndonëse vëllimi i kërkimit për 'Secret Albania' është niche, synimi i përdoruesit është jashtëzakonisht i lartë. Kapni udhëtarë të motivuar që kërkojnë aktivisht mundësi unike, jo thjesht trafik të rastësishëm.",
        icon: icons.reputation,
      },
      {
        title: 'Autoritativ & Histori e Pastër',
        description:
          'Ky domain nuk ka asnjë histori të mëparshme, duke ofruar një fillim të pastër për SEO. Prapashtesa .al krijon autoritet dhe besim të menjëhershëm në tregun shqiptar.',
        icon: icons.authoritative,
      },
      {
        title: 'Aset me Vlerë & Siguri Marke',
        description:
          'Blini portofolin e plotë (.al, .com) për të mbrojtur markën tuaj të ardhshme nga imituesit dhe për të siguruar një aset të vlefshëm dixhital që do të vlerësohet ndërsa tregu i turizmit në Shqipëri rritet.',
        icon: icons.asset,
      },
    ],
    contactTitle: 'Të interesuar për të blerë këtë Domain?',
    contactSubtitle:
      'Procesi ynë i blerjes trajtohet me profesionalizmin dhe konfidencialitetin më të lartë. Na kontaktoni për të marrë informacion të detajuar ose për të filluar një diskutim.',
    contactButton: 'Bëni një Kërkesë Konfidenciale',
    emailSubject: 'Kërkesë Konfidenciale Lidhur me Portofolin secretalbania.al',
    footerConfidential: 'Të gjitha kërkesat janë konfidenciale.',
    footerLegal:
      "SHËNIM I RËNDËSISHËM: Kjo shitje është vetëm për portofolin e emrave të domain-eve (`secretalbania.al`, `mysecretalbania.al`, `mysecretalbania.com`). Koncepti i markës 'Secret Albania' përmendet për qëllime marketingu dhe ilustruese, i frymëzuar nga markat e suksesshme të guidave turistike. Kjo shitje nuk përfshin, dhe nuk pretendon asnjë të drejtë mbi, asnjë markë tregtare, lidhje marke, ose asete biznesi të lidhura me ndonjë entitet tjetër ekzistues të markës 'Secret Albania'. Blerësi fiton asetet dixhitale për të zhvilluar markën e tij të pavarur.",
  },
}

const mailtoLink = computed(() => {
  const email = 'purchase@secretalbania.al'
  const subject = content[lang.value].emailSubject
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`
})

onMounted(() => {
  pushDataLayer('page_view', {
    page_title: 'SecretAlbania.al - Premium Domain Portfolio',
    page_location: window.location.href,
    page_path: window.location.pathname,
    language: lang.value,
  })
})
</script>

<style scoped lang="scss">
.on-sale-badge {
  background-color: #d7263d;
  color: white;
  padding: 5px 15px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 0.375rem;
}

.hero {
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), var(--hero-image-url);
  background-size: cover;
  background-position: center;
}

.hero > * {
  position: relative;
  z-index: 10;
}
</style>
