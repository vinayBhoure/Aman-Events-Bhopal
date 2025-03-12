import React from 'react'
import { Helmet } from 'react-helmet';

function SEO({
    title = "Aman Events Bhopal | Event Management & Planning Services",
    description = "Professional event management services in Bhopal. We specialize in weddings, corporate events, and social gatherings with expert planning and execution.",
    keywords = "event management, Bhopal events, wedding planner, corporate events, event planning",
    canonicalUrl,
    ogImage = "/images/og-default.jpg",
    ogType = "website",
    twitterCard = "summary_large_image"
}) {
    const siteUrl = "https://www.amaneventsbhopal.com";
    const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : window.location.href;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical Link */}
            <link rel="canonical" href={canonical} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={`${siteUrl}${ogImage}`} />
            <meta property="og:site_name" content="Aman Events Bhopal" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

            {/* Additional Tags */}
            <meta name="robots" content="index, follow" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Structured Data for Local Business */}
            <script type="application/ld+json">
                {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Aman Events Bhopal",
              "image": "${siteUrl}/images/logo.png",
              "url": "${siteUrl}",
              "telephone": "+91 12345 67890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Your Street Address",
                "addressLocality": "Bhopal",
                "addressRegion": "MP",
                "postalCode": "462001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.2599,
                "longitude": 77.4126
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/amaneventsbhopal",
                "https://www.instagram.com/amaneventsbhopal"
              ]
            }
          `}
            </script>
        </Helmet>
    );
};

export default SEO
