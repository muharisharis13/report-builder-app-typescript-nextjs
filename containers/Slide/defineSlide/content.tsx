export const DefineSlideContent: any = (props: { title: any }) => ({
  title: props.title,
  background: { color: "FFFFFF" },
  objects: [
    {
      placeholder: {
        //text
        options: {
          name: "title",
          type: "title",
          x: "5%",
          y: "5%",
          fontSize: 36,
          w: "100%",
          align: "left",
          bold: true,
        },
      },
    },
    {
      placeholder: {
        //text
        options: {
          name: "image",
          type: "pic",
          x: "40%",
          y: "15%",
          w: 2.5,
          h: 2.5,
        },
      },
    },
    {
      placeholder: {
        //text
        options: {
          name: "content",
          type: "body",
          x: "0",
          y: "50%",
          w: "100%",
          h: 2.5,
          fontSize: 14,
        },
      },
    },
    {
      placeholder: {
        //text
        options: {
          name: "smallLogo",
          type: "pic",
          x: "4%",
          y: "80%",
          w: 0.5,
          h: 0.5,
        },
      },
    },
  ],
  slideNumber: { x: 0.3, y: "95%" },
});
