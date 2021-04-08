<template>
  <Layout>
    <!-- Replace everything inside this Layout with your own content -->
    <!-- The main container CSS classes are in `src/layouts/Default.vue` -->

    <div class="mt-8 md:mt-16 flex flex-wrap items-center justify-center">
      <div>
        <h1 class="font-maintitle text-5xl sm:text-7xl block text-center sm:pr-8 text-gray-700">
          mc.langrock.info
        </h1>
      </div>
    </div>

    <h2>Image Gallery</h2>

    <p>Some screenshots from the server:<p>

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/banner1.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/banner2.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/banner3.webp"
      quality="100"
    />

    <h3>The spawn region</h3>

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/spawn1.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/spawn2.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/spawn3.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/spawn4.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/spawn5.webp"
      quality="100"
    />

    <h3>Player homes</h3>

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/homes1.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/homes2.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/homes3.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/homes4.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/homes5.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/homes6.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/homes7.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      alt="Screenshot of the server's spawn"
      src="~/assets/img/homes8.webp"
      quality="100"
    />

    <br />
    <p class="text-center"><g-link to="/">Return to homepage</g-link><br /></p>

    <p class="text-center mt-16 mb-8 text-xs">
      Thanks to Ville Säävuori for making this great template ❤️ <br />
      Hosted by Lukas Langrock - <a
        class="underline text-blue-700"
        href="https://langrock.info/imprint"
      >Imprint</a> <br />
      &copy; Ville Säävuori (<a
        class="underline text-blue-700"
        href="https://twitter.com/uninen"
      >@uninen</a>) 2020, MIT License
    </p>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Minecraft Server"
  }
};
</script>
