import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://program.kampunginggrislc.com",
      lastModified: new Date(),
    },
    {
      url: "https://program.kampunginggrislc.com/intensive",
      lastModified: new Date(),
    },
    {
      url: "https://program.kampunginggrislc.com/intensivee",
      lastModified: new Date(),
    },
    {
      url: "https://program.kampunginggrislc.com/english-master",
      lastModified: new Date(),
    },
    {
      url: "https://program.kampunginggrislc.com/em",
      lastModified: new Date(),
    },
    {
      url: "https://program.kampunginggrislc.com/vip",
      lastModified: new Date(),
    },
  ];
}
