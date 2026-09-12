/* ---------------------------------------------------------------------------
   Runtime configuration for AgriMaxx. Edited through /admin.html, or by hand.

   THIS FILE IS PUBLIC. Everything in it ships to every visitor.
   Payment Link URLs, business details and the admin hash are all fine to publish.
   A Stripe SECRET key (sk_live_... / sk_test_...) is NOT. Never put one here.
--------------------------------------------------------------------------- */
window.SITE_CONFIG = {
  admin: { passHash: "5b9e9741342f4f8a87a03b52634853031e9478d49220cadd57e189392e0b7bb3" },

  business: {
    company:   "",
    companyNo: "",
    vatNo:     "",
    street:    "",
    city:      "",
    state:     "",
    postcode:  "",
    phone:     ""
  },

  analyticsEndpoint: "https://agrimax-groundmax-collector.stellapark1141.workers.dev",

  checkoutEndpoint: "https://agrimax-groundmax-collector.stellapark1141.workers.dev/checkout",

  paymentLinks: {
    "AM-VHF71": "https://buy.stripe.com/7sY28q5ZF2EI8tA5M5eZ200",
    "AM-LFS53": "https://buy.stripe.com/9B6dR8co3djmeRY5M5eZ201",
    "AM-PHD18": "https://buy.stripe.com/9B6fZgds7cfiaBI3DXeZ202",
    "AM-RC72": "https://buy.stripe.com/4gM8wO87NenqdNUfmFeZ203"
  }
};
