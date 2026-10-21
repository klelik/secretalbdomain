<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { copy, type Language } from '@/content'

const language = ref<Language>('en')
const c = computed(() => copy[language.value])
const email = 'purchase@secretalbania.al'
const name = ref('')
const buyerEmail = ref('')
const offer = ref('')
const currency = ref('EUR')
const message = ref('')
const emailOpened = ref(false)
const copied = ref(false)

function track(event: string) {
  const analytics = window as Window & { dataLayer?: Record<string, unknown>[] }
  analytics.dataLayer?.push({ event, language: language.value })
}

function setLanguage(next: Language) {
  language.value = next
  document.documentElement.lang = next
  const url = new URL(window.location.href)
  if (next === 'en') url.searchParams.delete('lang')
  else url.searchParams.set('lang', next)
  window.history.replaceState({}, '', url)
}

function sendOffer() {
  const body = [
    `Name: ${name.value.trim()}`,
    `Email: ${buyerEmail.value.trim()}`,
    `Total offer for all three domains: ${offer.value ? `${offer.value} ${currency.value}` : 'To discuss'}`,
    '',
    message.value.trim(),
    '',
    'Bundle: secretalbania.al, mysecretalbania.al, mysecretalbania.com',
    'All three domains are sold together for one total price.',
  ].join('\n')
  window.location.href = `mailto:${email}?subject=${encodeURIComponent('Three-domain bundle offer — secretalbania.al')}&body=${encodeURIComponent(body)}`
  emailOpened.value = true
  track('offer_email_opened')
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2500)
  } catch {
    copied.value = false
  }
}

onMounted(() => {
  const requested = new URLSearchParams(window.location.search).get('lang')
  if (requested === 'sq' || requested === 'al') setLanguage('sq')
  track('page_view')
})
</script>

<template>
  <a class="skip-link" href="#main">{{ c.skip }}</a>
  <div class="sale-page">
    <header class="site-header wrap">
      <a class="site-name" href="/" aria-label="Secret Albania home">
        <img src="/albanian-eagle.svg" alt="" width="36" height="36" aria-hidden="true" />
        secretalbania.al
      </a>
      <div class="language-switch" role="group" :aria-label="c.language">
        <button :aria-pressed="language === 'en'" @click="setLanguage('en')">EN</button
        ><span aria-hidden="true">/</span
        ><button :aria-pressed="language === 'sq'" @click="setLanguage('sq')">SQ</button>
      </div>
    </header>

    <main id="main" class="wrap sale-main">
      <section class="domain-info" aria-labelledby="domain-title">
        <p class="sale-status"><span></span>{{ c.available }}</p>
        <h1 id="domain-title">secretalbania<span>.al</span></h1>
        <h2>
          {{ c.headline }}<br /><span>{{ c.headlineSecond }}</span>
        </h2>
        <p class="sale-description">{{ c.description }}</p>
        <a href="#offer-form" class="mobile-offer-link"
          >{{ c.formTitle }} <span aria-hidden="true">↗</span></a
        >
        <div class="also-available">
          <p>{{ c.alsoAvailable }}</p>
          <div>
            <span>secretalbania.al</span><span>mysecretalbania.al</span
            ><span>mysecretalbania.com</span>
          </div>
          <p class="portfolio-note">{{ c.portfolioNote }}</p>
        </div>
        <div class="direct-contact">
          <p>{{ c.preferEmail }}</p>
          <a :href="`mailto:${email}`">{{ email }} <span aria-hidden="true">↗</span></a
          ><button type="button" @click="copyEmail" :aria-label="c.copyEmail" :title="c.copyEmail">
            <svg v-if="!copied" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect
                x="7"
                y="7"
                width="10"
                height="10"
                rx="2"
                stroke="currentColor"
                stroke-width="1.4"
              />
              <path
                d="M12 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1"
                stroke="currentColor"
                stroke-width="1.4"
              /></svg
            ><span v-else aria-hidden="true">✓</span></button
          ><span class="sr-only" role="status">{{ copied ? c.copied : '' }}</span>
        </div>
      </section>

      <section id="offer-form" class="offer-panel" aria-labelledby="offer-title">
        <div class="form-heading">
          <span class="panel-label">{{ c.privateOffers }}</span>
          <h2 id="offer-title">{{ c.formTitle }}</h2>
          <p>{{ c.formIntro }}</p>
        </div>
        <form @submit.prevent="sendOffer">
          <div class="form-grid">
            <label for="buyer-name"
              >{{ c.name
              }}<input
                id="buyer-name"
                v-model="name"
                name="name"
                autocomplete="name"
                required
                maxlength="120"
                :placeholder="c.namePlaceholder" /></label
            ><label for="buyer-email"
              >{{ c.email
              }}<input
                id="buyer-email"
                v-model="buyerEmail"
                name="email"
                type="email"
                autocomplete="email"
                required
                maxlength="254"
                placeholder="you@company.com"
            /></label>
          </div>
          <label for="offer"
            >{{ c.offer }} <span class="optional">{{ c.optional }}</span></label
          >
          <div class="offer-input">
            <input
              id="offer"
              v-model="offer"
              name="offer"
              type="number"
              min="1"
              step="any"
              inputmode="decimal"
              :placeholder="c.offerPlaceholder"
            /><select v-model="currency" name="currency" :aria-label="c.currency">
              <option>EUR</option>
              <option>GBP</option>
              <option>USD</option>
            </select>
          </div>
          <label for="buyer-message"
            >{{ c.message }} <span class="optional">{{ c.optional }}</span
            ><textarea
              id="buyer-message"
              v-model="message"
              name="message"
              rows="2"
              maxlength="2000"
              :placeholder="c.messagePlaceholder"
            ></textarea>
          </label>
          <button class="submit-button" type="submit">
            {{ c.send }} <span aria-hidden="true">↗</span>
          </button>
          <p class="form-note">{{ c.formNote }}</p>
          <p v-if="emailOpened" class="form-feedback" role="status">
            {{ c.emailOpened }} <a :href="`mailto:${email}`">{{ email }}</a
            >.
          </p>
        </form>
      </section>
    </main>

    <footer class="site-footer wrap">
      <p>{{ c.disclaimer }}</p>
      <span>© {{ new Date().getFullYear() }} secretalbania.al</span>
    </footer>
  </div>
</template>
