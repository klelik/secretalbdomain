<template>
  <div>
    <!-- Language Switcher & Sale Badge -->
    <div class="bg-gray-100 py-2">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
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

    <!-- Hero Section -->
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

    <!-- Benefits Section -->
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
            class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600"
          >
            <div
              class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14"
              v-html="benefit.icon"
            ></div>
            <h4
              class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white"
            >
              {{ benefit.title }}
            </h4>
            <p
              class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white"
            >
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-6">
          {{ content[lang].contactTitle }}
        </h2>
        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <p class="text-gray-600 mb-8">
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

    <!-- Footer -->
    <footer class="py-9">
      <div class="container mx-auto px-6 text-center text-gray-500 text-sm">
        <p>
          &copy; {{ new Date().getFullYear() }} secretalbania.al.
          {{ content[lang].footerConfidential }}
        </p>
        <p class="mt-4 text-xs text-gray-600 max-w-3xl mx-auto">
          {{ content[lang].footerLegal }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, computed } from 'vue'

const lang = ref('al')

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
    saleBadge: 'Premium Domain Name for Sale',
    portfolioIntro: 'A Premium Domain Portfolio including',
    benefitsTitle: 'Benefits of owning secretalbania.al',
    benefitsSubtitle:
      "Establish your brand's authoritative presence in Albania with this premium domain that distinguishes you from competitors.",
    offerLink: 'Make an Offer',
    benefits: [
      {
        title: 'Authoritative',
        description: 'Build trust with customers and investors with a premium .al domain name.',
        icon: icons.authoritative,
      },
      {
        title: 'Memorable & Unmistakable',
        description:
          'Easy to remember domain with professional email addresses like info@secretalbania.al.',
        icon: icons.memorable,
      },
      {
        title: 'Reputation & Prestige',
        description: 'Own the Albanian market space and distinguish yourself from competitors.',
        icon: icons.reputation,
      },
      {
        title: 'Valuable Asset',
        description: 'Classified as an intangible asset that increases advertising effectiveness.',
        icon: icons.asset,
      },
    ],
    contactTitle: 'Interested in This Domain Portfolio?',
    contactSubtitle:
      'All inquiries are handled with strict confidentiality. To make an offer or for more information, please contact us directly.',
    contactButton: 'Make a Confidential Offer',
    contactNote: 'This will open your default email application.',
    emailSubject: 'Inquiry Regarding the secretalbania.al Domain Portfolio',
    footerConfidential: 'All inquiries are confidential.',
    footerLegal:
      "The domain name 'secretalbania.al' and its associated portfolio are registered digital assets. This sale is for the domain names only and does not imply any affiliation with, or rights to, any existing trademarks of the same or similar name.",
  },
  al: {
    saleBadge: 'Domain Premium në Shitje',
    portfolioIntro: 'Një Portofol Domenesh Premium që përfshin',
    benefitsTitle: 'Përfitimet e zotërimit të secretalbania.al',
    benefitsSubtitle:
      'Vendosni praninë autoritative të markës suaj në Shqipëri me këtë domain premium që ju dallon nga konkurrentët.',
    offerLink: 'Bëni një Ofertë',
    benefits: [
      {
        title: 'Autoritativ',
        description: 'Ndërtoni besim me klientët dhe investitorët me një emër domeni premium .al.',
        icon: icons.authoritative,
      },
      {
        title: 'I paharrueshëm & i Pagabueshëm',
        description:
          "Domain i lehtë për t'u mbajtur mend me adresa emaili profesionale si info@secretalbania.al.",
        icon: icons.memorable,
      },
      {
        title: 'Reputacion & Prestigj',
        description: 'Zotëroni hapësirën e tregut shqiptar dhe dallohuni nga konkurrentët.',
        icon: icons.reputation,
      },
      {
        title: 'Pasuri me Vlerë',
        description: 'Klasifikuar si një pasuri jomateriale që rrit efektivitetin e reklamimit.',
        icon: icons.asset,
      },
    ],
    contactTitle: 'Jeni të interesuar për këtë Portofol Domenesh?',
    contactSubtitle:
      'Të gjitha kërkesat trajtohen me konfidencialitet të rreptë. Për të bërë një ofertë ose për më shumë informacion, ju lutemi na kontaktoni direkt.',
    contactButton: 'Bëni një Ofertë Konfidenciale',
    contactNote: 'Kjo do të hapë aplikacionin tuaj të parazgjedhur të emailit.',
    emailSubject: 'Kërkesë në lidhje me Portofolin e Domain-it secretalbania.al',
    footerConfidential: 'Të gjitha kërkesat janë konfidenciale.',
    footerLegal:
      "Emri i domain-it 'secretalbania.al' dhe portofoli i tij i lidhur janë pasuri dixhitale të regjistruara. Kjo shitje është vetëm për emrat e domain-eve dhe nuk nënkupton asnjë lidhje me, ose të drejta ndaj, ndonjë marke tregtare ekzistuese me emër të njëjtë ose të ngjashëm.",
  },
}

const mailtoLink = computed(() => {
  const email = 'purchase@secretalbania.al'
  // FIX: Access `content` directly, not `content.value`
  const subject = content[lang.value].emailSubject
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`
})
</script>

<style scoped>
.on-sale-badge {
  background-color: #4f46e5;
  color: white;
  padding: 5px 15px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 0.375rem;
}
</style>
