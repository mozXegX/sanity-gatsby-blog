export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62f05e4239e4637ef5d58b49",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3i1wezcb",
                  apiId: "92f24238-b3bb-41eb-80f7-02c5149435fa",
                },
                {
                  buildHookId: "62f05e424739797723345f06",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-hh1xkbug",
                  apiId: "a42c9290-4aaf-4c79-a310-3df79e5a36a6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mozXegX/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-hh1xkbug.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
