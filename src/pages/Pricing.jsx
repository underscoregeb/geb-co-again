import React from 'react';
import PlanCard from '../components/planCard/planCard';

const plan_free = {
  title: "Free",
  description: "Empower your journey with cloud-native essentials",
  features: [
    "Up to 3 users",
    "1 workspace",
    "Basic analytics dashboard",
    "5GB storage",
    "Core integrations",
    "2 basic workflows",
    "7-day revision history",
  ],
  price: "$0/month",
  button: "Get Started"
};

const plan_starter = {
  title: "Starter",
  description: "Scale your impact with next-gen collaboration",
  features: [
    "Up to 10 users",
    "3 workspaces",
    "Advanced analytics",
    "50GB storage",
    "Unlimited workflows",
    "Basic AI features",
    "30-day revision history",
    "Basic user provisioning",
    "API access",
    "Integrate with Jira and Slack",

  ],
  price: "$29/month",
  button: "Start Free Trial"
};

const plan_professional = {
  title: "Professional",
  description: "Accelerate growth with enterprise-ready solutions",
  features: [
    "Up to 99 users",
    "Unlimited workspaces",
    "Premium analytics suite",
    "1TB storage",
    "Unlimited workflows",
    "Advanced AI capabilities",
    "Unlimited revision history",
    "Advanced user provisioning",
    "Single Sign-On (SSO)",
    "Custom workflow templates",
    "Complete ACLs",
    "Priority feature access"

  ],
  price: "$99/month",
  button: "Start Free Trial"
};

const plan_enterprise = {
  title: "Enterprise",
  description: "Transform your organization with ultimate scalability",
  features: [
    "Unlimited users",
    "Unlimited storage",
    "24/7 premium support",
    "Custom analytics",
    "Advanced AI suite",
    "Custom integrations",
    "Enterprise SSO",
    "Custom SLA",
    "MDM Provisioning",
    "SSH session recording",
    "Advanced security",
    "On-premise deployment",
    "Automated Onboarding",
    "Custom API access",
    "30-day Audit logs",
  ],
  price: "Custom",
  button: "Contact Sales"
};

function Page() {
    return (
      <>
        <div className='doc-content'>
          
          <h1>Scalable workflows for all cases</h1>
          <p>
            Our plans deliver the tools needed to build and scale end-to-end experiences.
          </p>
        </div>
        <div className='pricing-grid slide-in'>
          <PlanCard {...plan_free} />
          <PlanCard {...plan_starter} />
          <PlanCard {...plan_professional} />
          <PlanCard {...plan_enterprise} />
        </div>
        
      </>
    )
  }
  
  export default Page