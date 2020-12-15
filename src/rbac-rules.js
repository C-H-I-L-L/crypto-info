const rules = {
    visitor: {
      static: ["posts:list", "home-page:visit", "blog-page:visit", "news-page: visit"]
    },
    admin: {
      static: [
        "posts:list",
        "posts:create",
        "posts:edit",
        "posts:delete",
        "users:get",
        "users:getSelf",
        "home-page:visit",
        "blog-page:visit", 
        "news-page: visit"
      ]
    }
  };
  
  export default rules;