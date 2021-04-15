export interface ContactProps {
  setActiveSection({ id }: { id: string }): void;
}

export interface FormDataInterface {
  [index:string]: string;
  'email-address': string;
  'first-name': string;
  'form-name': 'contact-form';
  'last-name': string;
  message: string;
}
