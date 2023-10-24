import { FC } from "react";

export interface ISalaryProps {
  amount?: string;
  currency?: string;
}

export const Salary: FC<ISalaryProps> = ({
  amount = '',
  currency = ''
}) => {
  const num = +amount;

  if (isNaN(num) || num <= 0) return (
    <span
      style={{
        position: 'absolute',
        color: '#191C21',
        left: '71px',
        bottom: '255px',
        fontSize: '402.567px',
        fontStyle: 'italic',
        fontWeight: '500',
        lineHeight: '85.023%',
        letterSpacing: '-18.116px',
        whiteSpace: 'nowrap'
      }}>
      {`¯\\_(`}
      <i style={{ fontFamily: 'Noto' }}>ツ</i>
      {`)_/¯`}
    </span>
  );

  if (currency == '₽') return (
    <span
      style={{
        position: 'absolute',
        color: '#191C21',
        left: '-54px',
        bottom: '-35px',
        fontSize: '785.188px',
        fontStyle: 'italic',
        fontWeight: '500',
        letterSpacing: '-35.333px',
        whiteSpace: 'nowrap'
      }}>
      {`${~~(num / 1000)}K`}
    </span>
  );

  if (num <= 9999) return (
    <span
      style={{
        position: 'absolute',
        color: '#191C21',
        left: '-23px',
        bottom: '41px',
        fontSize: '624.302px',
        fontStyle: 'italic',
        fontWeight: '500',
        letterSpacing: '-28.094px',
        whiteSpace: 'nowrap'
      }}>
      {`${currency}${num}`}
    </span>
  );

  return (
    <span
      style={{
        position: 'absolute',
        color: '#191C21',
        left: '-14px',
        bottom: '95px',
        fontSize: '536.629px',
        fontStyle: 'italic',
        fontWeight: '500',
        letterSpacing: '-24.148px',
        whiteSpace: 'nowrap'
      }}>
      {`${currency}${num}`}
    </span>
  );
};