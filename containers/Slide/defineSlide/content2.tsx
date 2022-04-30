export const DefineSlideContent2: any = (props: { title: any }) => ({
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
          name: "imageLeft",
          type: "pic",
          x: "20%",
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
          name: "textLeft",
          type: "body",
          fontSize: 14,
          x: "5%",
          y: "50%",
          w: "45%",
          h: 2.5,
        },
      },
    },
    {
      placeholder: {
        //text
        options: {
          name: "imageRight",
          type: "pic",
          x: "70%",
          y: "15%",
          w: 2.5,
          h: 2.5,
          fontSize: 14,
        },
      },
    },
    {
      placeholder: {
        //text
        options: {
          name: "textRight",
          type: "body",
          fontSize: 14,
          x: "55%",
          y: "50%",
          w: "45%",
          h: 2.5,
        },
      },
    },
  ],
  slideNumber: { x: 0.3, y: "95%" },
});
