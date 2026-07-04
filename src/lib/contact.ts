// Zentrale Kontakt- und CTA-Daten (1:1 aus schamsconsult.de / shams-consult.de).
export const LOGO_URL =
  "/images/image-.gif";

export const CONTACT = {
  email: "office@shams-consult.de",
  phoneFrankfurt: "069 74 22 3 777",
  phoneFrankfurtHref: "tel:+4969742237770",
  phoneRoedermark: "060 74 23 98 782",
  phoneRoedermarkHref: "tel:+49607423987820",
  whatsappNumber: "+49 151 51864090",
  whatsappHref:
    "https://wa.me/4915151864090?text=Hallo%20Shams%20Consult%20Team,%20ich%20habe%20eine%20Frage.",
  bookingHref:
    "https://outlook.office365.com/owa/calendar/TerminvereinbarungBauundPlanungsberatungmitShamsConsult@shams-consult.de/bookings/",
  offices: [
    {
      name: "Büro Frankfurt am Main",
      street: "Carl-von-Noorden-Platz 5",
      city: "60596 Frankfurt am Main",
      phone: "069 74 22 3 777",
      phoneHref: "tel:+4969742237770",
    },
    {
      name: "Büro Rödermark",
      street: "Carl-Zeiss-Str. 43",
      city: "63322 Rödermark",
      phone: "060 74 23 98 782",
      phoneHref: "tel:+49607423987820",
    },
  ],
} as const;
