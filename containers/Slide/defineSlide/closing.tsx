export const DefineClosing: any = (props: { title: any }) => ({
  title: props.title,
  background: { color: "FFFFFF" },
  objects: [
    {
      placeholder: {
        //text
        options: {
          name: "title",
          type: "title",
          x: "0%",
          y: "40%",
          fontSize: 30,
          w: "100%",
          align: "center",
          bold: true,
          color: "FFFFFF",
        },
      },
    },
  ],
  slideNumber: { x: 0.3, y: "95%" },
});
