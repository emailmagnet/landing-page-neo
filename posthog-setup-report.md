# PostHog post-wizard report

The wizard has completed a deep integration of your Email Magnet landing page project with PostHog analytics. The integration includes:

- **Client-side initialization** via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+)
- **Reverse proxy configuration** in `next.config.ts` to improve tracking reliability and bypass ad blockers
- **Environment variables** configured in `.env` for secure API key management
- **Custom event tracking** across 5 key components to capture user engagement and conversion metrics
- **Error tracking** enabled via PostHog's `capture_exceptions` feature

## Events Implemented

| Event Name | Description | File |
|------------|-------------|------|
| `generate_popup_clicked` | User clicked the Generate button to create an AI popup from their Shopify store URL | `components/landing/Hero.tsx` |
| `store_url_entered` | User entered or modified their Shopify store URL in the hero input field | `components/landing/Hero.tsx` |
| `pricing_plan_clicked` | User clicked on a pricing plan CTA button (Get Started, Upgrade, or Go Pro) | `components/landing/Pricing.tsx` |
| `install_on_shopify_clicked` | User clicked the Install on Shopify button in the header | `components/layout/Header.tsx` |
| `faq_item_toggled` | User expanded or collapsed an FAQ question to view the answer | `components/landing/FAQ.tsx` |
| `footer_link_clicked` | User clicked on a footer link (LinkedIn, Shopify, Privacy Policy, Terms of Use) | `components/layout/Footer.tsx` |

## Files Created/Modified

| File | Action | Purpose |
|------|--------|---------|
| `.env` | Created | PostHog API key and host environment variables |
| `instrumentation-client.ts` | Created | Client-side PostHog initialization |
| `next.config.ts` | Modified | Added reverse proxy rewrites for PostHog |
| `components/landing/Hero.tsx` | Modified | Added generate and store URL tracking |
| `components/landing/Pricing.tsx` | Modified | Added pricing plan click tracking |
| `components/layout/Header.tsx` | Modified | Added Install on Shopify click tracking |
| `components/landing/FAQ.tsx` | Modified | Added FAQ toggle tracking |
| `components/layout/Footer.tsx` | Modified | Added footer link click tracking |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/281058/dashboard/999236) - Your main dashboard with all key metrics

### Insights
- [Generate Popup Clicks Over Time](https://us.posthog.com/project/281058/insights/NDlehwkz) - Track daily Generate button clicks
- [Pricing Plan Interest](https://us.posthog.com/project/281058/insights/zQdXp2Q7) - See which pricing plans get the most interest, broken down by plan name
- [Shopify Install Intent](https://us.posthog.com/project/281058/insights/6qMnc6ZP) - Track Install on Shopify button clicks (key conversion metric)
- [Landing Page Conversion Funnel](https://us.posthog.com/project/281058/insights/c5m3jsZV) - Visualize the user journey from page view to generate to install
- [FAQ Engagement](https://us.posthog.com/project/281058/insights/MaULI3l7) - Discover which FAQ questions users are most interested in

## Getting Started

1. Start your development server with `npm run dev`
2. Visit your landing page and interact with it
3. Check your [PostHog dashboard](https://us.posthog.com/project/281058/dashboard/999236) to see events flowing in
4. Events will appear in PostHog within a few seconds of occurring

## Configuration Notes

- PostHog is configured to use a reverse proxy (`/ingest`) for better tracking reliability
- Error tracking is enabled by default
- Debug mode is enabled in development for easier troubleshooting
- Pageviews and pageleaves are captured automatically with the `defaults: '2025-05-24'` configuration
