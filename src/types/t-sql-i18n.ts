export type TSqlLanguage = {
  lang_code: string;
  lang_name: string;
  native_name: string;
  user_count: number;
};

export type TSqlCountry = {
  country_code: string;
  country_name: string;
  native_name: string;
};

export type TSqlMapCountryLanguage = {
  country_lang_code: string;
  country_code: string;
  lang_code: string;
};
