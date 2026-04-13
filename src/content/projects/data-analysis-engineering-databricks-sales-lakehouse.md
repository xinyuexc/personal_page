---
category: Data Analysis & Engineering
title: Databricks Sales Lakehouse
summary: A Databricks lakehouse project that turns raw sports equipment sales data into cleaned analytical tables and dashboard-ready outputs through Bronze, Silver, and Gold layers.
businessQuestion: How can raw sports equipment sales data be transformed into a reliable, business-ready lakehouse model that supports repeatable analytics and dashboard reporting?
methods:
  - Medallion architecture design (Bronze, Silver, Gold)
  - Data ingestion and staging
  - Data cleaning and standardization
  - Dimensional modeling for analytics
  - Dashboard-oriented data preparation
tools:
  - Databricks
  - PySpark
  - Spark SQL
  - Delta Lake
  - Unity Catalog
dataSource: Public Databricks bootcamp case data on bike and sports equipment sales.
outcomes:
  - Built an end-to-end Bronze / Silver / Gold pipeline in Databricks.
  - Produced cleaned analytical tables and business-facing modeled outputs.
  - Created dashboard-ready datasets for downstream reporting.
  - Strengthened practical understanding of analytics engineering in a lakehouse workflow.
featured: false
links: []
---

<div class="project-snapshot-stack">
  <div class="project-snapshot-line">
    <strong>Focus:</strong>
    <div class="pill-row">
      <span class="pill">Data engineering</span>
      <span class="pill">Lakehouse</span>
      <span class="pill">Data cleaning</span>
      <span class="pill">Dimensional modelling</span>
      <span class="pill">Dashboard-ready analytics</span>
    </div>
  </div>
  <div class="project-snapshot-line">
    <strong>Tools:</strong>
    <div class="pill-row">
      <span class="pill">Databricks</span>
      <span class="pill">PySpark</span>
      <span class="pill">Spark SQL</span>
      <span class="pill">Delta Lake</span>
      <span class="pill">Unity Catalog</span>
    </div>
  </div>
  <div class="project-snapshot-line">
    <strong>Outputs:</strong>
    <div class="pill-row">
      <span class="pill">Bronze / Silver / Gold pipeline</span>
      <span class="pill">Cleaned analytical tables</span>
      <span class="pill">Business-ready data model</span>
      <span class="pill">Databricks Dashboard</span>
    </div>
  </div>
</div>

## Overview

This project started from a public Databricks bootcamp case built around bike and sports equipment sales data. I used it as a hands-on way to learn how a modern lakehouse workflow is structured in practice, from raw ingestion all the way to cleaned tables and dashboards. The original bootcamp was designed as an end-to-end learning project following the Medallion Architecture (Bronze, Silver, and Gold), and explicitly positioned as a way to learn real-world data engineering and analytics workflows on Databricks.

What mattered to me was not just finishing the exercises, but rebuilding the workflow myself. I uploaded the source data into my own Databricks environment, rewrote the code there rather than simply relying on the provided notebook, built the Bronze, Silver, and Gold layers, and used the cleaned tables to create dashboards. That made the project much more useful as a learning and portfolio exercise, because it pushed me beyond following steps and into understanding how the pieces fit together.

## Medallion Architecture

One thing this project helped me understand much better is the difference between analysis and analytics engineering. In many smaller projects, the work stops at cleaning a table and making a chart. Here, the point was to build a clearer data flow:

<div class="project-flow">
  <span>Raw data</span>
  <span>→</span>
  <span>Bronze ingestion</span>
  <span>→</span>
  <span>Silver cleaning and standardization</span>
  <span>→</span>
  <span>Gold business-ready tables</span>
</div>

That meant learning not just how to query data, but how to structure it so later analysis becomes easier, more reliable, and more reusable.

At the Bronze layer, the focus was on raw ingestion and storing source data in a way that could be tracked and reused. At the Silver layer, the work shifted toward cleaning, type handling, standardization, and validation. At the Gold layer, the goal became more business-facing: shaping cleaned data into tables that are ready for BI, analysis, and reporting. That layered logic is one of the main things I wanted to take away from the project, and it is also one of the main things I would now bring into a data role.

## What I Worked On

<div class="project-flow">
  <span>Data ingestion</span>
  <span>→</span>
  <span>Bronze / Silver / Gold layering</span>
  <span>→</span>
  <span>Cleaning and validation</span>
  <span>→</span>
  <span>Business-facing modelling</span>
  <span>→</span>
  <span>Dashboard building</span>
</div>

The main practical work for me was rebuilding this flow in my own Databricks workspace. That included loading the raw data, writing transformation logic, organizing the project into Bronze, Silver, and Gold layers, and using the final cleaned tables to support dashboarding.

More importantly, the project helped me practice a workflow that comes up often in real data teams: not just answering one question, but preparing a data foundation that makes many later questions easier to answer. That includes thinking about table structure, naming, data quality, transformation boundaries, and what kind of output is actually useful for reporting.

I also used the cleaned Databricks tables to build a few simple dashboards directly in Databricks, so the project did not stop at data modeling only and included basic reporting outputs for business viewing.

<figure class="project-figure-card project-figure-card-centered">
  <img src="https://raw.githubusercontent.com/xinyuexc/databricks-sales-lakehouse/main/dashboard/products_overview_dashboard.png" alt="Databricks products overview dashboard example" loading="lazy" />
  <figcaption>Example dashboard built on top of the cleaned Gold-layer outputs.</figcaption>
</figure>

## Final Takeaway

For me, this project was a practical way to learn what a modern Databricks workflow looks like beyond isolated notebooks. It helped me build hands-on experience with the tools, but more importantly, it helped me understand the logic behind the workflow: how raw data becomes cleaned data, how cleaned data becomes a business-facing model, and how that model supports reporting.

That is the skill set I want this project to communicate: not only that I used Databricks, but that I learned how to structure data work in a more engineering-oriented and decision-oriented way.

<div class="project-github-link">
  <hr />
  The project code and more dashboard screenshots are available on <a href="https://github.com/xinyuexc/databricks-sales-lakehouse" target="_blank" rel="noreferrer">GitHub</a>.
</div>
