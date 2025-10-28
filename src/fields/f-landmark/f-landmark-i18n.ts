export const F_LANDMARK_I18N = {
  landmark_id: {
    id: "landmark_id",
    label: "Landmark ID",
    is_required: true,
    max_length: 10,
    placeholder: "Primary Key ex. 1234567890",
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
    label: "Street Name (i18n)",
    is_required: true,
    max_length: 255,
    placeholder: "ex. Seoul",
  },
  description_i18n: {
    id: "description_i18n",
    label: "Street Description (i18n)",
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
