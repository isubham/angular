import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() {
  }

  getSocials() {

    return [
      {
        title: "facebook",
        url: "http://google.com",
        img: "../../assets/036-facebook.svg"
      },
      {
        title: "instagram",
        url: "http://google.com",
        img: "../../assets/029-instagram.svg"
      },
      {
        title: "linkedin",
        url: "",
        img: "../../assets/027-linkedin.svg"
      },
      {
        title: "twitter",
        url: "",
        img: "../../assets/008-twitter.svg"
      },
      {
        title: "youtube",
        url: "",
        img: "../../assets/001-youtube.svg"
      }
    ];
  }

  getFeatures() {

    return [
      {
        type: "desc",
        title: "QR Based",
        description: `Each Account will have one QR which they can use to authorize`,
        row: 5,
        col: 1
      },
      {
        type: "image",
        row: 5,
        col: 1,
        image: "../../assets/view-qr.svg",
      },
      {
        type: "image",
        row: 5,
        col: 1,
        image: "../../assets/qr-scanner.svg",
      },
      {
        type: "desc",
        title: "Scan QR or Username to Go",
        description: `Authorize your users with their QR or unique username`,
        row: 5,
        col: 1
      },
      {
        type: "desc",
        title: "Download Report in Excel",
        description: `Data can be downloaded in excel with multiple time filters for viewing large data`,
        row: 5,
        col: 1
      },
      {
        type: "image",
        row: 5,
        col: 1,
        image: "../../assets/report-download.svg",
      },


    ];

  }

  getHomeUiData() {
    return {
      landing : {
        title : "Tommorow is NOW",
        description : "Building products of tomorrow to impact and improve today",
      },
      sales : {
        whatsappSalesContact : "8409829198"
      }
    };
  }


  getAstraUiData() {
    return {
      landing : {
        title : "Astra",
        description : "Track | Inform | Prevent",
        image : "../../assets/astra-collage.svg",
        playStoreImage : "../../assets/g_p_b.jpg",
        playStoreLink : "http://google.com"
      },
      sales : {
        whatsappSalesContact : "8409829198"
      }
    };
  }

  getPrivacyPolicy() {
    return {
      "/astra/privacy-policy" : "../../assets/astra-pp.pdf"
    }
  }


}
