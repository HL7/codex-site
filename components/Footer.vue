<template>
  <div class="footer grid text-white font-16px pt-8 lg:py-8">
    <div class="flex flex-col lg:flex-row justify-self-end mr-16 lg:mr-0">
      <div class="py-2 lg:py-0 lg:px-3">
        <NuxtLink to="/">Home</NuxtLink>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <NuxtLink to="/#news">News</NuxtLink>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <NuxtLink to="/uses">Use Cases</NuxtLink>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <NuxtLink to="/community">Community</NuxtLink>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <NuxtLink to="/story">Our Story</NuxtLink>
      </div>
      <div class="py-2 lg:py-0 lg:px-3">
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row ml-8 lg:ml-0">
      <div class="p-2 lg:py-0 lg:px-3">
        <a
          tabindex="3"
          target="_blank"
          href="https://www.linkedin.com/company/codex-common-oncology-data-elements-extensions/?trk=public_profile_topcard-current-company"
          class="flex flex-row underline"
          ><img
            width="20"
            class="mr-2"
            src="~/assets/img/linkin.svg"
          />Linkedin</a
        >
      </div>
      <div class="p-2 lg:py-0 lg:px-3">
        <a
          tabindex="3"
          target="_blank"
          href="https://confluence.hl7.org/display/COD/CodeX+Home"
          class="flex flex-row underline"
          ><img
            width="20"
            class="mr-2"
            src="~/assets/img/confluence.svg"
          />Confluence</a
        >
      </div>
    </div>
    <div
      class="flex justify-center col-span-2 lg:col-span-1 satoshi-bold font-black font-16px my-12 lg:my-0 lg:order-first"
    >
      Copyright ⓒ CodeX™ | FHIR | HL7 Accelerator
    </div>
  </div>
</template>
