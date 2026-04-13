---
category: Data Science
title: Supply Chain Optimization for Food Distribution
summary: A decision-oriented optimization project that uses linear programming to design a cost-minimizing food supply chain and show which constraints matter most in real-world operations.
businessQuestion: How can a food distribution network be designed to minimize total cost while satisfying procurement, transport, storage, and nutrition constraints?
methods:
  - Optimization problem framing
  - Constraint modeling
  - Linear programming
  - Sensitivity analysis
  - Scenario testing
tools:
  - Python
  - CVXPY
  - Linear programming
  - Mixed-integer programming
dataSource: World Food Programme case scenario data for one-month food distribution planning in Ethiopia.
outcomes:
  - Built a supply chain optimization model for procurement and routing decisions.
  - Produced a cost-minimizing one-month distribution plan under operational constraints.
  - Identified which constraints have the largest impact on total cost.
featured: false
links: []
---

<div class="project-snapshot-stack">
  <div class="project-snapshot-line">
    <strong>Focus:</strong>
    <div class="pill-row">
      <span class="pill">Optimization</span>
      <span class="pill">Constraint-based decision-making</span>
      <span class="pill">Sensitivity analysis</span>
      <span class="pill">Scenario planning</span>
    </div>
  </div>
  <div class="project-snapshot-line">
    <strong>Tools:</strong>
    <div class="pill-row">
      <span class="pill">Python</span>
      <span class="pill">CVXPY</span>
      <span class="pill">Linear programming</span>
      <span class="pill">Mixed-integer programming</span>
    </div>
  </div>
  <div class="project-snapshot-line">
    <strong>Outputs:</strong>
    <div class="pill-row">
      <span class="pill">Supply chain optimization model</span>
      <span class="pill">Cost-minimizing distribution plan</span>
      <span class="pill">Scenario-based recommendations</span>
    </div>
  </div>
</div>

## Overview

This case was based on a World Food Programme scenario. It was built around a realistic supply chain design problem: how to feed beneficiaries across Ethiopia for one month at minimum cost, while respecting procurement, transport, storage, and nutrition constraints.

What I liked about this project was that it showed a different kind of data science problem. There was no model training here, and no prediction target. The challenge was to take a messy real-world system with many moving parts, translate it into a mathematical decision model, and use that model to produce recommendations. In other words, the point was not just to analyse the system, but to decide how it should operate under constraints.

## The Decision Problem

The project worked with a supply chain that had many moving parts and many constraints. Different food types could only be sourced from certain countries. Ports and warehouses had limited capacity. Camps had to receive enough nutrition, not just enough volume. And routing decisions at one point in the network affected costs and feasibility elsewhere.

So the real problem was not simply cost reduction. It was about finding the cheapest plan that still worked in operational terms.

## What I Worked On

<div class="project-flow">
  <span>Decision framing</span>
  <span>→</span>
  <span>Constraint modelling</span>
  <span>→</span>
  <span>Optimization</span>
  <span>→</span>
  <span>Sensitivity analysis</span>
  <span>→</span>
  <span>Scenario testing</span>
  <span>→</span>
  <span>Recommendations</span>
</div>

The main work in this project was translating a messy operational problem into a linear programming model in CVXPY that could be solved mathematically to find the minimum-cost plan and the corresponding procurement and routing decisions. I worked on defining the decision variables, building the objective function, and formalizing the constraints in a way that reflected the supply chain realistically enough to be useful.

But the more important part was using the model to understand the structure of the problem: where the bottlenecks were, which constraints mattered most, and what kinds of changes would actually improve the system. That is where the project became more than a technical exercise.

## Key Findings

The base LP solution produced a one-month supply chain with a total cost of $36M, together with a detailed procurement and distribution plan.

But one of the more useful findings was that not all constraints matter equally. The analysis showed that procurement capacity mattered much more than port or warehouse capacity in driving the total cost of the system. In other words, the real leverage point was upstream: if procurement options improve, the whole network becomes cheaper; if mid-network capacity changes, the impact is much smaller.

This is also what made the method valuable to me. It is not just about finding an optimal solution once, but about showing where action is most worthwhile.

## Final Takeaway

This project shows a different kind of problem I can solve. Instead of using machine learning to predict outcomes, I used linear programming to model a real operational system, identify the constraints that matter most, and produce decision-ready recommendations. More broadly, it reflects the workflow I value in data science: clarify the problem, choose the right method, test the key trade-offs, and turn the analysis into something useful.
