---
category: Data Science
title: Predicting Fall Risk from Motion Data
summary: "My master’s thesis project: building and evaluating a motion-based fall risk prediction pipeline using 3D skeleton data and transfer learning."
businessQuestion: How can 3D skeletal motion data be used to build a reliable and generalizable fall-risk prediction pipeline for real-world healthcare screening?
methods:
  - Data exploration and quality diagnostics
  - Subject-level data splitting
  - Transfer learning with ST-GCN
  - Comparative model evaluation
  - Generalization analysis across collection locations
tools:
  - Python
  - PyTorch
  - scikit-learn
  - PYSKL
dataSource: 3D skeletal motion clips from standardized balance and mobility tests collected in Dutch care and community settings.
outcomes:
  - Built an end-to-end fall-risk prediction pipeline from raw skeletal sequences to evaluated models.
  - Showed transfer learning gains were real but modest under domain mismatch.
  - Compared in-domain and cross-location generalization to surface practical deployment trade-offs.
  - Identified noisy joints and subgroup variability as key reliability constraints.
featured: true
featuredRank: 2
links:
  - label: iBalance
    href: https://www.kinetic-analysis.com/ibalance
---

<div class="project-snapshot-stack">
  <div class="project-snapshot-line">
    <strong>Focus:</strong>
    <div class="pill-row">
      <span class="pill">Machine Learning</span>
      <span class="pill">Transfer learning</span>
      <span class="pill">Healthcare application</span>
      <span class="pill">Motion data analysis</span>
    </div>
  </div>
  <div class="project-snapshot-line">
    <strong>Tools:</strong>
    <div class="pill-row">
      <span class="pill">Python</span>
      <span class="pill">PyTorch</span>
      <span class="pill">scikit-learn</span>
      <span class="pill">PYSKL</span>
    </div>
  </div>
  <div class="project-snapshot-line">
    <strong>Outputs:</strong>
    <div class="pill-row">
      <span class="pill">Fall risk prediction pipeline</span>
      <span class="pill">Comparative model evaluation</span>
      <span class="pill">Generalization assessment</span>
    </div>
  </div>
</div>

## Overview

This project was my master’s thesis in Data Science & Society, completed in collaboration with Kinetic Analysis. It was part of the development of [iBalance](https://www.kinetic-analysis.com/ibalance). Earlier iBalance research showed that skeletal motion clips from balance tests can be used for fall risk assessment. In simple terms, instead of relying only on manual observation, the idea is to use motion data to support faster and more precise screening. That is what made the project feel meaningful to me from the start: it was not just a technical exercise, but part of a real healthcare application.

## The Data

The data came from older adults in the Netherlands performing standardized balance and mobility tests in places such as nursing homes, clinics, and community settings. During each test, depth cameras recorded body movement and converted it into 3D coordinates of body joints over time. In other words, each motion clip became a time series of how different joints moved through space. The training labels were based on whether a participant had experienced a real fall in the previous six months.

Like many real-world datasets, this one was messy. The motion data contained substantial noise, the classes were imbalanced, and there was also meaningful variation across collection sites because tests were carried out in different environments. That meant the project was never just about training a model. A useful result would only be possible if I first understood the data and worked through those practical issues carefully.

## What I Worked On

<div class="project-flow">
  <span>Data preparation</span>
  <span>→</span>
  <span>EDA</span>
  <span>→</span>
  <span>Data splitting & formatting</span>
  <span>→</span>
  <span>Model configuration</span>
  <span>→</span>
  <span>Hyperparameter tuning</span>
  <span>→</span>
  <span>Evaluation & analysis</span>
</div>

The first step was understanding the data. I explored dataset structure, visualized motion clips, and checked patterns that could affect model behavior.

<figure class="project-figure-card project-figure-card-centered project-video-card">
  <img src="../../figures/motion_clip.gif" alt="Example skeletal motion clip used during exploratory analysis" class="project-inline-video" loading="lazy" />
  <figcaption>Motion clip visualization</figcaption>
</figure>

That early analysis was important: it revealed clear differences between testing locations and highlighted especially noisy hand-joint signals.

From there, I prepared the data for modeling. I created comparable dataset variants, converted data into model-ready format, and split data at the subject level into train, validation, and test sets. Subject-level splitting matters because it prevents the model from being evaluated on clips from the same person seen during training.

I also reviewed the literature to map key model families and practical trade-offs in this niche domain. The final modeling strategy was selected by balancing evidence, dataset size, compute limits, and deployment realism, rather than simply choosing the most complex architecture.

The core training work was paired with broader analysis: not only whether performance improved, but which tests were most informative, which data segments reduced reliability, and which variation patterns made generalization harder.

## Modelling Approach

The main model in this project was ST-GCN (Spatial-Temporal Graph Convolutional Network). Instead of treating the body as a flat list of values, ST-GCN represents joints as a connected graph. This lets the model learn both spatial relationships between joints and temporal movement patterns over time.

Because the dataset was relatively small, the main experiments used transfer learning: pre-training on a larger skeleton-action dataset, then fine-tuning on the fall-risk task. I compared transfer and non-transfer settings, different class weights for imbalance, clip lengths, learning rates, layer-freezing strategies, and variants with and without noisy joints.

## Key Findings

The results were mixed, but useful. Transfer learning helped, but modestly, suggesting meaningful mismatch between generic action pre-training data and subtle balance-related fall-risk signals.

The GCN model generalized better than Kinetic Analysis’s earlier CNN baseline on completely unseen locations, while the CNN remained stronger on unseen respondents from familiar locations. This is a key deployment insight: under real healthcare conditions, cross-environment robustness can be more valuable than peak in-domain performance.

The deeper analysis also surfaced practical improvement directions: some test categories were more informative, certain subgroups introduced instability due to collection differences, and removing noisy joints improved reliability more consistently than keeping them.

## Final Takeaway

What matters most to me about this project is that it was not only academic work, but applied research on imperfect real-world data under realistic constraints.

As the final project of my master’s degree, it brought together technical modeling, research design, and decision-focused interpretation. It reflects how I approach unfamiliar domains: explore rigorously, structure uncertainty, and make trade-offs explicit.

For my future career, the value goes beyond training a deep model. More importantly, it strengthened the kind of data science I want to keep doing: working with messy data, evaluating robustness honestly, and producing conclusions that are useful and actionable in real settings.

<div class="project-github-link">
  <hr />
  The project code is available on <a href="https://github.com/xinyuexc/fall-risk-assessment" target="_blank" rel="noreferrer">GitHub</a>.
</div>
