export const F_TEMP_INFLUENCER_DATA = {
    id: {
        id: "id",
        label: "Temp Influencer Data ID",
        is_required: true,
        max_length: 10,
        placeholder: "ex. 1, 2, 3, etc.",
    },
    influencer_name: {
        id: "influencer_name",
        label: "Influencer Name",
        is_required: true,
        max_length: 255,
        placeholder: "ex. Korea",
    },
    source_type: {
        id: "source_type",
        label: "Source Type",
        is_required: true,
        max_length: 50,
        placeholder: "ex. youtube-video, instagram-post, blog-post, text, etc.",
    },
    source_id: {
        id: "source_id",
        label: "Source ID",
        is_required: true,
        max_length: 1023,
        placeholder: "ex. 1234567890",
    },
    influencer_id: {
        id: "influencer_id",
        label: "Influencer ID",
        is_required: false,
        max_length: 10,
        placeholder: "ex. 1, 2, 3, etc.",
    },
    admin_message: {
        id: "name_ko",
        label: "Admin Message",
        is_required: false,
        max_length: 1023,
        placeholder: "ex. This city is not valid.",
    },
    is_processed: {
        id: "is_processed",
        label: "Is Processed",
        is_required: true,
        placeholder: "ex. true, false",
        default_value: false,
    },
    processed_at: {
        id: "processed_at",
        label: "Processed At",
        is_required: false,
        max_length: 100,
        placeholder: "ex. Default value is now",
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
};
//# sourceMappingURL=f-temp-influencer-data.js.map