import React from 'react';

import {
  BsKey as IconKey,
  BsCloud as IconCloud,
  BsGlobe2 as IconGlobe,
} from 'react-icons/bs';
import { BiCctv as IconCCTV } from 'react-icons/bi';
import { GoShieldLock as IconShield } from 'react-icons/go';
import { SlLock as IconLock } from 'react-icons/sl';

const useServiceField = (serviceFieldId) => {
  let content = {
    "web-application-penetration-testing": {
      icon: IconShield(),
      title: "Web Application Penetration Testing",
      desc: "In today's interconnected digital world, web applications are a crucial part of any business strategy. However, they also present a significant cyber risk. Protect your applications with our comprehensive Web Application Penetration Testing services. We simulate real-world attacks to identify vulnerabilities, helping you keep your digital doors secure."
    },
    "external-network-penetration-testing": {
      icon: IconKey(),
      title: "External Network Penetration Testing",
      desc: "Safeguard your organization's entire external digital footprint with our comprehensive External Network Penetration Testing services. We take a holistic approach, covering your network infrastructure, email/DNS configuration, and even any leaked Personally Identifiable Information (PII)."
    },
    "internal-network-penetration-testing": {
      icon: IconLock(),
      title: "Internal Network Penetration Testing",
      desc: "In the modern cybersecurity landscape, external threats are just one part of the picture. Internal threats can be equally, if not more, damaging. Our Internal Network Penetration Testing services help you secure your digital environment from the inside out. We simulate real-world cyber attacks on your internal network to identify and rectify vulnerabilities, reinforcing your security posture."
    },
    "cloud-security-review": {
      icon: IconCloud(),
      title: "Cloud Security Review",
      desc: "In the era of digital transformation, organizations increasingly rely on cloud technologies to drive innovation, efficiency, and growth. However, the shift to the cloud also brings about new security challenges. Our Cloud Security Review service provides a comprehensive evaluation of your cloud environments to identify potential vulnerabilities and ensure that your data remains secure in the cloud."
    },
    "security-compilance": {
      icon: IconGlobe(),
      title: "Security Compilance",
      desc: "Navigating the complex world of cybersecurity regulations and standards can be challenging. Our Security Compliance services are designed to help your organization understand and meet the requirements of cybersecurity regulations applicable to your industry. Whether you're aiming for ISO 27001 certification, adhering to the GDPR, or meeting other regulatory standards, we are here to assist you."
    },
    "security-strategy": {
      icon: IconCCTV(),
      title: "Security Strategy",
      desc: "As the threat landscape continues to evolve, having a robust cybersecurity strategy is no longer optional; it's a necessity. Our Security Strategy services help you define, develop, and implement a comprehensive cybersecurity strategy that aligns with your business objectives and safeguards your digital assets."
    },
  };
  
  return content[serviceFieldId];
};

export default useServiceField;