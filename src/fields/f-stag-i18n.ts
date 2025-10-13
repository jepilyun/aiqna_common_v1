export const F_STAG_I18N = {
  stag_code: {
    id: "stag_code",
    label: "Stag Code",
    is_required: true,
    max_length: 96,
    placeholder: "Primary Key ex. seoul, jeju, bangkok, etc.",
  },
  lang_code: {
    id: "lang_code",
    label: "Language Code",
    is_required: true,
    max_length: 8,
    placeholder: "ex. en, ko, zh-hans, zh-hant, etc.",
  },
  name_i18n: {
    id: "name_i18n",
    label: "City Name (i18n)",
    is_required: true,
    max_length: 255,
    placeholder: "ex. Seoul",
  },
  description_i18n: {
    id: "description_i18n",
    label: "City Description (i18n)",
    is_required: false,
    max_length: 1023,
    placeholder: "ex. Seoul is the capital of South Korea.",
  },
  created_at: {
    id: "created_at",
    label: "Created At",
    is_required: true,
  },
  updated_at: {
    id: "updated_at",
    label: "Updated At",
    is_required: true,
  },
};
