<script lang="ts">
    export let currentPage: number;
    export let page: number;
    export let href: string;
  </script>
  
  {#if currentPage === page}
    <a
      {href}
      aria-label={`page ${page}`}
      aria-current="page"
      class="bg-primary text-white"
    >
      {page}
    </a>
  {:else}
    <a
      {href}
      aria-label={`page ${page}`}
    >
      {page}
    </a>
  {/if}

<style>
  a {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  @media screen and (max-width: 767px) {
    a {
      width: 44px;
      height: 44px;
    }
  }
</style>