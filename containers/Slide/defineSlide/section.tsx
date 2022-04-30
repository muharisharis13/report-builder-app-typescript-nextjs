export const DefineSection: any = (props: { title: any }) => ({
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
          y: "40%",
          fontSize: 36,
          w: "100%",
          align: "left",
          bold: true,
          color: "FFFFFF",
        },
      },
    },
  ],
  slideNumber: { x: 0.3, y: "95%" },
});
