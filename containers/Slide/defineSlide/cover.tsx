export const DefineSlideCover: any = (props: { title: any }) => ({
  title: props.title,
  background: { color: "FFFFFF" },
  objects: [
    {
      placeholder: {
        //image logo
        options: {
          name: "imageMain",
          type: "pic",
          w: 2.5,
          h: 2.5,
          x: "60%",
          y: "40%",
        },
      },
    },
    {
      placeholder: {
        //image logo
        options: {
          name: "logo1",
          type: "pic",
          w: 1.5,
          h: 1.5,
          x: "5%",
          y: "5%",
        },
      },
    },
    {
      placeholder: {
        //main title
        options: {
          name: "mainTitle",
          type: "title",
          x: "4%",
          y: "25%",
          align: "left",
          w: "50%",
          h: "10%",
          fontSize: 60,
          bold: true,
        },
      },
    },
    {
      placeholder: {
        //main type of report
        options: {
          name: "typeOfReport",
          type: "body",
          x: "4%",
          y: "40%",
          align: "left",
          w: "50%",
          h: "10%",
          fontSize: 24,
          bold: true,
        },
      },
    },
    {
      placeholder: {
        //main type of report
        options: {
          name: "date",
          type: "body",
          x: "4%",
          y: "50%",
          align: "left",
          w: "50%",
          h: "10%",
          fontSize: 14,
          bold: false,
        },
      },
    },
    {
      placeholder: {
        //small logo
        options: {
          name: "smallLogo",
          type: "pic",
          x: "4%",
          y: "80%",
          align: "left",
          w: 0.5,
          h: 0.5,
          // fontSize: 12,
          // bold: false,
        },
      },
    },
  ],
  slideNumber: { x: 0.3, y: "95%" },
});
