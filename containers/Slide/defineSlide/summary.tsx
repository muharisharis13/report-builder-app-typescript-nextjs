export const DefineSlideSummary: any = (props: { title: any }) => ({
  title: props.title,
  background: { color: "FFFFFF" },
  objects: [
    {
      placeholder: {
        //text
        options: {
          name: "text",
          type: "body",
          x: "5%",
          y: "10%",
          fontSize: 14,
        },
      },
    },
  ],

  slideNumber: { x: 0.3, y: "95%" },
});
