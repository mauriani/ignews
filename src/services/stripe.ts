import Stripe from "stripe";

STRIPE_API_KEY=sk_test_51JzPVoCKbazxGPm0IapmVETO3SS958flnX2iQvQD70wFgt9GDCLjmQ1LxVSS8LWWNYRKdbP6eey72lNXYDJBR4M800BlvD2BJ4

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    name: "Ignews",
    version: "0.1.0",
  },
});
