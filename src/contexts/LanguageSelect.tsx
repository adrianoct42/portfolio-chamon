import { MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function LanguageSelect() {
  const { i18n } = useTranslation();

  // First time setup:
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // When changing the language:
  const handleChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      size="small"
      variant="outlined"
      sx={{ minWidth: 120 }}
    >
      <MenuItem value="pt">🇧🇷 Português</MenuItem>
      <MenuItem value="en">🇺🇸 English</MenuItem>
    </Select>
  );
}
