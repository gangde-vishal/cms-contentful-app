import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN_KEY,
});

export const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const res = await client.getEntries({ content_type: "projects" });
      const res1 = res.items.map((item) => {
        const { title, url, image } = item.fields;
        const img = image?.fields?.file?.url;
        console.log(image);
        const { id } = item.sys;
        return { title, url, id, img };
      });
      console.log(res);
      setProjects(res1);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, projects };
};
