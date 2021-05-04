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
    <p>If you can't join the server might be down. You can chek that using either the link above or my <a href="https://stats.uptimerobot.com/GwZNJSJKpy/785062643">Uptime Monitor.</a></p>

    <strong>See you there!</strong><br />
    <p>Or explore the <g-link to="/gallery/">Image Gallery</g-link></p>

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

    <br />
    <p>Live map: <a href="https://mc.langrock.info/map/?worldname=world&mapname=surface">mc.langrock.info/map</a></p>

    <p>Server map graphics (2021-04-14): <a href="https://mc.langrock.info/files/2021-04-14/world.png">overworld</a> - <a href="https://mc.langrock.info/files/2021-04-14/world_nether.png">nether</a> - <a href="https://mc.langrock.info/files/2021-04-14/world_the_end.png">end</a></p>
    
    <p>World download (updated each day): <a href="https://mc.langrock.info/files/nightly/world-download.tar">world-download.tar</a></p>

    <p>The seed is <code>5362256963815911759</code>.</p>

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
    <p>This website and server is hosted on Hetzner Cloud in Germany, the langrock.info <a href="https://langrock.info/privacy">Privacy Policy</a> applies.</p>

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
