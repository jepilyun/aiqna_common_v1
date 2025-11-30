export const F_TAG = {
  id: {
    id: "id",
    label: "Tag ID",
    is_required: false,
    max_length: 63,
    placeholder: "ex. UUID",
  },
  tag: {
    id: "tag",
    label: "Tag",
    is_required: true,
    max_length: 63,
    placeholder: "ex. Tag",
  },
  content_count: {
    id: "content_count",
    label: "Content Count",
    is_required: true,
    max_length: 10,
    placeholder: "ex. 100",
  },
  created_at: {
    id: "created_at",
    label: "Created At",
    is_required: true,
  },
  updated_at: {
    id: "updated_at",
    label: "Updated At",
    is_required: false,
  },
  is_active: {
    id: "is_active",
    label: "Is Active",
    is_required: true,
    default_value: false,
  },
};
