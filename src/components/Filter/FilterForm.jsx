import { useCallback } from 'react';
import './FilterOption.css';

const submitOnChangeHandler = (e) => {
  e.currentTarget.requestSubmit();
};

export function FilterForm({
  children,
  className,
  onSubmit,
  submitOnChange = false,
  action,
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
      action={action}
      onSubmit={submitHandler}
      onChange={submitOnChange ? submitOnChangeHandler : undefined}
    >
      {children}
    </form>
  );
}
