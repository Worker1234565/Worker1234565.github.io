export default {
  contentDir: "documents",
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "/img"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Страницы",
        path: "./",
        files: [
          {
            file: "index.html",
            label: "Главная страница",
            fields: [
              { label: "Заголовок", name: "main_title", type: "string" },
              { label: "Подзаголовок", name: "main_subtitle", type: "rich-text" },
              { label: "Главное изображение", name: "main_image", type: "image" },
              { label: "Баннер 80 лет победе", name: "banner_pobeda", type: "image" },
              { label: "Заголовок госуслуг", name: "gosslug_title", type: "string" },
              { label: "Изображение госуслуг", name: "gosslug_image", type: "image" },
              { label: "Изображение истории", name: "history_image", type: "image" },
              { label: "Текст истории", name: "history_text", type: "rich-text" },
              { label: "Изображение службы 1", name: "slugba_image1", type: "image" },
              { label: "Изображение службы 2", name: "slugba_image2", type: "image" },
              { label: "Изображение службы 3", name: "slugba_image3", type: "image" },
              { label: "Изображение службы 4", name: "slugba_image4", type: "image" },
              { label: "Изображение службы 5", name: "slugba_image5", type: "image" },
              { label: "Изображение службы 6", name: "slugba_image6", type: "image" },
              { label: "Часы работы (футер)", name: "footer_hours", type: "string" },
              { label: "Ссылки (футер)", name: "footer_links", type: "string" },
              { label: "Дополнительно (футер)", name: "footer_extra", type: "string" }
            ]
          }
        ]
      },
      {
        name: "documents",
        label: "Документы",
        path: "documents",
        create: true,
        fields: [
          { label: "Заголовок", name: "title", type: "string" },
          { label: "Контент", name: "body", type: "rich-text" }
        ]
      }
    ]
  }
};
