import type { ChangeEvent } from "react";
import { useState } from "react";
import type { ValidationError } from "../types/Validation";

export function useFormInput(value: string, required = false) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState<ValidationError>({
    isError: false,
    errorMessage: "",
  });

  function handleInputChangeEvent(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    if (required) {
      if (inputValue === "") {
        // Setze einen Fehler
        setError({
          isError: true,
          errorMessage: "Bittegeben Sie einen Wert ein",
        });
      } else {
        // Resette Fehler
        setError({ isError: false, errorMessage: "" });
      }
    }
  }

  return {
    value: inputValue,
    handleInputChangeEvent,
    error: error,
  };
}
