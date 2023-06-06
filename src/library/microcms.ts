//SDK利用準備
import { createClient, MicroCMSImage, MicroCMSListResponse, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  eyecatch: MicroCMSImage;
  content: string;
  category: string[];
};

//APIの呼び出し
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.get<MicroCMSListResponse<News>>({ endpoint: "news", queries });
};

export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
};

export type Product = {
  id: string;
  createdAt: string;
  updatedAt: string;
  pulishedAt: string;
  revisedAt: string;
  name: string;
  mainVisual: MicroCMSImage;
  content: string;
  category: string[];
  type: string[];
};

export const getProducts = async (queries?: MicroCMSQueries) => {
  return await client.get<MicroCMSListResponse<Product>>({ endpoint: "products", queries });
};
