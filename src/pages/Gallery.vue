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
      src="~/assets/img/screenshots/2022-03-21_00.05.53.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.06.12.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.06.22.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.06.34.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.06.55.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.07.09.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.07.21.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.07.24.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.07.34.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.07.43.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.08.50.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.09.05.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.09.15.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.09.22.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.10.09.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.10.32.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.10.53.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.11.23.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.12.30.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.13.56.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.14.37.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.14.54.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.15.13.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.15.48.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.16.31.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.17.24.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.17.29.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.19.03.webp"
      quality="100"
    /><br />

    <g-image
      class="block"
      src="~/assets/img/screenshots/2022-03-21_00.21.32.webp"
      quality="100"
    /><br />

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
