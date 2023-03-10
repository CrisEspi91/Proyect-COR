import { __ } from '@wordpress/i18n';

const REGISTRATION_FORM = 'REGISTRATION_FORM';
const CONTACT_US_FORM = 'CONTACT_US_FORM';
const NEWSLETTER_FORM = 'NEWSLETTER_FORM';
const SUPPORT_FORM = 'SUPPORT_FORM';
const EVENT_FORM = 'EVENT_FORM';

export type FormType =
  | typeof REGISTRATION_FORM
  | typeof CONTACT_US_FORM
  | typeof NEWSLETTER_FORM
  | typeof SUPPORT_FORM
  | typeof EVENT_FORM;

export const DEFAULT_OPTIONS = {
  label: __('Templates', 'leadin'),
  options: [
    { label: __('Registration Form', 'leadin'), value: REGISTRATION_FORM },
    { label: __('Contact us Form', 'leadin'), value: CONTACT_US_FORM },
    { label: __('Newsletter sign-up Form', 'leadin'), value: NEWSLETTER_FORM },
    { label: __('Support Form', 'leadin'), value: SUPPORT_FORM },
    { label: __('Event Registration Form', 'leadin'), value: EVENT_FORM },
  ],
};

export function isDefaultForm(value: FormType) {
  return (
    value === REGISTRATION_FORM ||
    value === CONTACT_US_FORM ||
    value === NEWSLETTER_FORM ||
    value === SUPPORT_FORM ||
    value === EVENT_FORM
  );
}

const defaultProps = {
  action: '',
  method: 'POST',
  cssClass: 'hs-form stacked',
  redirect: '',
  submitText: 'Submit',
  followUpId: '',
  notifyRecipients: '',
  leadNurturingCampaignId: '',
  performableHtml: '',
  migratedFrom: '',
  ignoreCurrentValues: false,
  metaData: [
    { name: 'lang', value: 'en' },
    { name: 'embedType', value: 'REGULAR' },
  ],
  deletable: true,
  cloneable: true,
  captchaEnabled: false,
  inlineMessage: 'Thanks for submitting the form.',
  tmsId: '',
  campaignGuid: '',
  formType: 'HUBSPOT',
  editable: true,
  themeName: 'canvas',
  parentId: 0,
  isPublished: true,
  style:
    '{"fontFamily":"arial, helvetica, sans-serif","backgroundWidth":"100%","labelTextColor":"#33475b","linkColor":"#0000EE","clickedLinkColor":"#551A8B","labelTextSize":"13px","helpTextColor":"#7C98B6","helpTextSize":"11px","legalConsentTextColor":"#33475b","legalConsentTextSize":"14px","thankYouTextColor":"#33475b","thankYouTextSize":"16px","submitColor":"#ff7a59","submitAlignment":"left","submitFontColor":"#ffffff","submitSize":"12px","paginationProgressColor":"#598aff","paginationProgressTextColor":"#33475b","paginationProgressShow":true,"paginationProgressTransition":"fade","paginationProgressTheme":"default","paginationContentUseScroll":false,"paginationContentScrollHeight":"100%"}',
};

const emailFieldDef = {
  defaultValue: '',
  dependentFieldFilters: [],
  description: '',
  displayOrder: -1,
  enabled: true,
  fieldType: 'text',
  groupName: 'contactinformation',
  hidden: false,
  isSelected: false,
  isSmartField: false,
  metaData: [],
  label: 'Email',
  labelHidden: false,
  name: 'email',
  objectTypeId: '0-1',
  options: [],
  placeholder: '',
  required: true,
  selectedOptions: [],
  propertyObjectType: 'CONTACT',
  type: 'string',
  unselectedLabel: '',
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
};

const firsNameFieldDef = {
  defaultValue: '',
  dependentFieldFilters: [],
  description: '',
  displayOrder: -1,
  enabled: true,
  fieldType: 'text',
  groupName: 'contactinformation',
  hidden: false,
  isSelected: false,
  isSmartField: false,
  metaData: [],
  label: 'First name',
  labelHidden: false,
  name: 'firstname',
  objectTypeId: '0-1',
  options: [],
  placeholder: '',
  required: false,
  selectedOptions: [],
  propertyObjectType: 'CONTACT',
  type: 'string',
  unselectedLabel: '',
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
};

const lastNameFieldDef = {
  defaultValue: '',
  dependentFieldFilters: [],
  description: '',
  displayOrder: -1,
  enabled: true,
  fieldType: 'text',
  groupName: 'contactinformation',
  hidden: false,
  isSelected: false,
  isSmartField: false,
  metaData: [],
  label: 'Last name',
  labelHidden: false,
  name: 'lastname',
  objectTypeId: '0-1',
  options: [],
  placeholder: '',
  required: false,
  selectedOptions: [],
  propertyObjectType: 'CONTACT',
  type: 'string',
  unselectedLabel: '',
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
};

const messageFieldDef = {
  defaultValue: '',
  dependentFieldFilters: [],
  description: '',
  displayOrder: -1,
  enabled: true,
  fieldType: 'textarea',
  groupName: 'contactinformation',
  hidden: false,
  isSelected: false,
  isSmartField: false,
  metaData: [],
  label: 'Message',
  labelHidden: false,
  name: 'message',
  objectTypeId: '0-1',
  options: [],
  placeholder: '',
  required: false,
  selectedOptions: [],
  propertyObjectType: 'CONTACT',
  type: 'string',
  unselectedLabel: '',
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
};

const phoneNumberFieldDef = {
  defaultValue: '',
  dependentFieldFilters: [],
  description: '',
  displayOrder: -1,
  enabled: true,
  fieldType: 'text',
  groupName: 'contactinformation',
  hidden: false,
  isSelected: false,
  isSmartField: false,
  metaData: [],
  label: 'Phone number',
  labelHidden: false,
  name: 'phone',
  objectTypeId: '0-1',
  options: [],
  placeholder: '',
  required: false,
  selectedOptions: [],
  propertyObjectType: 'CONTACT',
  type: 'string',
  unselectedLabel: '',
  validation: {
    name: '',
    message: '',
    data: '7:20:true',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
};

const ticketNameFieldDef = {
  defaultValue: '',
  dependentFieldFilters: [],
  description: '',
  displayOrder: -1,
  enabled: true,
  fieldType: 'text',
  groupName: 'ticketinformation',
  hidden: false,
  isSelected: false,
  isSmartField: false,
  metaData: [],
  label: 'Ticket name',
  labelHidden: false,
  name: 'subject',
  objectTypeId: '0-5',
  options: [],
  placeholder: '',
  required: true,
  selectedOptions: [],
  propertyObjectType: 'TICKET',
  type: 'string',
  unselectedLabel: '',
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
};

const tickedDescFieldDef = {
  defaultValue: '',
  dependentFieldFilters: [],
  description: '',
  displayOrder: -1,
  enabled: true,
  fieldType: 'textarea',
  groupName: 'ticketinformation',
  hidden: false,
  isSelected: false,
  isSmartField: false,
  metaData: [],
  label: 'Ticket description',
  labelHidden: false,
  name: 'content',
  objectTypeId: '0-5',
  options: [],
  placeholder: '',
  required: true,
  selectedOptions: [],
  propertyObjectType: 'TICKET',
  type: 'string',
  unselectedLabel: '',
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
};

const companyNameFieldDef = {
  defaultValue: '',
  dependentFieldFilters: [],
  description: '',
  displayOrder: -1,
  enabled: true,
  fieldType: 'text',
  groupName: 'contactinformation',
  hidden: false,
  isSelected: false,
  isSmartField: false,
  metaData: [],
  label: 'Company name',
  labelHidden: false,
  name: 'company',
  objectTypeId: '0-1',
  options: [],
  placeholder: '',
  required: false,
  selectedOptions: [],
  propertyObjectType: 'CONTACT',
  type: 'string',
  unselectedLabel: '',
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
};

const jobTitleFieldDef = {
  defaultValue: '',
  dependentFieldFilters: [],
  description: '',
  displayOrder: -1,
  enabled: true,
  fieldType: 'text',
  groupName: 'contactinformation',
  hidden: false,
  isSelected: false,
  isSmartField: false,
  metaData: [],
  label: 'Job title',
  labelHidden: false,
  name: 'jobtitle',
  objectTypeId: '0-1',
  options: [],
  placeholder: '',
  required: false,
  selectedOptions: [],
  propertyObjectType: 'CONTACT',
  type: 'string',
  unselectedLabel: '',
  validation: {
    name: '',
    message: '',
    data: '',
    useDefaultBlockList: false,
    blockedEmailAddresses: [],
  },
};

const FORMS_TYPES = {
  [REGISTRATION_FORM]: {
    name: 'New registration form',
    formFieldGroups: [
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '5' },
        isPageBreak: false,
      },
      {
        fields: [firsNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '6' },
        isPageBreak: false,
      },
      {
        fields: [lastNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '7' },
        isPageBreak: false,
      },
      {
        fields: [phoneNumberFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '8' },
        isPageBreak: false,
      },
    ],
  },
  [CONTACT_US_FORM]: {
    name: 'New contact us form',
    formFieldGroups: [
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '1' },
        isPageBreak: false,
      },
      {
        fields: [firsNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '2' },
        isPageBreak: false,
      },
      {
        fields: [lastNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '3' },
        isPageBreak: false,
      },
      {
        fields: [messageFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '4' },
        isPageBreak: false,
      },
    ],
  },
  [NEWSLETTER_FORM]: {
    name: 'New newsletter sign-up form',
    formFieldGroups: [
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '1' },
        isPageBreak: false,
      },
      {
        fields: [firsNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '2' },
        isPageBreak: false,
      },
      {
        fields: [lastNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '3' },
        isPageBreak: false,
      },
    ],
  },
  [SUPPORT_FORM]: {
    name: 'New support form',
    formFieldGroups: [
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '1' },
        isPageBreak: false,
      },
      {
        fields: [ticketNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '2' },
        isPageBreak: false,
      },
      {
        fields: [tickedDescFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '3' },
        isPageBreak: false,
      },
    ],
  },
  [EVENT_FORM]: {
    name: 'New event registration form',
    formFieldGroups: [
      {
        fields: [companyNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '4' },
        isPageBreak: false,
      },
      {
        fields: [emailFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '5' },
        isPageBreak: false,
      },
      {
        fields: [firsNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '6' },
        isPageBreak: false,
      },
      {
        fields: [lastNameFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '7' },
        isPageBreak: false,
      },
      {
        fields: [jobTitleFieldDef],
        default: true,
        isSmartGroup: false,
        richText: { content: '', type: 'TEXT', privateInternalId: '8' },
        isPageBreak: false,
      },
    ],
  },
};

export function getFormDef(type: FormType) {
  const { locale = 'en-us' } = Intl.DateTimeFormat().resolvedOptions();
  const today = new Date();
  const selectedForm = FORMS_TYPES[type];
  return {
    ...defaultProps,
    ...selectedForm,
    name: `${selectedForm.name} (${today.toLocaleDateString(locale, {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })}) `,
  };
}

export type IFormTypeDefinition = ReturnType<typeof getFormDef>;
