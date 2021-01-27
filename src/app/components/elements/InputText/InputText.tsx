import React, { ChangeEvent, useCallback } from 'react';
import './InputText.scss';
import classnames from 'classnames';

interface IProps {
  inputType?: string;
  onChange: (text: string) => void;
  value: string;
  label: string;
  error?: string | boolean;
}

const InputText = ({
  label, onChange, value, error, inputType = 'text',
}: IProps) => {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  return (
    <div className={classnames('inputText', { error })}>
      <label>{label}</label>
      <input type={inputType} onChange={handleChange} value={value} />
      {error && <span className="errorFeedback">{error}</span>}
    </div>
  );
};

export default InputText;
