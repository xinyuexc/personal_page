---
category: Data Analysis & Engineering
title: Netflix Catalog Strategy Analysis
summary: A business-oriented case study that uses public Netflix title data to analyze catalog structure, evolution, and strategic patterns beyond standard EDA.
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

<div class="project-snapshot-stack">
  <div class="project-snapshot-line">
    <strong>Focus:</strong>
    <div class="pill-row">
      <span class="pill">Business analytics</span>
      <span class="pill">Data cleaning</span>
      <span class="pill">Feature engineering</span>
      <span class="pill">Segmentation</span>
      <span class="pill">Portfolio storytelling</span>
    </div>
  </div>
  <div class="project-snapshot-line">
    <strong>Tools:</strong>
    <div class="pill-row">
      <span class="pill">Python</span>
      <span class="pill">pandas</span>
      <span class="pill">Jupyter notebook</span>
      <span class="pill">Data modelling</span>
    </div>
  </div>
  <div class="project-snapshot-line">
    <strong>Outputs:</strong>
    <div class="pill-row">
      <span class="pill">Reproducible pipeline</span>
      <span class="pill">Strategic analysis</span>
      <span class="pill">Executive-ready figures</span>
    </div>
  </div>
</div>

## Overview

This project started from a simple question: instead of treating the public Netflix titles dataset as a generic exploratory analysis exercise, what would it look like to approach it as a catalog strategy problem?

I designed this as a portfolio-grade analytics case study, not a one-off notebook. The goal was to turn public metadata into decision-oriented insight: understand how the catalog is structured, how it changes over time, and which patterns are strategically meaningful. Rather than predicting performance, I focused on clear analytical logic, realistic scope, and stakeholder-ready outputs.

## The Problem I Wanted to Solve

A lot of public data projects stop at descriptive charts. I wanted to push this one further by framing it around business questions such as:

- Is the catalog more movie-led or TV-led?
- How fresh is the library, and how quickly are titles added after release?
- How international is the catalog, and how concentrated is content supply?
- What does the rating mix suggest about audience positioning?
- Are there interpretable content segments and recurring creative ecosystems inside the catalog?

That framing shaped both the analysis design and the final outputs. Instead of producing a loose set of visuals, I focused on a small set of questions that can support real stakeholder discussions on catalog direction.

## What I Built

I built the project as an end-to-end analytics workflow with reusable components:

- Reproducible cleaning and QA pipeline
- Normalized analytical tables, including bridge structures for countries, genres, cast, and directors
- Feature layer for freshness, lag, concentration, and breadth
- Business-facing visual outputs for stakeholder communication

The repository is organized into `data`, `src`, `notebooks`, and `outputs` so the workflow is easy to audit, reproduce, and extend. This reflects how I typically work: build a reliable structure first, then layer interpretation on top.

## Analytical Approach

<div class="project-flow">
  <span>Data audit & cleaning</span>
  <span>→</span>
  <span>Feature engineering</span>
  <span>→</span>
  <span>Business metrics</span>
  <span>→</span>
  <span>Segmentation & ecosystem view</span>
  <span>→</span>
  <span>Executive-ready outputs</span>
</div>

First, I audited data quality and built a cleaned analytical base. I reviewed missingness, made explicit assumptions for ratings and date parsing, and normalized multi-value fields (country, genre, cast, director) into bridge tables so later analysis would be consistent and reusable.

Next, I built the business analysis layer with features such as release-to-add lag, freshness, country breadth, and rating groups. I used concentration metrics and co-occurrence analysis, and handled metadata anomalies (for example negative lags) by excluding them from affected metrics.

In the later phase, I added time evolution, interpretable segmentation, and creator/cast ecosystem analysis. Titles were grouped into six business-readable segments using a compact feature set, and outputs were kept commercial and practical rather than overly academic.

## Key Findings

<figure class="project-figure-card project-figure-card-centered">
  <img src="../../figures/netflix-release-to-add-lag.png" alt="Release-to-add lag comparison between Movies and TV Shows" loading="lazy" />
  <figcaption>Freshness view: TV inventory is added faster than movie inventory.</figcaption>
</figure>

1. **TV is structurally fresher than Movies.** 80.3% of TV shows were added within 3 years versus 64.6% for movies, suggesting different catalog roles and planning horizons.

<figure class="project-figure-card project-figure-card-centered">
  <img src="../../figures/netflix-concentration-curves.png" alt="Concentration curves showing catalog supply concentration" loading="lazy" />
  <figcaption>Concentration view: broad catalog footprint, but concentrated supply.</figcaption>
</figure>

2. **The catalog is international but concentrated.** Top 3 countries account for 56.4% and top 10 for 76.5% of country-tagged titles, highlighting where diversification could have the biggest impact.

<figure class="project-figure-card project-figure-card-centered">
  <img src="../../figures/netflix-geographic-diversification.png" alt="Geographic diversification over time" loading="lazy" />
  <figcaption>Time view: geographic diversification accelerated then stabilised.</figcaption>
</figure>

3. **Diversification shows a clear phase shift.** Geographic breadth expanded quickly in the late 2010s, then stabilized, which supports lifecycle-based strategy instead of one constant growth assumption.

<figure class="project-figure-card project-figure-card-centered">
  <img src="../../figures/netflix-cluster-profile-heatmap.png" alt="Cluster profile heatmap of catalog segments" loading="lazy" />
  <figcaption>Segmentation view: six interpretable catalog segments.</figcaption>
</figure>

4. **The catalog is more actionable as segments.** A six-segment view is easier for prioritization, communication, and KPI tracking than treating the library as one undifferentiated pool.

<figure class="project-figure-card project-figure-card-centered project-figure-card-ecosystem">
  <img src="../../figures/netflix-cast-ecosystem-network.png" alt="Cast ecosystem network showing recurring creative communities" loading="lazy" />
  <figcaption>Ecosystem view: recurring talent communities indicate repeatable creative patterns.</figcaption>
</figure>

5. **Recurring creative ecosystems are visible.** Repeated cast-network patterns suggest parts of the catalog are built through repeatable communities, adding a useful lens beyond format and genre mix.

## Final Takeaway

The value of this project is less about one platform and more about a repeatable BI-style workflow. It shows how I move from ambiguous data to usable business output: define decision-relevant questions, build a reliable analytical structure, produce clear metrics and visuals, and communicate results in stakeholder-friendly language. In a role, this is the combination I aim to bring: strong analytical execution plus practical, decision-oriented communication.

<div class="project-github-link">
  The full project materials — including data, code, and notebooks — are available in the <a href="https://github.com/xinyuexc/netflix-catalog-strategy-analysis" target="_blank" rel="noreferrer">GitHub repository</a>.
</div>
