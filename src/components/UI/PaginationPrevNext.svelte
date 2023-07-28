<script lang="ts">
    import IconChevronRight from '../icons/IconChevronRight.svelte';
    import IconChevronLeft from '../icons/IconChevronLeft.svelte';
  
    export let type: 'prev' | 'next';
    export let href: string;
  </script>
  
  {#if type === 'prev'}
    <a
      {href}
      aria-label="previous page"
      class="flex justify-center items-center"
    >
      <IconChevronLeft />
    </a>
  {:else if type === 'next'}
    <a
      {href}
      aria-label="next page"
    >
      <IconChevronRight />
    </a>
  {/if}

<style>
  a {
    display: flex;
    justify-content: center;
    align-items: center;
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