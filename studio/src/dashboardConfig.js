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
                    "63163dd380fe051a7f8f2283",
                  title: "Sanity Studio",
                  name: "youth-code-sanity-studio",
                  apiId: "0d0ee76a-779a-4ffe-8351-825e18701878",
                },
                {
                  buildHookId: "63163dd3d8aeff187433fdf4",
                  title: "Blog Website",
                  name: "youth-code-sanity",
                  apiId: "41d3d4e6-6057-4f0d-accf-90e1d4d17f25",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/raney24/youth-code-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://youth-code-sanity.netlify.app",
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
