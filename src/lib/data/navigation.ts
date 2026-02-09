// Navigation items configuration for sidebar and mobile nav
export interface NavItem {
  label: string;
  href: string;
  icon: string; // Lucide icon name
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: 'Home' },
  { label: 'About', href: '/about', icon: 'User' },
  { label: 'Patients', href: '/patients/first-visit', icon: 'Heart' },
  { label: 'Education', href: '/education', icon: 'GraduationCap' }
];

// External booking URL for appointment scheduling
export const bookingUrl =
  'https://z2-rpw.phreesia.net/selfscheduling.app/#/0d1c17c2-fd65-459e-8e19-464b07a8db8f/appt-details?visittypes=8b259faa-c182-4385-8d20-22bfbc84ac15&visittypes=a48d7123-b42e-4545-ac7d-2ccb3aedc610&locations=03e90c8a-4fed-44d3-86e3-cfe262f6dfee&locations=3ec105ca-ed31-4f4b-9daf-a0ee13c51f33&locations=eef67075-0bd8-4c47-9719-e1230763b88b&providers=12885839-1ce1-45bd-8635-7f3d6c76cd96&providers=ec798516-9f20-4483-a95b-799dc745aa31&providers=f7614338-1db3-4001-9276-8a16a6b36602&providers=530f20dc-d0b3-402d-875d-5cb9d9be499e&providers=10985d56-0afe-409f-b083-95a4c3cdba03&providers=d4ce670e-73d3-462e-b581-e8c222ad084a&providers=bd65d854-19c0-4edd-a521-217fd2cc51b4&providers=89adeb95-d8ef-4244-8fdc-d75096a2a7d1&providers=0174cc98-7aa6-497b-ba9b-7a800e241ab2&providers=6815d2e6-eeee-45fd-b611-bf7a0bf5f13f&providers=ead92815-cc68-46f6-90ed-d7064b890eac&providers=b7f9c37a-c2c2-4ad1-ab05-6ab372db75ec&providers=4029172a-0231-4bce-933b-e38ba11fe5f1&providers=58505d17-30d7-4f7c-9968-bff020d9efba&providers=6f282c0a-3ade-43a4-ae49-8d1a41abc847&providers=e7ccd9db-d717-445e-b758-90c9d7fd0130&providers=1c4ba58d-9bc1-4d67-8c34-a62d0f8a32f2&providers=4768c7e0-3e50-4005-bafb-1e174c064474&returningPatientQuestionSet=709ca6a3-de0b-4c8b-b7da-d9943eec5ad5';

// Phone number
export const phoneNumber = '(636) 241-9807';

// Office locations
export const locations = [
  {
    name: "O'Fallon Office",
    address: '4701 State Highway K',
    city: "O'Fallon, MO 63368"
  },
  {
    name: 'Wentzville Office',
    address: '378 Shadow Pines Drive',
    city: 'Wentzville, MO 63385'
  },
  {
    name: 'St. Peters Office',
    address: '5200 Executive Center Pkwy',
    detail: 'Suite 300',
    city: 'St. Peters, MO 63376'
  }
];
