import { useCallback } from 'react';
import './FilterForm.css';

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
      const filterObj = {};
      for (const [key, value] of formData.entries()) {
        filterObj[key] ??= [];
        filterObj[key].push(value);
      }
      if (onSubmit) {
        e.preventDefault();
        onSubmit(filterObj);
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
