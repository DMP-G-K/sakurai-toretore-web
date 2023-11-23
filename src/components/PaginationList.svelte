<script lang="ts">
    import PaginationItem from "./UI/PaginationItem.svelte";
    import PaginationPrevNext from "./UI/PaginationPrevNext.svelte";
    import type { Page } from "astro";
  
    // propsで'pageデータ'と'隣接するページを表示する数'を受け取る
    export let page: Page;
    export let adjacentPageNumber: number = 1; // 初期値は1
    // ページ番号の配列を作成
    const pager = [...Array(page.lastPage).keys()].map((i) => ++i);
    // リンク先のパスを生成する関数
    const getPath = (page: number) => {
      return `/news/page/${page}`;
    };
  </script>
  
  <nav aria-label="pagination">
    <ul class="page-number">
      <!-- 前ページが存在する場合はPREVリンクを表示する -->
      {#if page.url.prev}
        <li><PaginationPrevNext href={page.url.prev} type={'prev'} /></li>
      {/if}
      <!-- 現在ページが「隣接ページ数 + 1」を超える場合は先頭ページと...を表示する -->
      {#if adjacentPageNumber + 1 < page.currentPage}
        <li>
          <PaginationItem
            currentPage="{page.currentPage}"
            page="{1}"
            href="{getPath(1)}"
          />
        </li>
        <li>&#8230;</li>
      {/if}
      <!-- ページ番号の配列リストから「現在ページ +- 隣接ページ数」のページを表示する -->
      {#each pager as p (p)}
        {#if page.currentPage - adjacentPageNumber <= p && p <= page.currentPage + adjacentPageNumber}
          <li>
            <PaginationItem
              currentPage="{page.currentPage}"
              page="{p}"
              href="{getPath(p)}"
            />
          </li>
        {/if}
      {/each}
      <!-- 現在ページが「最終ページ - 隣接ページ数」の場合...と最終ページを表示する -->
      {#if page.currentPage < page.lastPage - adjacentPageNumber}
        <li>&#8230;</li>
        <li>
          <PaginationItem
            currentPage="{page.currentPage}"
            page="{page.lastPage}"
            href="{getPath(page.lastPage)}"
          />
        </li>
      {/if}
      <!-- 次ページが存在する場合はNEXTリンクを表示する -->
      {#if page.url.next}
        <li><PaginationPrevNext href={page.url.next} type={'next'} /></li>
      {/if}
    </ul>
  </nav>

<style>    
  .page-number {
    display: flex;
    justify-content: center;
    margin-bottom: 140px;
  }

  .page-number > li {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffff;
    color: #5f8934;
    line-height: 60px;
    text-align: center;
    margin: 0 20px;
    font-weight: bold;
  }

  .page-number > li:hover {
    background-color: #5f8934;
    color: #ffffff;
  }

  @media screen and (max-width: 767px) {
    .page-number > li {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: #ffffff;
      color: #5f8934;
      line-height: 44px;
      text-align: center;
      margin: 0 7px;
      font-weight: bold;
    }
  }
</style>