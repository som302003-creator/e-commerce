import { IFooterLink } from "@/interfaces/footer";
import { title } from "process";


export const footerdata: IFooterLink[] = [
  {
    title: "Browse",
    urlData: [
      {
        urlTitle: "store locations",
        urlLink: "#",
      },
      {
        urlTitle: "Delivery Estimates",
        urlLink: "#",
      },
      {
        urlTitle: "careers",
        urlLink: "#",
      },
    ],
  },
  {
    title: "Support",
    urlData: [
      { urlTitle: "Help Center", urlLink: "#" },
      { urlTitle: "Refund Policies", urlLink: "#" },
      { urlTitle: "Submit Ticket", urlLink: "#" },
    ],
  },
  {
    title: "Legal",
    urlData: [
      { urlTitle: "Privacy Terms", urlLink: "#" },
      { urlTitle: "Terms of Service", urlLink: "#" },
      { urlTitle: "Cookie Settings", urlLink: "#" },
    ],
  },
];
