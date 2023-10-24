import { FC } from "react";

import { BG } from "./BG";
import { PB } from "./PB";
import { ISalaryProps, Salary } from "./Salary";

export interface IJobProps {
  title: string;
  location: string;
  salary: ISalaryProps;
}

export const Job: FC<IJobProps> = ({
  title,
  location,
  salary,
}) => (
  <div
    style={{
      display: 'flex',
      padding: '40px',
      width: '100%',
      height: '100%',
      fontFamily: 'Inter',
    }}
  >
    <div style={{
      display: 'flex',
      position: 'absolute',
    }}>
      <BG />
    </div>
    <div id="content"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: '#13151A',
        borderRadius: '50px',
        width: '100%',
        height: '100%',
        padding: '60px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Salary {...salary} />

      <span
        style={{
          color: '#fff',
          fontSize: '112px',
          fontFamily: 'Inter',
          fontWeight: '600',
          lineHeight: '105%',
          letterSpacing: '-5.04px',
        }}>
        {title}
      </span>

      <div id="footer"
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <span
          style={{
            color: '#9196A1',
            fontSize: '48px',
            fontWeight: '500',
            letterSpacing: '-2.16px',
          }}>
          {location}
        </span>

        <PB />
      </div>
    </div>
  </div >
);