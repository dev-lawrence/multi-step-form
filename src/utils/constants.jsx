import Arcade from '../assets/icon-arcade.svg';
import Advanced from '../assets/icon-advanced.svg';
import Pro from '../assets/icon-pro.svg';

export const HeaderData = [
  {
    title: 'Personal info',
    subTitle: 'Please provide your name, email address, and phone number.',
  },

  {
    title: 'Select your plan',
    subTitle: 'You have the option of monthly or yearly billing.',
  },

  {
    title: 'Pick add-ons',
    subTitle: 'Add-ons help enhance your gaming experience.',
  },

  {
    title: 'Finishing up',
    subTitle: 'Double-check everything looks OK before confirming.',
  },
];

export const progressData = [
  {
    step: 1,
    title: 'step 1',
    info: 'your info',
  },

  {
    step: 2,
    title: 'step 2',
    info: 'select plans',
  },

  {
    step: 3,
    title: 'step 3',
    info: 'add-ons',
  },

  {
    step: 4,
    title: 'step 4',
    info: 'summary',
  },
];

export const plans = [
  {
    name: 'Arcade',
    img: Arcade,
    monthlyPrice: 9,
    yearlyPrice: 90,
    trial: '2 months free',
  },

  {
    name: 'Advanced',
    img: Advanced,
    monthlyPrice: 12,
    yearlyPrice: 120,
    trial: '2 months free',
  },

  {
    name: 'Pro',
    img: Pro,
    monthlyPrice: 15,
    yearlyPrice: 150,
    trial: '2 months free',
  },
];

export const addOns = [
  {
    title: 'Online service',
    text: 'Access to multiplayer games',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },

  {
    title: 'Larger storage',
    text: 'Extra 1 TB of cloud save',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },

  {
    title: 'Customizable Profile',
    text: 'Custom theme on your',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];

export const finishingUp = [
  {
    title: 'Online service',
    monthlyPrice: 1,
    yearlyPrice: 10,
  },

  {
    title: 'Larger storage',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },

  {
    title: 'Customizable Profile',
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
