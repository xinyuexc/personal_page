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

This project was designed to showcase a repeatable BI-style workflow. Using a public Netflix titles dataset, I treated the work not as a generic EDA exercise, but as a catalog strategy problem.

I developed it into a portfolio-grade analytics case study built around three questions: how the catalog is structured, how the content strategy changed over time, and whether the data reveals strategically meaningful patterns such as genre groupings and recurring director or cast ecosystems.

At the same time, the scope of the project was defined by the scope of the data. The dataset does not include viewership, user behaviour, or revenue, so the analysis is limited to content strategy as reflected in the titles themselves. Like any real dataset, it also has practical limitations. For example, the data only runs through part of 2021, which affects how that year should be interpreted. A core part of the project was keeping those limits visible while still pushing the analysis as far as the data could support.

## The Business Questions

One common problem with exploratory analysis is that, without a clear question, it often stops at descriptive charts or a loose collection of visuals. After looking carefully at what the dataset actually contained, I wanted to avoid that by framing the project around a set of business questions:

- Is the catalog more movie-led or TV-led?
- How fresh is the library, and how quickly are titles added after release?
- How international is the catalog, and how concentrated is content supply?
- What does the rating mix suggest about audience positioning?
- Are there interpretable content segments and recurring creative ecosystems inside the catalog?

This framing shaped both the analysis itself and the final outputs. It also made the project feel much closer to the kinds of catalog questions real stakeholders would actually care about.

## What I Worked On

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

I started by exploring the raw data, with a strong focus on data quality. That included reviewing missingness, looking into Netflix’s actual content rating logic so I could validate and group the rating data more sensibly, parsing date fields, and normalizing multi-value columns such as country, genre, cast, and director into bridge tables. The result was a cleaner analytical structure that could support more reliable downstream analysis.

From there, I moved into a first layer of business analysis that was still relatively descriptive, but already more decision-oriented. I looked at things like country concentration, genre concentration, content freshness, and release-to-add lag, and also compared movies and TV shows across those dimensions rather than only reporting overall summaries. This stage used concentration metrics and co-occurrence analysis, and I also handled anomalies carefully. For example, excluding negative lags from the metrics they would otherwise distort.

In the more advanced stage of the project, I added time-evolution analysis, segmentation, and director/cast ecosystem analysis. Titles were grouped into six business-readable segments using a compact feature set, and I kept the outputs practical and commercially interpretable rather than overly technical.

## Key Findings

<figure class="project-figure-card project-figure-card-centered finding-figure finding-figure-1">
  <img src="../../figures/netflix-release-to-add-lag.png" alt="Release-to-add lag comparison between Movies and TV Shows" loading="lazy" />
  <figcaption>Freshness view: TV inventory is added faster than movie inventory.</figcaption>
</figure>

1. **TV is structurally fresher than Movies.** 80.3% of TV shows were added within 3 years versus 64.6% for movies, suggesting different catalog roles and planning horizons.

<hr class="project-finding-divider" />

<figure class="project-figure-card project-figure-card-centered finding-figure finding-figure-2">
  <img src="../../figures/netflix-concentration-curves.png" alt="Concentration curves showing catalog supply concentration" loading="lazy" />
  <figcaption>Concentration view: broad catalog footprint, but concentrated supply.</figcaption>
</figure>

2. **The catalog is international but concentrated.** Top 3 countries account for 56.4% and top 10 for 76.5% of country-tagged titles, highlighting where diversification could have the biggest impact.

<hr class="project-finding-divider" />

<figure class="project-figure-card project-figure-card-centered finding-figure finding-figure-3">
  <img src="../../figures/netflix-geographic-diversification.png" alt="Geographic diversification over time" loading="lazy" />
  <figcaption>Time view: geographic diversification accelerated then stabilised.</figcaption>
</figure>

3. **Diversification shows a clear phase shift.** Geographic breadth expanded quickly in the late 2010s, then stabilized, which supports lifecycle-based strategy instead of one constant growth assumption.

<hr class="project-finding-divider" />

<figure class="project-figure-card project-figure-card-centered finding-figure finding-figure-4">
  <img src="../../figures/netflix-cluster-profile-heatmap.png" alt="Cluster profile heatmap of catalog segments" loading="lazy" />
  <figcaption>Segmentation view: six interpretable catalog segments.</figcaption>
</figure>

4. **The catalog is more actionable as segments.** A six-segment view is easier for prioritization, communication, and KPI tracking than treating the library as one undifferentiated pool.

<hr class="project-finding-divider" />

<figure class="project-figure-card project-figure-card-centered project-figure-card-ecosystem finding-figure finding-figure-5">
  <img src="../../figures/netflix-cast-ecosystem-network.png" alt="Cast ecosystem network showing recurring creative communities" loading="lazy" />
  <figcaption>Ecosystem view: recurring talent communities indicate repeatable creative patterns.</figcaption>
</figure>

5. **Recurring creative ecosystems are visible.** Repeated cast-network patterns suggest parts of the catalog are built through repeatable communities, adding a useful lens beyond format and genre mix.

## Final Takeaway

This project shows how I move from ambiguous public data to usable business output: defining decision-relevant questions, building a reliable analytical structure, producing clear metrics and visuals, and then communicating the results in stakeholder-friendly language.
That is also the combination I want to bring into my future work: strong analytical execution, but always tied to practical and decision-oriented communication.

<div class="project-github-link">
  <hr />
  The full project materials — including data, code, and notebooks — are available on <a href="https://github.com/xinyuexc/netflix-catalog-strategy-analysis" target="_blank" rel="noreferrer">GitHub</a>.
</div>
