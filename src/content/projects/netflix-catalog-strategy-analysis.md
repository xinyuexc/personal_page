---
title: Netflix Catalog Strategy Analysis
summary: Reframed public Netflix metadata into a catalog strategy analysis, built a reproducible analytics pipeline, and translated results into business-ready insights on content mix, freshness, market concentration, and international expansion.
businessQuestion: How can public title metadata be structured into a decision-useful view of catalog strategy, including content mix, freshness, geographic concentration, and segment-level patterns?
methods:
  - Data cleaning and QA checks
  - Normalized bridge-table modeling
  - Feature engineering for freshness and concentration
  - Time-evolution analysis
  - Interpretable clustering
  - Talent ecosystem network analysis
tools:
  - Python
  - pandas
  - NumPy
  - scikit-learn
  - Jupyter
  - Matplotlib / Seaborn
  - SQL-style data modeling
dataSource: Netflix titles metadata from Kaggle (metadata only; no viewership or revenue signals).
outcomes:
  - Built a reproducible end-to-end workflow from raw metadata to business-facing outputs.
  - Quantified catalog structure with clear strategic signals (movie-led mix, adult-skewed positioning, and concentrated country supply).
  - Showed that TV inventory is structurally fresher than movie inventory, indicating different catalog roles.
  - Tracked geographic diversification over time and identified the late-2010s expansion followed by stabilization.
  - Produced executive-ready charts and narrative summaries suitable for portfolio and stakeholder communication.
featured: true
featuredRank: 1
links:
  - label: GitHub Repository
    href: https://github.com/xinyuexc/netflix-catalog-strategy-analysis
---

## What I did

I designed this as a **business-oriented analytics project**, not a one-off EDA notebook. I built a staged workflow that starts with cleaning and QA, normalizes multi-value fields into bridge tables, and produces a reusable analytical layer for answering strategic catalog questions.

For a hiring manager, this project demonstrates that I can:

- define a business question clearly and constrain claims to what the data can actually support,
- build a reproducible analysis workflow with interpretable methods,
- quantify patterns with defensible metrics,
- and communicate outputs in a way non-technical stakeholders can use.

## Selected results

- **Catalog structure:** Movies account for 68.4% of titles, so the library remains movie-led in volume.
- **Audience positioning:** Mature + Teen titles account for 72.5% of the catalog, indicating adult-skewed positioning.
- **Country concentration:** Supply is broad but concentrated; top-3 countries account for 56.4% of country-tagged titles.
- **Freshness pattern:** TV inventory is materially fresher than movie inventory, supporting different strategic roles.

![Catalog concentration view](/figures/netflix-concentration-curves.png)

![Geographic diversification over time](/figures/netflix-geographic-diversification.png)

## Scope and limits

This project is based on metadata and is intended for catalog-structure analysis. It does not support claims about viewership, retention, popularity, or revenue.
