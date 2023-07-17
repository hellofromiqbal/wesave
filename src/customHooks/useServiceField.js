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
      title: "Web Application Penetration Testing",
      desc: "Protect your online presence with our thorough vulnerability analysis and robust security recommendations for web applications."
    },
    "external-network-penetration-testing": {
      title: "External Network Penetration Testing",
      desc: "Secure your organization's perimeter. We highlight vulnerabilities and empower your team to fortify against external cyber threats."
    },
    "internal-network-penetration-testing": {
      title: "Internal Network Penetration Testing",
      desc: "Safeguard your sensitive data from threats within. We provide comprehensive solutions to strengthen your internal defenses."
    },
    "cloud-security-review": {
      title: "Cloud Security Review",
      desc: "Optimize your cloud infrastructure's security with our comprehensive evaluations and strategic recommendations."
    },
    "security-compilance": {
      title: "Security Compilance",
      desc: "Stay compliant and avoid penalties with our detailed audits and practical guidance to align with regulatory standards and best practices."
    },
    "security-strategy": {
      title: "Security Strategy",
      desc: "Build a proactive, custom security strategy that suits your business needs, creating a secure and prosperous business environment."
    },
  };
  
  return content[serviceFieldId];
};

export default useServiceField;