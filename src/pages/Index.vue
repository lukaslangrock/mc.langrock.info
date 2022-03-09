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

    <h2>Welcome to my server ❤️</h2>

    <video autoplay loop poster="https://mc.langrock.info/files/assets/hero.webp">
      <source src="https://mc.langrock.info/files/assets/hero.webm" type='video/webm; codecs="vp9"' />
      <source src="https://mc.langrock.info/files/assets/hero.mp4" type="video/mp4" />
      <img src="https://mc.langrock.info/files/assets/hero.webp" alt="Hero banner (hero video unsupported)" />
    </video>


    <h3>Joining the server</h3>

    <p>Simply join the server using the IP <code>mc.langrock.info</code>.</p>
    <p>We'll be on whatever is the current version of PaperMC. For more info click <a href="https://mcsrvstat.us/server/mc.langrock.info">here</a>.</p>
    <p>If you can't join the server might be down. You can chek the uptime <a href="https://hetrixtools.com/report/uptime/a73f9ccab037b1b8f2a8f59d4724835a/">here</a>.</p>

    <strong>See you there!</strong>

    <h3>Explore</h3>
    <i>Take a look before you join?</i> Sure.
    
    <div class="mt-2">
      <a href="/map/#world;surface" class="mr-2">
        <button class="bg-white hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 hover:text-black py-2 px-4 border border-gray-400 hover:border-green-400 rounded shadow">
          Online Live Map
        </button>
      </a>
      <g-link to="/gallery/">
        <button class="bg-white hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 hover:text-black py-2 px-4 border border-gray-400 hover:border-green-400 rounded shadow">
          Image Gallery
        </button>
      </g-link>
    </div>

    <h3>Rules</h3>

    <p>Rules are written in a book at spawn, they come down to:</p>

    <ul>
      <li>Use your common sense</li>
      <li>Be nice to everyone</li>
      <li>Don't steal, grief or attack someone verbally or in PvP if they didn't give you permission to do so</li>
    </ul>

    <br />
    <p>Not following the rules will result in a ban, probably forever.</p>

    <h3>The World</h3>

    <g-image
      class="block"
      alt="Topdown view of the spawn region"
      src="~/assets/img/world.webp"
      quality="100"
    />

    <br /><p>The seed is <code>5362256963815911759</code>.</p>

    <p>More options:</p>
    <div>
      <a href="/files/nightly/world-download.tar" class="mr-2">
        <button class="bg-white hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 hover:text-black py-2 px-4 border border-gray-400 hover:border-green-400 rounded shadow">
          World Download (nightly)
        </button>
      </a>
      <a href="/map/#world;surface" class="mr-2">
        <button class="bg-white hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 hover:text-black py-2 px-4 border border-gray-400 hover:border-green-400 rounded shadow">
          Dynmap
        </button>
      </a>
      <a href="https://discord.gg/btKwpUkDYx">
        <button class="bg-white hover:bg-green-100 text-gray-800 font-semibold py-2 px-4 hover:text-black py-2 px-4 border border-gray-400 hover:border-green-400 rounded shadow">
          Discord
        </button>
      </a>
    </div>

    

    <h3>Privacy</h3>

    <i>Because everything needs a privacy policy these days...</i>
    
    <br />
    Basically:
    <ul>
      <li>Your username and IP will appear in the server logs when you visit the server.</li>
      <li>Your builds and all the stuff you do on the server will also stay there until they either get destroyed or modified by other players.</li>
      <li>There is no system for purging any information from the logs or the world but if you want to get something removed just hit me up.</li>
    </ul>

    <br />
    <p>This website and server is hosted with Hetzner Cloud in Germany, the langrock.info <a href="https://langrock.info/privacy">privacy policy</a> applies.</p>

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
