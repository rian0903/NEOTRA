'use client';

import { useState, useEffect } from 'react';
import {
  HERO_DATA as initialHero,
  POSITIONING_DATA as initialPositioning,
  NAV_LINKS as initialNavLinks,
  WORK_ITEMS as initialWorkItems,
  SERVICES as initialServices,
  CONTACT_DATA as initialContact,
} from '@/data/content';
import { WorkItem, Service } from '@/types';

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface InquiryRecord {
  id: string;
  full_name: string;
  contact: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
}

const STORAGE_KEYS = {
  HERO: 'neotra_site_hero',
  POSITIONING: 'neotra_site_positioning',
  NAV_LINKS: 'neotra_site_nav_links',
  WORK_ITEMS: 'neotra_site_work_items',
  SERVICES: 'neotra_site_services',
  CONTACT: 'neotra_site_contact',
  INQUIRIES: 'neotra_site_inquiries',
};

export function useSiteData() {
  const [heroData, setHeroData] = useState(initialHero);
  const [positioningData, setPositioningData] = useState(initialPositioning);
  const [navLinks, setNavLinks] = useState<NavLinkItem[]>(initialNavLinks);
  const [workItems, setWorkItems] = useState<WorkItem[]>(initialWorkItems);
  const [services, setServices] = useState<Service[]>(initialServices);
  const [contactData, setContactData] = useState(initialContact);
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from localStorage on initial render
  useEffect(() => {
    try {
      const storedHero = localStorage.getItem(STORAGE_KEYS.HERO);
      if (storedHero) setHeroData(JSON.parse(storedHero));

      const storedPositioning = localStorage.getItem(STORAGE_KEYS.POSITIONING);
      if (storedPositioning) setPositioningData(JSON.parse(storedPositioning));

      const storedNav = localStorage.getItem(STORAGE_KEYS.NAV_LINKS);
      if (storedNav) setNavLinks(JSON.parse(storedNav));

      const storedWork = localStorage.getItem(STORAGE_KEYS.WORK_ITEMS);
      if (storedWork) setWorkItems(JSON.parse(storedWork));

      const storedServices = localStorage.getItem(STORAGE_KEYS.SERVICES);
      if (storedServices) setServices(JSON.parse(storedServices));

      const storedContact = localStorage.getItem(STORAGE_KEYS.CONTACT);
      if (storedContact) setContactData(JSON.parse(storedContact));

      const storedInquiries = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      if (storedInquiries) setInquiries(JSON.parse(storedInquiries));
    } catch (e) {
      console.error('Error loading site data from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Sync state changes to localStorage
  const saveHero = (data: typeof initialHero) => {
    setHeroData(data);
    localStorage.setItem(STORAGE_KEYS.HERO, JSON.stringify(data));
  };

  const savePositioning = (data: typeof initialPositioning) => {
    setPositioningData(data);
    localStorage.setItem(STORAGE_KEYS.POSITIONING, JSON.stringify(data));
  };

  const saveNavLinks = (data: NavLinkItem[]) => {
    setNavLinks(data);
    localStorage.setItem(STORAGE_KEYS.NAV_LINKS, JSON.stringify(data));
  };

  const saveWorkItems = (data: WorkItem[]) => {
    setWorkItems(data);
    localStorage.setItem(STORAGE_KEYS.WORK_ITEMS, JSON.stringify(data));
  };

  const saveServices = (data: Service[]) => {
    setServices(data);
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(data));
  };

  const saveContact = (data: typeof initialContact) => {
    setContactData(data);
    localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(data));
  };

  const saveInquiries = (data: InquiryRecord[]) => {
    setInquiries(data);
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(data));
  };

  const addInquiry = (inquiry: Omit<InquiryRecord, 'id' | 'timestamp'>) => {
    const newRecord: InquiryRecord = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      timestamp: new Date().toLocaleString('id-ID'),
    };
    const updated = [newRecord, ...inquiries];
    saveInquiries(updated);
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiries(updated);
  };

  const resetToDefaults = () => {
    saveHero(initialHero);
    savePositioning(initialPositioning);
    saveNavLinks(initialNavLinks);
    saveWorkItems(initialWorkItems);
    saveServices(initialServices);
    saveContact(initialContact);
  };

  return {
    isLoaded,
    heroData,
    positioningData,
    navLinks,
    workItems,
    services,
    contactData,
    inquiries,
    saveHero,
    savePositioning,
    saveNavLinks,
    saveWorkItems,
    saveServices,
    saveContact,
    addInquiry,
    deleteInquiry,
    resetToDefaults,
  };
}
