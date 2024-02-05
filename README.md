<h1 align="center">Landing with Marketing Quiz Integration</h1>

# DEMO

[DEMO LINK](https://solidgate-test-task-quiz.vercel.app/)
<br />

# 🚀 Getting Started

To start the application:

```
npm install
```

# ⚡️ Next.js

```
npm run build
```

```
npm start
```

# ⚡️ Docker

```
docker compose build
```

```
docker compose up
```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

# A/B Testing Implementation

## Objective

The objective of this part is to guide the implementation of A/B testing for a specific element on the page, such as changing the color of a Call-to-Action (CTA) button.

## 1. Define the Hypothesis

**Hypothesis:** Changing the color of the CTA button from blue to blue-black will result in a higher click-through rate (CTR) due to increased visibility and user engagement.

## 2. Identify the Element to Test

We are focusing on the CTA button. The specific CSS property to change is the background color.

## 3. Set Up A/B Testing Infrastructure

### 3.1. Variation Creation

Create two variations of the page:

- **Control (A):** The original page with the existing blue CTA button.
- **Treatment (B):** The variant with the modified blue-black CTA button.

### 3.2. Random Assignment

Randomly assign users to either the control or treatment group.

### 3.3. Data Collection

Implement mechanisms to collect relevant data, such as user interactions (clicks), and any other key performance indicators (KPIs) you want to measure.

## 4. Implementation in Code

Modify the code to incorporate the A/B test variations. This may involve adjusting the CSS styles for the CTA button, implementing logic for random assignment, and logging user interactions.

## 5. Tracking and Analytics

Utilize analytics tools to track and analyze the performance of each variation. Popular tools include Google Analytics, Mixpanel, or custom event tracking. In this project I mocked up it using endpoint which takes the variant of button and incement its click counter in static json file. Shown in presentation video.

### 5.1. Metrics to Track

- **Click-Through Rate (CTR):** The percentage of users who click on the CTA button.
- **Conversion Rate:** The percentage of users who complete the desired action (e.g., sign up) after clicking the CTA.
- **Mock** In this project it collects only click counter for both variants. 

## 6. Run the Experiment

Launch the A/B test and allow it to run for a sufficient duration to gather statistically significant data. Avoid making any additional changes to the tested element during this period to ensure the integrity of the results.

## 7. Analyze Results

After the test period, analyze the collected data to determine the performance of each variation. Consider factors such as statistical significance, practical significance, and user feedback.

## 8. Draw Conclusions and Make Decisions

Based on the analysis, draw conclusions about the effectiveness of each variation. Decide whether to implement the change permanently, iterate on the design further, or discard the proposed modification.

## 9. Documentation

Document the results, insights gained, and any actionable next steps. Share this information with relevant stakeholders, including designers, developers, and product managers.

## Conclusion

A/B testing is a valuable technique for making data-driven decisions and optimizing the user experience. Following a systematic approach, defining clear hypotheses, and analyzing results thoroughly contribute to the success of A/B testing efforts.
