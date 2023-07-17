import React from 'react';

import SectionLayout from '../components/layouts/SectionLayout';
import CardGroup from '../components/fragments/CardGroup';
import Card from '../components/elements/Card';

import {
  BsKey as IconKey,
  BsCloud as IconCloud,
  BsGlobe2 as IconGlobe,
} from 'react-icons/bs';
import { BiCctv as IconCCTV } from 'react-icons/bi';
import { GoShieldLock as IconShield } from 'react-icons/go';
import { SlLock as IconLock } from 'react-icons/sl';


const ServicesSec = (props) => {
  const { sectionbgcolor = "bg-white", cardcolor="bg-white" } = props;

  const services = [
    {
      id: 1,
      icon: <IconShield/>,
      title: "Web Application Penetration Testing",
      desc: "Protect your online presence with our thorough vulnerability analysis and robust security recommendations for web applications.",
      link: "/services/web-application-penetration-testing"
    },
    {
      id: 2,
      icon: <IconKey/>,
      title: "External Network Penetration Testing",
      desc: "Secure your organization's perimeter. We highlight vulnerabilities and empower your team to fortify against external cyber threats.",
      link: "/services/external-network-penetration-testing"
    },
    {
      id: 3,
      icon: <IconLock/>,
      title: "Internal Network Penetration Testing",
      desc: "Safeguard your sensitive data from threats within. We provide comprehensive solutions to strengthen your internal defenses.",
      link: "/services/internal-network-penetration-testing"
    },
    {
      id: 4,
      icon: <IconCloud/>,
      title: "Cloud Security Review",
      desc: "Optimize your cloud infrastructure's security with our comprehensive evaluations and strategic recommendations.",
      link: "/services/cloud-security-review"
    },
    {
      id: 5,
      icon: <IconGlobe/>,
      title: "Security Compilance",
      desc: "Stay compliant and avoid penalties with our detailed audits and practical guidance to align with regulatory standards and best practices.",
      link: "/services/security-compilance"
    },
    {
      id: 6,
      icon: <IconCCTV/>,
      title: "Security Strategy",
      desc: "Build a proactive, custom security strategy that suits your business needs, creating a secure and prosperous business environment.",
      link: "/services/security-strategy"
    }
  ];

  return (
    <SectionLayout
      sectionid="services"
      bgcolor={sectionbgcolor} padding="pt-6"
    >
      <div className='w-full md:w-1/2 mx-auto text-center'>
        <h3 className='font-semibold text-sm md:text-base lg:text-xl'>Protection models</h3>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl my-2'>
          Various <span className='text-blue-700'>Solid</span> Protection
        </h2>
      </div>
      <CardGroup>
        {services.map((service) => (
          <Card
            key={service.id}
            bgcolor={cardcolor}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
            link={service.link}
          />
        ))}
      </CardGroup>
    </SectionLayout>
  )
};

export default ServicesSec;