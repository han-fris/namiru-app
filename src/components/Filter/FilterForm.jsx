import { useCallback } from 'react';

const submitOnChangeHandler = (e) => {
  e.currentTarget.requestSubmit();
};

export function FilterForm({
  children,
  className,
  onSubmit,
  submitOnChange = false,
}) {
  const submitHandler = useCallback(
    (e) => {
      const formData = new FormData(e.currentTarget);
      const newSearchParams = {};
      for (const [key, value] of formData.entries()) {
        newSearchParams[key] ??= [];
        newSearchParams[key].push(value);
      }
      if (onSubmit) {
        e.preventDefault();
        onSubmit(newSearchParams);
      }
    },
    [onSubmit]
  );

  return (
    <form
      className={className}
      onSubmit={submitHandler}
      onChange={submitOnChange && submitOnChangeHandler}
    >
      {children}
    </form>
  );
}
